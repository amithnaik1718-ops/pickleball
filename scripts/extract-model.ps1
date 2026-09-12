param(
  [Parameter(Mandatory = $true)]
  [string]$Source,

  [Parameter(Mandatory = $true)]
  [string]$Destination
)

Add-Type -AssemblyName System.Drawing

$sourceImage = [System.Drawing.Bitmap]::new($Source)
$outputImage = [System.Drawing.Bitmap]::new(
  $sourceImage.Width,
  $sourceImage.Height,
  [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
)

for ($y = 0; $y -lt $sourceImage.Height; $y++) {
  for ($x = 0; $x -lt $sourceImage.Width; $x++) {
    $pixel = $sourceImage.GetPixel($x, $y)
    $minimumChannel = [Math]::Min($pixel.R, [Math]::Min($pixel.G, $pixel.B))
    $maximumChannel = [Math]::Max($pixel.R, [Math]::Max($pixel.G, $pixel.B))
    $channelSpread = $maximumChannel - $minimumChannel

    # The source has a neutral white studio backdrop. A soft luminance key keeps
    # the athlete's shaded white clothing while removing the brighter background.
    $isSparkleArtifact =
      $x -ge [int]($sourceImage.Width * 0.84) -and
      $y -ge [int]($sourceImage.Height * 0.70)

    if ($isSparkleArtifact) {
      $alpha = 0
    } elseif ($minimumChannel -ge 249 -and $channelSpread -le 7) {
      $alpha = 0
    } elseif ($minimumChannel -ge 238 -and $channelSpread -le 12) {
      $alpha = [int](255 * (249 - $minimumChannel) / 11)
    } else {
      $alpha = 255
    }

    $outputImage.SetPixel(
      $x,
      $y,
      [System.Drawing.Color]::FromArgb($alpha, $pixel.R, $pixel.G, $pixel.B)
    )
  }
}

$outputImage.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
$sourceImage.Dispose()
$outputImage.Dispose()

Add-Type -Path (Join-Path $PSScriptRoot 'CleanTransparentEdges.cs') -ReferencedAssemblies 'System.Drawing.dll'
[EdgeCleaner]::Clean($Destination)
