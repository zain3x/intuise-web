"""Generate raster fallbacks from the Intuise Prism Lens favicon geometry."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "brand"
SCALE = 4
CANVAS = 512


def gradient(size: int, start: tuple[int, int, int], end: tuple[int, int, int]) -> Image.Image:
    ramp = Image.linear_gradient("L").resize((size, size))
    return ImageOps.colorize(ramp, start, end).convert("RGBA")


def render(size: int) -> Image.Image:
    work_size = size * SCALE
    factor = work_size / 64
    canvas = Image.new("RGBA", (work_size, work_size), (0, 0, 0, 0))

    shapes = [
        ([(5, 32), (22, 6), (37, 6), (20, 32), (37, 58), (22, 58)], (140, 232, 238), (19, 198, 212)),
        ([(59, 32), (42, 6), (27, 6), (44, 32), (27, 58), (42, 58)], (199, 79, 138), (133, 85, 217)),
    ]

    for points, start, end in shapes:
        mask = Image.new("L", (work_size, work_size), 0)
        ImageDraw.Draw(mask).polygon([(round(x * factor), round(y * factor)) for x, y in points], fill=255)
        canvas.alpha_composite(Image.composite(gradient(work_size, start, end), Image.new("RGBA", (work_size, work_size)), mask))

    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    render(192).save(OUT / "intuise-icon-192.png", optimize=True)
    render(512).save(OUT / "intuise-icon-512.png", optimize=True)
    render(180).save(OUT / "apple-touch-icon.png", optimize=True)
    render(256).save(
        ROOT / "public" / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )


if __name__ == "__main__":
    main()
