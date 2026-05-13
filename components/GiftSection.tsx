import TomoBtnLink from '@/components/TomoBtnLink';

export default function GiftSection() {
  return (
    <section style={{ backgroundColor: '#231F20', padding: '100px 0' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: text */}
        <div style={{ flex: '1 1 400px' }}>
          {/* Labels */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            {['Culinary Delight', 'Timeless Taste'].map((label, i) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#C69C6D',
                    lineHeight: '14px',
                  }}
                >
                  {label}
                </span>
                {i === 0 && <span style={{ color: '#C69C6D' }}>|</span>}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Prestigious', serif",
              fontSize: '64px',
              fontWeight: 400,
              color: '#F8F7F8',
              lineHeight: 1.05,
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Give the Gift of Tomo
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Brooklyn', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#C69C6D',
              lineHeight: '22px',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            A Tasteful Gesture, Timelessly Appreciated
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(240,238,238,0.75)',
              lineHeight: '24px',
              marginBottom: '40px',
              maxWidth: '500px',
            }}
          >
            Visit us in the heart of Buckhead and indulge in an elevated Japanese dining experience.
          </p>

          {/* Send us an email button */}
          <TomoBtnLink href="mailto:info@tomorestaurant.com" variant="gold">Send Us An Email</TomoBtnLink>
        </div>

        {/* Right: gift icon */}
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/assets/icono_gift.webp"
            alt="Gift of Tomo"
            style={{ maxWidth: '340px', width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
