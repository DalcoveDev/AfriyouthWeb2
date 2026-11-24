import {
  AFRICA_COUNTRIES,
  CONTEXT_COUNTRIES,
  KIGALI_POINT,
} from '@/data/africaMapPaths';
import { WORLD_COUNTRIES, WORLD_FRAME } from '@/data/worldMapPaths';
import styles from './AfricaFootprintMap.module.css';

const EAST_AFRICA_NEIGHBORS = new Set(['UGA', 'TZA', 'KEN', 'BDI', 'COD']);

interface MapLabel {
  text: string;
  x: number;
  y: number;
  kind?: 'country' | 'city' | 'context' | 'continent';
}

const LABELS: MapLabel[] = [
  { text: 'Morocco', x: 130, y: 108 },
  { text: 'Algeria', x: 218, y: 138 },
  { text: 'Tunisia', x: 294, y: 74 },
  { text: 'Libya', x: 372, y: 158 },
  { text: 'Egypt', x: 486, y: 162 },
  { text: 'Cairo', x: 498, y: 122, kind: 'city' },
  { text: 'Mauritania', x: 108, y: 236 },
  { text: 'Senegal', x: 48, y: 292 },
  { text: 'Mali', x: 185, y: 266 },
  { text: 'Burkina Faso', x: 182, y: 318, kind: 'city' },
  { text: 'Niger', x: 288, y: 264 },
  { text: 'Chad', x: 382, y: 288 },
  { text: 'Sudan', x: 486, y: 292 },
  { text: 'Eritrea', x: 582, y: 278, kind: 'city' },
  { text: 'Djibouti', x: 616, y: 325, kind: 'city' },
  { text: 'Guinea', x: 88, y: 336, kind: 'city' },
  { text: 'Ivory Coast', x: 146, y: 374, kind: 'city' },
  { text: 'Nigeria', x: 274, y: 350 },
  { text: 'Lagos', x: 228, y: 382, kind: 'city' },
  { text: 'Cameroon', x: 316, y: 404 },
  { text: 'Ethiopia', x: 588, y: 360 },
  { text: 'Uganda', x: 518, y: 404 },
  { text: 'Kenya', x: 568, y: 416 },
  { text: 'DR Congo', x: 422, y: 460 },
  { text: 'Kinshasa', x: 350, y: 492, kind: 'city' },
  { text: 'Tanzania', x: 538, y: 486 },
  { text: 'Luanda', x: 338, y: 540, kind: 'city' },
  { text: 'Angola', x: 388, y: 572 },
  { text: 'Zambia', x: 458, y: 576 },
  { text: 'Malawi', x: 528, y: 584, kind: 'city' },
  { text: 'Zimbabwe', x: 484, y: 634 },
  { text: 'Namibia', x: 384, y: 664 },
  { text: 'Madagascar', x: 656, y: 644 },
  { text: 'South Africa', x: 438, y: 742 },
  { text: 'Cape Town', x: 392, y: 772, kind: 'city' },
  // Surrounding context labels matching the reference map
  { text: 'Saudi Arabia', x: 634, y: 204, kind: 'context' },
  { text: 'Yemen', x: 662, y: 278, kind: 'context' },
  { text: 'Syria', x: 574, y: 52, kind: 'context' },
  { text: 'Iraq', x: 626, y: 74, kind: 'context' },
];

