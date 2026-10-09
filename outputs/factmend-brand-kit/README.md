# Factmend brand kit

Start with **BRAND_IDENTITY.md** and **FOUNDATIONS.md**. Open **index.html** for the interactive specimen, or serve this folder locally:

```sh
python3 -m http.server 8767 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8767`. No build step, account, external API or remote font is needed. Filters, flip control, chart details and receipt simulation operate locally. The JSON export contains synthetic data only.

- `foundations.css` / `foundations.js`: grid, spacing, typography, alignment, shadow and border specimens.
- `logos/`: outlined SVG and transparent PNG variants.
- `favicons/`: SVG, ICO, PNG sizes, maskable icon and manifest.
- `icons/`: 39 original UI icons plus sprite.
- `visuals/`: 18 explanatory SVG plates and 5 pattern tiles.
- `images/`: 3 original generated PNGs and compressed WebP versions.
- `fonts/`: two font families and OFL licences.
- `social/`: original official LinkedIn / Crunchbase assets.
- `tokens/`: colour, type, spacing, radius, shadow and motion tokens; calculated contrast pairs.
- `fixtures.json`: eight synthetic records and partial receipt status.
- `PAGE_VISUAL_MAP.md`: distinct page/section design plan.
- `MOTION_AND_INTERACTIONS.md`: keyboard, touch and reduced-motion requirements.
- `ASSET_SOURCES.md`: provenance and licences.
- `QA.md`: validation and remaining scope.

The next website task is the whole-system homepage hero and the actual page build. This kit does not claim that a production website, backend, social profiles or deployment exists.
