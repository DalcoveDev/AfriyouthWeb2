# Gilroy font files

Gilroy is a commercial typeface (Radomir Tinkov). The licensed `.woff2` files
are not committed to the source repository, so the two weights available here
were generated locally from the licensed `.otf` sources.

## Mounted in this build

| File                     | Weight | Source                   |
| ------------------------ | ------ | ------------------------ |
| `Gilroy-Light.woff2`     | 300    | `Gilroy-Light.otf`       |
| `Gilroy-ExtraBold.woff2` | 800    | `Gilroy-ExtraBold.otf`   |

These are the only two weights included in the free Gilroy pack (Radomir Tinkov
Free Font EULA, January 2016, which permits commercial use and generating web
font formats for `@font-face`). Body copy therefore renders in Light, and
`<strong>` renders in ExtraBold.

## Still missing from the intended design

| File                        | Weight | Used by                        |
| --------------------------- | ------ | ------------------------------ |
| `Gilroy-Regular.woff2`      | 400    | Body copy                      |
| `Gilroy-Medium.woff2`       | 500    | Buttons / emphasis             |
| `Gilroy-SemiBold.woff2`     | 600    | Labels, nav, small headings    |
| `Gilroy-Bold.woff2`         | 700    | Bold body copy                 |

These require the full (paid) Gilroy family. Once the `.otf` files are licensed,
regenerate the web fonts with:

```bash
python -m pip install --user fonttools brotli
python - <<'PY'
from fontTools.ttLib import TTFont
for weight in ("Regular", "Medium", "SemiBold", "Bold"):
    font = TTFont(f"Gilroy-{weight}.otf")
    font.flavor = "woff2"
    font.save(f"public/fonts/Gilroy-{weight}.woff2")
PY
```

Then restore the matching `@font-face` blocks in `src/styles/fonts.css`; the
`--font-body` stack in `src/styles/tokens.css` already lists `'Gilroy'` first, so
nothing else needs to change.
