import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import OpenTableWidget from '@/components/OpenTableWidget';

export default function ReservationsPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '680px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/hero_reservations.webp"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(35, 31, 32, 0.42)',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              padding: '80px 24px 60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <h1
              style={{
                fontFamily: "'Prestigious', serif",
                fontSize: '84px',
                fontWeight: 400,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                lineHeight: '48px',
              }}
            >
              Reservations
            </h1>
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                color: '#F9F7ED',
              }}
            >
              Your Table Awaits, Secure Your Experience.
            </p>
          </div>
        </section>

        {/* ── Book Your Experience ── */}
        <section
          style={{
            backgroundImage: 'url(/assets/fondo_reservations.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '100px 24px 120px',
            textAlign: 'center',
          }}
        >
          <AnimateIn from="up">
            <h2
              style={{
                fontFamily: "'Prestigious', serif",
                fontSize: '68px',
                fontWeight: 400,
                color: '#F8F7F8',
                textTransform: 'uppercase',
                lineHeight: '1',
                marginBottom: '16px',
              }}
            >
              Book Your Experience
            </h2>
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                color: '#F0EEEE',
                marginBottom: '56px',
              }}
            >
              Reserve a table and enjoy the best Japanese food in town
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <OpenTableWidget />
            </div>
          </AnimateIn>
        </section>

        {/* ── How to Get Here ── */}
        <section style={{ backgroundColor: '#221f21', padding: '100px 0 120px' }}>
          <AnimateIn from="up">
            <div
              style={{
                maxWidth: '1100px',
                margin: '0 auto',
                padding: '0 40px',
                display: 'flex',
                gap: '64px',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
              }}
            >
              {/* Left — text */}
              <div style={{ flex: '1 1 340px', maxWidth: '480px' }}>
                <h2
                  style={{
                    fontFamily: "'Prestigious', serif",
                    fontSize: '68px',
                    fontWeight: 400,
                    color: '#F8F7F8',
                    textTransform: 'uppercase',
                    lineHeight: '1',
                    marginBottom: '24px',
                  }}
                >
                  How to Get Here
                </h2>
                <p
                  style={{
                    fontFamily: "'Brooklyn', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#F0EEEE',
                    marginBottom: '20px',
                  }}
                >
                  Know how to find us
                </p>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#F0EEEE',
                    marginBottom: '16px',
                  }}
                >
                  We are located just North of Phipps Plaza in the same building as the Ritz-Carlton Residences.
                  <br />
                  Enter from <strong>Peachtree Dunwoody Road</strong> and circle around for complimentary valet. Valet is located just to the right of the Ritz-Carlton Residences.
                </p>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '21px',
                    color: '#F0EEEE',
                  }}
                >
                  *Hourly parking is also available in the adjacent parking deck.
                </p>
              </div>

              {/* Right — map */}
              <div style={{ flex: '1 1 460px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.3556272497303!2d-84.3586412!3d33.8547247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f53c8ce354f%3A0xfeb4ab257a799cd1!2sTomo!5e0!3m2!1ses-419!2scr!4v1778850369922!5m2!1ses-419!2scr"
                  width="100%"
                  height="320"
                  style={{ border: 0, borderRadius: '8px', display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimateIn>
        </section>

      </main>
      <AnimateIn from="up">
        <Footer />
      </AnimateIn>
    </>
  );
}
