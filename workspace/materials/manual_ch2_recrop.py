#!/usr/bin/env python3
"""Manual Chapter 2 figure recrop from full page PNGs.

This replaces the failed GPT-detected crop batch. Coordinates are pixel boxes
on 1800x2200 rendered page images and intentionally exclude captions, body
paragraphs, page headers, section headings, and drill boxes.
"""

import json
import re
from pathlib import Path
from PIL import Image

DIR = Path(__file__).resolve().parent
PAGE_DIR = DIR / "new-book-pages"
OCR_DIR = DIR / "new-book-ocr"
FIG_DIR = DIR / "new-book-figures"
FIG_DIR.mkdir(exist_ok=True)


def safe_name(fig_id: str) -> str:
    return re.sub(r"[^a-zA-Z0-9_-]+", "_", fig_id).strip("_").lower()


# page, fig_id, box=(left, top, right, bottom), caption
SPECS = [
    (160, "Figure 2.1", (285, 245, 1315, 580), "Circuits for Ex. 2.4."),
    (162, "Figure 2.2", (330, 1490, 860, 1785), "Modes always get a free ride."),
    (169, "Figure 2.3", (455, 230, 1460, 1895), "Finding the system response to an arbitrary input x(t)."),
    (172, "Figure 2.4", (380, 480, 1515, 710), "Width property of convolution."),
    (173, "Figure 2.5", (395, 250, 1130, 675), "Limits of the convolution integral."),
    (174, "Figure 2.6", (290, 245, 1170, 1035), "Convolution of x(t) and h(t)."),
    (179, "Figure 2.7", (430, 230, 1100, 1900), "Graphical explanation of the convolution operation."),
    (180, "convolution-cartoon", (935, 1298, 1425, 1580), "Convolution cartoon."),
    (182, "Figure 2.8", (265, 230, 960, 1585), "Convolution of x(t) and h(t)."),
    (184, "Figure 2.9", (140, 230, 1275, 1585), "Convolution of x(t) and g(t)."),
    (186, "Figure 2.10", (250, 225, 1185, 1588), "Convolution of x(t) and g(t)."),
    (188, "Figure 2.11", (400, 245, 1305, 435), "Convolution of causal signals x(t) and g(t)."),
    (188, "Figure 2.12", (435, 965, 1365, 1160), "Convolution of causal x(t) and anticausal g(t)."),
    (188, "Figure 2.13", (435, 1635, 1435, 1845), "Convolution of shifted signals x(t) and g(t)."),
    (190, "Figure 2.14", (250, 235, 1230, 570), "Intuitive explanation of convolution."),
    (191, "Figure 2.15", (410, 230, 1080, 1175), "Interconnected systems."),
    (195, "Figure 2.16", (105, 1470, 1395, 1665), "Total response and its components."),
    (199, "Figure 2.17", (310, 245, 1200, 1395), "Location of characteristic roots and corresponding modes."),
    (200, "Figure 2.18", (285, 245, 1150, 705), "Characteristic root location and system stability."),
    (201, "Figure 2.19", (300, 250, 1245, 405), "Composite cascade system."),
    (202, "Figure 2.20", (310, 1045, 1490, 1300), "Characteristic root locations for the systems of Ex. 2.14."),
    (206, "Figure 2.21", (250, 245, 1125, 470), "Effective duration of an impulse response."),
    (207, "Figure 2.22", (380, 250, 1460, 440), "Rise time of a system."),
    (207, "Figure 2.23", (430, 1010, 1355, 1548), "Time constant and filtering."),
    (211, "Figure 2.24", (395, 1430, 865, 1795), "Buildup of system response in resonance."),
    (213, "Figure 2.25", (470, 1500, 1230, 1895), "Operation-amplifier circuit."),
    (217, "Figure 2.26", (300, 245, 1300, 835), "Effect of component values on characteristic root locations."),
    (219, "Figure 2.27", (475, 245, 1595, 855), "Graphical convolution at step t = 0.75 second."),
    (219, "Figure 2.28", (475, 1020, 1595, 1665), "Graphical convolution at step t = 2.25 seconds."),
    (220, "Figure 2.29", (320, 245, 1515, 810), "Graphical convolution at step t = 2.85 seconds."),
]


def main():
    for old in FIG_DIR.glob("page-1[5-9]*.png"):
        old.unlink()
    for old in FIG_DIR.glob("page-2[0-2]*.png"):
        old.unlink()

    figs_by_page = {}
    for page, fig_id, box, caption in SPECS:
        page_id = f"page-{page:03d}"
        image_path = PAGE_DIR / f"{page_id}.png"
        with Image.open(image_path) as im:
            W, H = im.size
            l, t, r, b = box
            crop = im.crop((l, t, r, b))
            out_name = f"{page_id}-{safe_name(fig_id)}.png"
            crop.save(FIG_DIR / out_name)
            figs_by_page.setdefault(page, []).append({
                "fig_id": fig_id,
                "top": round(t / H, 4),
                "left": round(l / W, 4),
                "bottom": round(b / H, 4),
                "right": round(r / W, 4),
                "caption": caption,
                "crop_file": out_name,
            })
            print(f"saved {out_name} {r-l}x{b-t}")

    for page in range(150, 224):
        meta_path = OCR_DIR / f"page-{page:03d}.meta.json"
        if not meta_path.exists():
            continue
        data = json.loads(meta_path.read_text(encoding="utf-8"))
        if page in figs_by_page:
            data["figures"] = figs_by_page[page]
        else:
            data["figures"] = []
        meta_path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
