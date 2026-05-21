import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Enari — Sport Biotech & Technology';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#060608',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Blue glow — top right */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 620,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(110,198,232,0.18) 0%, transparent 65%)',
          }}
        />
        {/* Warm glow — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 460,
            height: 420,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(224,152,122,0.12) 0%, transparent 65%)',
          }}
        />

        {/* Centre content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 112,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-3px',
              lineHeight: 1,
              marginBottom: 28,
            }}
          >
            ENARI
          </div>

          {/* Blue divider */}
          <div
            style={{
              width: 64,
              height: 3,
              background: '#6EC6E8',
              borderRadius: 2,
              marginBottom: 28,
            }}
          />

          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.5px',
            }}
          >
            Sport Biotech &amp; Technology
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 15,
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '3px',
          }}
        >
          WWW.ENARI.COM
        </div>
      </div>
    ),
    { ...size }
  );
}
