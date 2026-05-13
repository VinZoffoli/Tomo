const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "'Brooklyn', sans-serif",
  fontSize: '14px',
  fontWeight: 600,
  color: '#C69C6D',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '8px',
};

const BODY_STYLE: React.CSSProperties = {
  fontFamily: "'Zen Maru Gothic', sans-serif",
  fontSize: '16px',
  fontWeight: 400,
  color: 'rgba(248,247,238,0.85)',
  lineHeight: '24px',
};

export default function FindUsSection() {
  return (
    <section style={{ backgroundColor: '#231F20', padding: '100px 0 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>

        {/* Two-column layout — title is inside left column so icons align at top right */}
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

          {/* ── Left column ── */}
          <div style={{ flex: '1 1 420px' }}>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Prestigious', serif",
                fontSize: '64px',
                fontWeight: 400,
                color: '#F8F7F8',
                lineHeight: 1.05,
                marginBottom: '14px',
                textTransform: 'uppercase',
              }}
            >
              Find Us
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
              Your Journey to Tomo Begins Here
            </p>

            {/* Visit description */}
            <p style={{ ...BODY_STYLE, marginBottom: '28px' }}>
              Visit us in the heart of Buckhead and indulge in an elevated Japanese dining experience.
            </p>

            {/* Map */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '32px', lineHeight: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.3556272497303!2d-84.3586412!3d33.8547247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f53c8ce354f%3A0xfeb4ab257a799cd1!2sTomo!5e0!3m2!1ses-419!2scr!4v1778687114221!5m2!1ses-419!2scr"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tomo Restaurant Location"
              />
            </div>

            {/* Address */}
            <div style={{ marginBottom: '24px' }}>
              <p style={LABEL_STYLE}>Address</p>
              <p style={BODY_STYLE}>3630 Peachtree Rd NE, Suite #140, Atlanta, GA 30326</p>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '24px' }}>
              <p style={LABEL_STYLE}>Phone Number</p>
              <p style={BODY_STYLE}>14048352708</p>
            </div>

            {/* Hours */}
            <div>
              <p style={LABEL_STYLE}>Open Hours</p>
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                {[
                  { day: 'Monday – Thursday', hours: '11:30AM – 10:00PM' },
                  { day: 'Friday', hours: '11:30AM – 10:30PM' },
                  { day: 'Saturday', hours: '5:00PM – 10:30PM' },
                ].map(({ day, hours }) => (
                  <div key={day}>
                    <p style={{ ...BODY_STYLE, fontWeight: 500, color: '#F8F7EE', marginBottom: '4px' }}>{day}</p>
                    <p style={{ ...BODY_STYLE, color: '#C69C6D' }}>{hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          <div style={{ flex: '1 1 360px' }}>

            {/* Decorative icons — full column width, aligned with title */}
            <img
              src="/assets/iconos_findus.webp"
              alt="Tomo"
              style={{ width: '100%', display: 'block', marginBottom: '32px' }}
            />

            {/* Dress Code label */}
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                color: '#C69C6D',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              Dress Code
            </p>

            {/* Dress code description */}
            <p style={{ ...BODY_STYLE, marginBottom: '24px' }}>
              To ensure the quality and experience for all of our guests and to meet our standards of
              service, we kindly ask that you respect our dress code. We politely request that all
              guests be respectful in their choice of attire while adhering to the following guidelines.
            </p>

            {/* Rules box */}
            <div style={{ backgroundColor: '#41393B', borderRadius: '8px', padding: '24px 28px', marginBottom: '16px' }}>
              <p
                style={{
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#F0EEEE',
                  marginBottom: '14px',
                }}
              >
                We Ask For
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'No torn or tattered clothing',
                  'No tanktop for men',
                  'No inappropriate graphics or words',
                  'No ball cap',
                ].map((rule) => (
                  <li
                    key={rule}
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#F8F7EE',
                      lineHeight: '22px',
                      paddingLeft: '16px',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: '#C69C6D',
                        display: 'block',
                      }}
                    />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer note */}
            <p
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                color: 'rgba(248,247,238,0.6)',
                lineHeight: '20px',
              }}
            >
              * Any guest denied entry due to our dress code can be accommodated immediately or in
              the future after adhering to attire guidelines.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
