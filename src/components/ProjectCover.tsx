export type CoverId = 'banking' | 'survey' | 'mongo';

const line = 'rgb(var(--c-line) / 0.25)';
const lineSoft = 'rgb(var(--c-line) / 0.12)';
const muted = 'rgb(var(--c-muted))';
const blue = '#2563EB';
const blueLight = '#3b82f6';
const cyan = '#22d3ee';
const green = '#47A248';

/**
 * Hand-drawn SVG artwork for each project card. Line-art on a transparent
 * background so it blends with the card and adapts to light/dark themes.
 */
export function ProjectCover({ id, title }: { id: CoverId; title: string }) {
  return (
    <svg
      role="img"
      aria-label={`${title} illustration`}
      viewBox="0 0 480 300"
      className="h-full w-full"
      fill="none"
    >
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={blue} stopOpacity="0.16" />
          <stop offset="100%" stopColor={blue} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="300" fill={`url(#glow-${id})`} />
      {id === 'banking' && <Banking />}
      {id === 'survey' && <Survey />}
      {id === 'mongo' && <Mongo />}
    </svg>
  );
}

/** Credit card + microservices hexagon mesh. */
function Banking() {
  return (
    <g strokeWidth="2">
      {/* Credit card */}
      <g transform="rotate(-7 165 150)">
        <rect x="70" y="95" width="190" height="118" rx="14" stroke={blue} fill="rgb(37 99 235 / 0.07)" />
        <rect x="92" y="122" width="34" height="26" rx="5" stroke={cyan} />
        <line x1="92" y1="176" x2="180" y2="176" stroke={line} strokeLinecap="round" />
        <line x1="92" y1="192" x2="148" y2="192" stroke={lineSoft} strokeLinecap="round" />
        {/* Contactless waves */}
        <path d="M222 122a18 18 0 0 1 0 26" stroke={blueLight} strokeLinecap="round" />
        <path d="M232 114a30 30 0 0 1 0 42" stroke={lineSoft} strokeLinecap="round" />
      </g>

      {/* API flow into the mesh */}
      <path d="M268 152 C 300 152, 300 118, 330 118" stroke={line} strokeDasharray="4 7" strokeLinecap="round" />
      <path d="M268 168 C 302 168, 302 196, 334 196" stroke={line} strokeDasharray="4 7" strokeLinecap="round" />

      {/* Hexagon mesh (microservices) */}
      <g strokeLinejoin="round">
        <path d="M356 92l22 13v26l-22 13-22-13v-26z" stroke={blueLight} fill="rgb(37 99 235 / 0.10)" />
        <path d="M416 126l22 13v26l-22 13-22-13v-26z" stroke={cyan} fill="rgb(34 211 238 / 0.08)" />
        <path d="M356 170l22 13v26l-22 13-22-13v-26z" stroke={line} />
        <line x1="368" y1="140" x2="402" y2="152" stroke={lineSoft} />
        <line x1="368" y1="186" x2="402" y2="168" stroke={lineSoft} />
        <circle cx="356" cy="118" r="3.5" fill={blueLight} stroke="none" />
        <circle cx="416" cy="152" r="3.5" fill={cyan} stroke="none" />
        <circle cx="356" cy="196" r="3.5" fill={muted} stroke="none" />
      </g>
    </g>
  );
}

/** Survey form panel + results bar chart. */
function Survey() {
  return (
    <g strokeWidth="2">
      {/* Form panel */}
      <rect x="66" y="72" width="180" height="156" rx="14" stroke={line} fill="rgb(var(--c-line) / 0.03)" />
      <line x1="90" y1="100" x2="176" y2="100" stroke={line} strokeLinecap="round" />
      {/* Rows: checkbox + label line */}
      {[132, 166, 200].map((y, i) => (
        <g key={y}>
          <rect x="90" y={y - 9} width="18" height="18" rx="5" stroke={i === 2 ? lineSoft : blueLight} />
          {i !== 2 && (
            <path
              d={`M94 ${y} l4 5 8 -10`}
              stroke={cyan}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <line x1="122" y1={y} x2={i === 1 ? 210 : 188} y2={y} stroke={lineSoft} strokeLinecap="round" />
        </g>
      ))}

      {/* Results: ascending bars */}
      <line x1="286" y1="222" x2="422" y2="222" stroke={line} strokeLinecap="round" />
      <rect x="294" y="178" width="22" height="44" rx="4" stroke={line} />
      <rect x="330" y="152" width="22" height="70" rx="4" stroke={blueLight} fill="rgb(37 99 235 / 0.10)" />
      <rect x="366" y="122" width="22" height="100" rx="4" stroke={blueLight} fill="rgb(37 99 235 / 0.16)" />
      <rect x="402" y="92" width="22" height="130" rx="4" stroke={cyan} fill="rgb(34 211 238 / 0.10)" />
      {/* Trend line */}
      <path d="M305 168 L341 142 L377 112 L413 82" stroke={cyan} strokeDasharray="1 8" strokeLinecap="round" />
      <circle cx="413" cy="82" r="4" fill={cyan} stroke="none" />
    </g>
  );
}

/** Versioned documents flowing through a migration pipeline. */
function Mongo() {
  const doc = (x: number, y: number, accent: string, fill: string) => (
    <g>
      <path
        d={`M${x} ${y}h34l14 14v44a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-52a6 6 0 0 1 6-6z`}
        stroke={accent}
        fill={fill}
      />
      <path d={`M${x + 34} ${y}v14h14`} stroke={accent} strokeLinejoin="round" />
      <line x1={x + 6} y1={y + 34} x2={x + 36} y2={y + 34} stroke={lineSoft} strokeLinecap="round" />
      <line x1={x + 6} y1={y + 46} x2={x + 28} y2={y + 46} stroke={lineSoft} strokeLinecap="round" />
    </g>
  );

  return (
    <g strokeWidth="2">
      {/* Pipeline rail */}
      <line x1="70" y1="212" x2="410" y2="212" stroke={lineSoft} strokeDasharray="2 9" strokeLinecap="round" />

      {doc(84, 96, line, 'none')}
      {doc(212, 96, blueLight, 'rgb(37 99 235 / 0.08)')}
      {doc(340, 96, cyan, 'rgb(34 211 238 / 0.08)')}

      {/* Arrows between versions */}
      <path d="M156 128h34m0 0-9-8m9 8-9 8" stroke={blueLight} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M284 128h34m0 0-9-8m9 8-9 8" stroke={cyan} strokeLinecap="round" strokeLinejoin="round" />

      {/* Version tags on the rail */}
      {[
        { x: 108, label: 'v1', accent: muted },
        { x: 236, label: 'v2', accent: blueLight },
        { x: 364, label: 'v3', accent: cyan },
      ].map(({ x, label, accent }) => (
        <g key={label}>
          <circle cx={x} cy="212" r="5" stroke={accent} fill="rgb(var(--c-bg))" />
          <text
            x={x}
            y="242"
            textAnchor="middle"
            fill={muted}
            stroke="none"
            style={{ font: '600 13px Inter, sans-serif' }}
          >
            {label}
          </text>
        </g>
      ))}

      {/* Leaf accent */}
      <path
        d="M424 64c-14 4-24 14-24 30 0 10 5 17 10 20 6-4 14-12 14-26 0-9-.5-17 0-24z"
        stroke={green}
        fill="rgb(71 162 72 / 0.12)"
        strokeLinejoin="round"
      />
      <path d="M412 112c2-16 6-28 12-42" stroke={green} strokeLinecap="round" strokeWidth="1.5" />
    </g>
  );
}
