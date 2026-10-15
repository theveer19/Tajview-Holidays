"""Social-share images: 1200x630 JPGs for WhatsApp, Facebook and LinkedIn previews.
Run once after adding a new photo:  python tools/make-og.py   (needs Pillow)"""
import glob, os
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = os.path.join(ROOT, "assets/img/og")
os.makedirs(out, exist_ok=True)
for src in glob.glob(os.path.join(ROOT, "assets/img/photos/*-1600.webp")):
    name = os.path.basename(src)[:-len("-1600.webp")]
    dst = os.path.join(out, name + ".jpg")
    if os.path.exists(dst):
        continue
    im = Image.open(src).convert("RGB")
    w, h = im.size
    th = int(w * 630 / 1200)
    top = max(0, (h - th) // 2)
    im.crop((0, top, w, top + th)).resize((1200, 630), Image.LANCZOS).save(dst, quality=72, optimize=True, progressive=True)
    print("made", name)
