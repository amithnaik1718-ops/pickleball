using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class CheckerboardExtractor
{
    private static bool IsBackdrop(byte[] pixels, int offset)
    {
        int blue = pixels[offset];
        int green = pixels[offset + 1];
        int red = pixels[offset + 2];
        int minimum = Math.Min(red, Math.Min(green, blue));
        int maximum = Math.Max(red, Math.Max(green, blue));
        return minimum >= 230 && maximum - minimum <= 7;
    }

    private static void AddCandidate(
        int x,
        int y,
        int width,
        int height,
        int stride,
        byte[] pixels,
        bool[] background,
        int[] queue,
        ref int tail)
    {
        if (x < 0 || x >= width || y < 0 || y >= height) return;
        int index = (y * width) + x;
        if (background[index]) return;
        int offset = (y * stride) + (x * 4);
        if (!IsBackdrop(pixels, offset)) return;
        background[index] = true;
        queue[tail++] = index;
    }

    public static void Extract(string sourcePath, string destinationPath)
    {
        Bitmap image;
        using (Bitmap source = new Bitmap(sourcePath))
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
            BitmapData data = image.LockBits(rectangle, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = Math.Abs(data.Stride);
            byte[] pixels = new byte[stride * image.Height];
            Marshal.Copy(data.Scan0, pixels, 0, pixels.Length);

            int count = image.Width * image.Height;
            bool[] background = new bool[count];
            int[] queue = new int[count];
            int head = 0;
            int tail = 0;

            for (int x = 0; x < image.Width; x++)
            {
                AddCandidate(x, 0, image.Width, image.Height, stride, pixels, background, queue, ref tail);
                AddCandidate(x, image.Height - 1, image.Width, image.Height, stride, pixels, background, queue, ref tail);
            }
            for (int y = 0; y < image.Height; y++)
            {
                AddCandidate(0, y, image.Width, image.Height, stride, pixels, background, queue, ref tail);
                AddCandidate(image.Width - 1, y, image.Width, image.Height, stride, pixels, background, queue, ref tail);
            }

            while (head < tail)
            {
                int index = queue[head++];
                int x = index % image.Width;
                int y = index / image.Width;
                AddCandidate(x - 1, y, image.Width, image.Height, stride, pixels, background, queue, ref tail);
                AddCandidate(x + 1, y, image.Width, image.Height, stride, pixels, background, queue, ref tail);
                AddCandidate(x, y - 1, image.Width, image.Height, stride, pixels, background, queue, ref tail);
                AddCandidate(x, y + 1, image.Width, image.Height, stride, pixels, background, queue, ref tail);
            }

            for (int y = 0; y < image.Height; y++)
            {
                for (int x = 0; x < image.Width; x++)
                {
                    int index = (y * image.Width) + x;
                    int offset = (y * stride) + (x * 4);
                    pixels[offset + 3] = background[index] ? (byte)0 : (byte)255;
                }
            }

            Marshal.Copy(pixels, 0, data.Scan0, pixels.Length);
            image.UnlockBits(data);
            image.Save(destinationPath, ImageFormat.Png);
        }
        finally
        {
            image.Dispose();
        }
    }
}
