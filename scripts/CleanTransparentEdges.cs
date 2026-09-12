using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class EdgeCleaner
{
    private static int GetAlpha(byte[] pixels, int stride, int x, int y)
    {
        return pixels[(y * stride) + (x * 4) + 3];
    }

    private static void TryAdd(
        int x,
        int y,
        byte currentDistance,
        int width,
        int height,
        int stride,
        byte[] pixels,
        byte[] distance,
        int[] queue,
        ref int queueTail)
    {
        if (x < 0 || x >= width || y < 0 || y >= height) return;
        int index = (y * width) + x;
        if (distance[index] != byte.MaxValue || GetAlpha(pixels, stride, x, y) == 0) return;
        distance[index] = (byte)(currentDistance + 1);
        queue[queueTail++] = index;
    }

    public static void Clean(string path)
    {
        Bitmap image;
        using (Bitmap source = new Bitmap(path))
        {
            image = new Bitmap(source.Width, source.Height, PixelFormat.Format32bppArgb);
            using (Graphics graphics = Graphics.FromImage(image))
            {
                graphics.DrawImageUnscaled(source, 0, 0);
            }
        }

        try
        {
            Rectangle rectangle = new Rectangle(0, 0, image.Width, image.Height);
            BitmapData bitmapData = image.LockBits(rectangle, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = Math.Abs(bitmapData.Stride);
            byte[] pixels = new byte[stride * image.Height];
            Marshal.Copy(bitmapData.Scan0, pixels, 0, pixels.Length);

            int count = image.Width * image.Height;
            byte[] distance = new byte[count];
            for (int i = 0; i < distance.Length; i++) distance[i] = byte.MaxValue;
            int[] queue = new int[count];
            int queueHead = 0;
            int queueTail = 0;

            for (int y = 0; y < image.Height; y++)
            {
                for (int x = 0; x < image.Width; x++)
                {
                    if (GetAlpha(pixels, stride, x, y) == 0) continue;
                    bool touchesTransparency =
                        (x > 0 && GetAlpha(pixels, stride, x - 1, y) == 0) ||
                        (x + 1 < image.Width && GetAlpha(pixels, stride, x + 1, y) == 0) ||
                        (y > 0 && GetAlpha(pixels, stride, x, y - 1) == 0) ||
                        (y + 1 < image.Height && GetAlpha(pixels, stride, x, y + 1) == 0);

                    if (!touchesTransparency) continue;
                    int index = (y * image.Width) + x;
                    distance[index] = 1;
                    queue[queueTail++] = index;
                }
            }

            while (queueHead < queueTail)
            {
                int index = queue[queueHead++];
                byte currentDistance = distance[index];
                if (currentDistance >= 3) continue;
                int x = index % image.Width;
                int y = index / image.Width;
                TryAdd(x - 1, y, currentDistance, image.Width, image.Height, stride, pixels, distance, queue, ref queueTail);
                TryAdd(x + 1, y, currentDistance, image.Width, image.Height, stride, pixels, distance, queue, ref queueTail);
                TryAdd(x, y - 1, currentDistance, image.Width, image.Height, stride, pixels, distance, queue, ref queueTail);
                TryAdd(x, y + 1, currentDistance, image.Width, image.Height, stride, pixels, distance, queue, ref queueTail);
            }

            int[] alphaCaps = new int[] { 0, 0, 128, 218 };
            for (int y = 0; y < image.Height; y++)
            {
                for (int x = 0; x < image.Width; x++)
                {
                    int index = (y * image.Width) + x;
                    byte edgeDistance = distance[index];
                    if (edgeDistance < 1 || edgeDistance > 3) continue;

                    int nearestOffset = -1;
                    int nearestDistance = int.MaxValue;
                    for (int radiusY = -8; radiusY <= 8; radiusY++)
                    {
                        int sampleY = y + radiusY;
                        if (sampleY < 0 || sampleY >= image.Height) continue;
                        for (int radiusX = -8; radiusX <= 8; radiusX++)
                        {
                            int sampleX = x + radiusX;
                            if (sampleX < 0 || sampleX >= image.Width) continue;
                            int sampleIndex = (sampleY * image.Width) + sampleX;
                            if (distance[sampleIndex] != byte.MaxValue || GetAlpha(pixels, stride, sampleX, sampleY) < 245) continue;
                            int squaredDistance = (radiusX * radiusX) + (radiusY * radiusY);
                            if (squaredDistance >= nearestDistance) continue;
                            nearestDistance = squaredDistance;
                            nearestOffset = (sampleY * stride) + (sampleX * 4);
                        }
                    }

                    int offset = (y * stride) + (x * 4);
                    int currentAlpha = pixels[offset + 3];
                    int cleanedAlpha = Math.Min(currentAlpha, alphaCaps[edgeDistance]);

                    if (nearestOffset >= 0)
                    {
                        double alphaEstimate = 0.0;
                        int estimateCount = 0;
                        for (int channel = 0; channel < 3; channel++)
                        {
                            int denominator = 255 - pixels[nearestOffset + channel];
                            if (denominator < 12) continue;
                            double estimate = (255.0 - pixels[offset + channel]) / denominator;
                            alphaEstimate += Math.Max(0.0, Math.Min(1.0, estimate));
                            estimateCount++;
                        }

                        if (estimateCount > 0)
                        {
                            cleanedAlpha = Math.Min(cleanedAlpha, (int)Math.Round(255 * alphaEstimate / estimateCount));
                        }

                        pixels[offset] = pixels[nearestOffset];
                        pixels[offset + 1] = pixels[nearestOffset + 1];
                        pixels[offset + 2] = pixels[nearestOffset + 2];
                    }

                    pixels[offset + 3] = (byte)Math.Max(0, cleanedAlpha);
                }
            }

            Marshal.Copy(pixels, 0, bitmapData.Scan0, pixels.Length);
            image.UnlockBits(bitmapData);
            image.Save(path, ImageFormat.Png);
        }
        finally
        {
            image.Dispose();
        }
    }
}
