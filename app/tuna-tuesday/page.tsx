import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import TomoBtnLink from '@/components/TomoBtnLink';
import TunaTuesdayForm from '@/components/TunaTuesdayForm';

export const metadata = {
  title: 'Tuna Tuesday | Tomo Japanese Restaurant',
  description:
    'Experience Kindai Bluefin Tuna — sustainably raised, expertly crafted. Join us every Tuna Tuesday at Tomo Japanese Restaurant in Atlanta.',
};

const INNER: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 40px',
};

export default function TunaTuesdayPage() {
  return (
    <>
      <Header />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
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
            src="/assets/hero_tuna.webp"
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
              backgroundColor: 'rgba(35, 31, 32, 0.48)',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              padding: '140px 24px 80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
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
              Tuna Tuesday
            </h1>
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                color: '#F9F7ED',
                marginTop: '32px',
              }}
            >
              Sustainably Raised, Expertly Crafted
            </p>
            <a
              href="#reserve-form"
              className="tomo-btn tomo-btn-light"
              style={{ marginTop: '16px', fontSize: '16px', lineHeight: '20px' }}
            >
              Book Your Reservation
            </a>
          </div>
        </section>

        {/* ══════════ SHARED BACKGROUND SECTION ══════════ */}
        <section
          style={{
            backgroundImage: "url('/assets/fondo_tomo_tuna_happenings.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          {/* ── A Rare Culinary Experience ── */}
          <div
            style={{
              ...INNER,
              paddingTop: '100px',
              paddingBottom: '80px',
              display: 'flex',
              gap: '64px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {/* Left: text — flex wrapper outside AnimateIn so the container sees proper flex sizing */}
            <div style={{ flex: '1 1 360px', maxWidth: '440px' }}>
              <AnimateIn from="left">
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '14px',
                    color: '#987636',
                    marginBottom: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Kindai Maguro – Ocean Legacy
                </p>
                <h2
                  style={{
                    fontFamily: "'Prestigious', serif",
                    fontSize: '64px',
                    fontWeight: 400,
                    color: '#231F20',
                    textTransform: 'uppercase',
                    lineHeight: '1',
                    marginBottom: '20px',
                  }}
                >
                  A Rare Culinary Experience
                </h2>
                <p
                  style={{
                    fontFamily: "'Brooklyn', sans-serif",
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#926426',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    lineHeight: '1.3',
                  }}
                >
                  From ocean to your table — only at TOMO.
                </p>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#231F20',
                    marginBottom: '32px',
                  }}
                >
                  From pristine waters to your plate, experience the exceptional quality of
                  Kindai Bluefin Tuna—renowned for its sustainability, richness, and unmatched
                  flavor.
                  <br /><br />
                  Tomo Japanese Restaurant invites you to indulge in an exclusive opportunity
                  to purchase premium cuts of this extraordinary tuna during our Tuna Tuesday
                  offering.
                  <br /><br />
                  Savor the legacy. Taste the craftsmanship.
                </p>
                <TomoBtnLink href="#reserve-form" variant="outlined-tuna">
                  Book your reservation
                </TomoBtnLink>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '14px',
                    color: '#231F20',
                    marginTop: '14px',
                  }}
                >
                  *Limited availability – Reservations required.
                </p>
              </AnimateIn>
            </div>

            {/* Right: image grid — flex wrapper outside AnimateIn */}
            <div style={{ flex: '1 1 420px' }}>
              <AnimateIn from="right">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <img
                      src="/assets/tuna1.webp"
                      alt="Tomo kitchen"
                      style={{
                        width: '50%',
                        height: '280px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <img
                        src="/assets/tuna2.webp"
                        alt="Tuna cutting"
                        style={{
                          width: '100%',
                          height: '136px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          display: 'block',
                        }}
                      />
                      <img
                        src="/assets/tuna3.webp"
                        alt="Tuna plated"
                        style={{
                          width: '100%',
                          height: '136px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                  <img
                    src="/assets/tuna4.webp"
                    alt="Tuna on cutting board"
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      display: 'block',
                    }}
                  />
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* ── Vimeo video — contained to section width ── */}
          <div style={{ ...INNER, paddingTop: '0', paddingBottom: '0' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '16/9',
                overflow: 'hidden',
                borderRadius: '12px',
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1130926107?autoplay=1&muted=1&loop=1&autopause=0"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── Upcoming Events ── */}
          <div style={{ ...INNER, paddingTop: '80px', paddingBottom: '60px' }}>
            <AnimateIn from="up">
              <p
                style={{
                  fontFamily: "'Brooklyn', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#231F20',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  letterSpacing: '0.05em',
                }}
              >
                Upcoming Events
              </p>
              <div
                style={{
                  backgroundColor: '#F0EEEE',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  display: 'inline-block',
                  minWidth: '200px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '24px',
                    color: '#41393B',
                  }}
                >
                  June 23rd
                </p>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#525252',
                  }}
                >
                  Tuna Tuesday
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* ── Reserve Your Experience ── */}
          <div
            id="reserve-form"
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              padding: '20px 40px 120px',
              textAlign: 'center',
            }}
          >
            <AnimateIn from="up">
              <h2
                style={{
                  fontFamily: "'Prestigious', serif",
                  fontSize: '64px',
                  fontWeight: 400,
                  color: '#231F20',
                  textTransform: 'uppercase',
                  lineHeight: '1',
                  marginBottom: '20px',
                }}
              >
                Reserve Your Experience
              </h2>
              <p
                style={{
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#231F20',
                  marginBottom: '48px',
                }}
              >
                Join us for Tuna Tuesday, an exclusive tasting of sustainably sourced Bluefin
                tuna, presented with precision and artistry.
              </p>
              <TunaTuesdayForm />
            </AnimateIn>
          </div>

        </section>
      </main>

      <AnimateIn from="up">
        <Footer />
      </AnimateIn>
    </>
  );
}