export default function AfricaFootprintMap() {
  const rwandaPath = AFRICA_COUNTRIES.find((c) => c.id === 'RWA');
  const eastAfricaPaths = AFRICA_COUNTRIES.filter((c) =>
    ['RWA', 'UGA', 'BDI', 'TZA', 'COD', 'KEN'].includes(c.id),
  );

  return (
    <div className={styles.mapCard}>
      <div className={styles.mapCanvas}>
        <svg
          viewBox={`0 0 ${WORLD_FRAME.width} ${WORLD_FRAME.height}`}
          className={styles.svg}
          role="img"
          aria-labelledby="africa-map-title africa-map-desc"
        >
          <title id="africa-map-title">
            AfriYouth Innovation Labs Footprint Map — Active in Kigali, Rwanda
          </title>
          <desc id="africa-map-desc">
            Cartographic map of Africa highlighting Rwanda and Kigali as AfriYouth Innovation
            Labs’ active operational headquarters within an East African and continental network.
          </desc>

          <defs>
            <radialGradient id="kigaliPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C723DF" stopOpacity="0.48" />
              <stop offset="65%" stopColor="#0301FF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0301FF" stopOpacity="0" />
            </radialGradient>
            <clipPath id="eastAfricaLens">
              <circle cx="634" cy="492" r="76" />
            </clipPath>
          </defs>

          {/* 0. Surrounding continents, kept light so Africa stays the subject */}
          <g className={styles.worldLayer}>
            {WORLD_COUNTRIES.map((country) => (
              <path key={country.id} d={country.d} className={styles.worldCountry} />
            ))}
          </g>

          {/* Africa frame — every layer below is authored in the 740×785 map space */}
          <g transform={`translate(${WORLD_FRAME.dx}, ${WORLD_FRAME.dy})`}>
            {/* 1. Surrounding Mediterranean & Middle East context polygons */}
            <g className={styles.contextLayer}>
              {CONTEXT_COUNTRIES.map((country) => (
                <path key={country.id} d={country.d} className={styles.contextCountry} />
              ))}
            </g>

            {/* 2. Base African continent countries */}
            <g className={styles.africaLayer}>
              {AFRICA_COUNTRIES.map((country) => {
                const isRwanda = country.id === 'RWA';
                const isNeighbor = EAST_AFRICA_NEIGHBORS.has(country.id);
                return (
                  <path
                    key={country.id}
                    d={country.d}
                    className={
                      isRwanda
                        ? styles.countryRwanda
                        : isNeighbor
                          ? styles.countryNeighbor
                          : styles.countryBase
                    }
                  />
                );
              })}
            </g>

            {/* 3. Re-stroke Rwanda on top so its border is always razor-sharp */}
            {rwandaPath && (
              <path d={rwandaPath.d} className={styles.countryRwandaTop} />
            )}

            {/* 4. Ocean typography (matching reference map aesthetic) */}
            <g className={styles.oceanText} aria-hidden="true">
              <text x="112" y="684" textAnchor="middle">
                South
              </text>
              <text x="112" y="708" textAnchor="middle">
                Atlantic
              </text>
              <text x="112" y="732" textAnchor="middle">
                Ocean
              </text>
            </g>

            {/* 5. Country & city labels */}
            <g aria-hidden="true">
              {LABELS.map((label) => (
                <text
                  key={label.text}
                  x={label.x}
                  y={label.y}
                  textAnchor="middle"
                  className={
                    label.kind === 'continent'
                      ? styles.labelContinent
                      : label.kind === 'context'
                        ? styles.labelContext
                        : label.kind === 'city'
                          ? styles.labelCity
                          : styles.labelCountry
                  }
                >
                  {label.text}
                </text>
              ))}
            </g>

            {/* 6. Kigali, Rwanda active beacon & leader line to magnified East Africa inset */}
            <g className={styles.kigaliMarker}>
              <circle
                cx={KIGALI_POINT.x}
                cy={KIGALI_POINT.y}
                r="26"
                fill="url(#kigaliPulse)"
              />
              <circle
                cx={KIGALI_POINT.x}
                cy={KIGALI_POINT.y}
                r="11"
                className={styles.kigaliRing}
              />
              <circle
                cx={KIGALI_POINT.x}
                cy={KIGALI_POINT.y}
                r="4.2"
                className={styles.kigaliDot}
              />

              {/* Connector line from Rwanda to the magnified East Africa lens */}
              <path
                d={`M ${KIGALI_POINT.x + 8} ${KIGALI_POINT.y + 4} L 562 466`}
                className={styles.leaderLine}
              />

              {/* Direct on-map pill label for Rwanda */}
              <g transform={`translate(${KIGALI_POINT.x - 134}, ${KIGALI_POINT.y - 34})`}>
                <rect
                  x="0"
                  y="0"
                  width="124"
                  height="26"
                  rx="13"
                  className={styles.rwandaPillBg}
                />
                <circle cx="13" cy="13" r="4" fill="#C723DF" />
                <text x="23" y="17" className={styles.rwandaPillText}>
                  Rwanda · Kigali
                </text>
              </g>
            </g>

            {/* 7. Magnified East Africa Detail Lens (4.2x zoom centered on Rwanda) */}
            <g className={styles.insetGroup}>
              <circle cx="634" cy="492" r="78" className={styles.lensBackdrop} />
              <g clipPath="url(#eastAfricaLens)">
                <rect x="554" y="412" width="160" height="160" fill="#F6F6FA" />
                <g
                  transform={`translate(634, 492) scale(4.2) translate(${-KIGALI_POINT.x}, ${-KIGALI_POINT.y})`}
                >
                  {eastAfricaPaths.map((country) => (
                    <path
                      key={`inset-${country.id}`}
                      d={country.d}
                      className={
                        country.id === 'RWA'
                          ? styles.insetRwanda
                          : styles.insetNeighbor
                      }
                    />
                  ))}
                  <circle
                    cx={KIGALI_POINT.x}
                    cy={KIGALI_POINT.y}
                    r="1.4"
                    fill="#FFFFFF"
                    stroke="#0D0624"
                    strokeWidth="0.5"
                  />
                </g>
                <text x="634" y="434" textAnchor="middle" className={styles.lensSubLabel}>
                  UGA
                </text>
                <text x="684" y="514" textAnchor="middle" className={styles.lensSubLabel}>
                  TZA
                </text>
                <text x="582" y="492" textAnchor="middle" className={styles.lensSubLabel}>
                  DRC
                </text>
                <text x="632" y="544" textAnchor="middle" className={styles.lensSubLabel}>
                  BDI
                </text>
                <text x="636" y="484" textAnchor="middle" className={styles.lensRwandaLabel}>
                  RWANDA
                </text>
                <text x="636" y="504" textAnchor="middle" className={styles.lensKigaliLabel}>
                  ★ Kigali HQ
                </text>
              </g>
              <circle cx="634" cy="492" r="76" className={styles.lensBorder} />
              <text x="634" y="586" textAnchor="middle" className={styles.lensCaption}>
                4× East Africa Detail
              </text>
          </g>
          </g>

          {/* Continent / ocean type for the surrounding frame, drawn last
              so neighbouring land never covers it */}
          <g aria-hidden="true">
            <text x="690" y="168" textAnchor="middle" className={styles.labelContinent}>
              EUROPE
            </text>
            <text x="1290" y="256" textAnchor="middle" className={styles.labelContinent}>
              ASIA
            </text>
            <text x="1250" y="848" textAnchor="middle" className={styles.oceanInk}>
              Indian Ocean
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
