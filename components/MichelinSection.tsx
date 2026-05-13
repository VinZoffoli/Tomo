import TomoBtnLink from '@/components/TomoBtnLink';

export default function MichelinSection() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: "url('/assets/fondo_michelin_home.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Red overlay */}
      <div style={{ position: 'absolute', inset: 0}} />

      {/* Outer padding — gap between section edge and the white border */}
      <div style={{ position: 'relative', zIndex: 1, padding: '28px 40px' }}>
        {/* White border box — centered card */}
        <div
          style={{
            border: '2px solid rgba(255,255,255,0.5)',
            padding: '40px 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto',
          }}
        >
          {/* Michelin icon */}
          <img
            src="/assets/icono_michelin.svg"
            alt="Michelin Guide"
            style={{ height: '32px', marginBottom: '14px' }}
          />

          {/* THE MICHELIN GUIDE — compact, tight line-height */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#F8F7F8',
                lineHeight: 1.1,
                letterSpacing: '0.08em',
              }}
            >
              THE
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '60px',
                color: '#F8F7F8',
                lineHeight: 1.0,
                letterSpacing: '0.04em',
              }}
            >
              MICHELIN
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#F8F7F8',
                lineHeight: 1.1,
                letterSpacing: '0.08em',
              }}
            >
              GUIDE
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
              color: '#F8F7EE',
              lineHeight: '24px',
              maxWidth: '480px',
              marginBottom: '28px',
            }}
          >
            Tomo is honored to be recognized by the Michelin Guide, a testament to our commitment to
            exceptional Japanese cuisine.
          </p>

          <TomoBtnLink href="#" variant="michelin">Read Michelin Review</TomoBtnLink>
        </div>
      </div>
    </section>
  );
}
