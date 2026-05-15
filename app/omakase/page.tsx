import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import TomoBtnLink from '@/components/TomoBtnLink';
import OmakaseForm from '@/components/OmakaseForm';

export const metadata = {
  title: 'Omakase | Tomo Japanese Restaurant',
  description:
    'Experience Tableside Omakase at Tomo — a curated tasting prepared live at your table with premium seasonal ingredients.',
};

const INNER: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 40px',
};

export default function OmakasePage() {
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
            src="/assets/hero_omokase.webp"
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(35,31,32,0.52)' }} />
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
            <img
              src="/assets/tomokase.svg"
              alt="TOMAKASE"
              style={{ width: '320px', height: 'auto', display: 'block', filter: 'brightness(0) invert(1)', marginBottom: '8px' }}
            />
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                color: '#F9F7ED',
                marginTop: '8px',
              }}
            >
              Surrender to the Craft, One Bite at a Time.
            </p>
            <TomoBtnLink href="#reserve-form" variant="light" extraStyle={{ marginTop: '16px', fontSize: '16px', lineHeight: '20px' }}>
              Book Your Reservation
            </TomoBtnLink>
          </div>
        </section>

        {/* ══════════ FONDOCOMPLETO SHARED SECTION ══════════ */}
        <section
          style={{
            backgroundImage: "url('/assets/fondocompleto.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          {/* ── KINDAI EXCELLENCE ── */}
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
            {/* Left: text */}
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
                    letterSpacing: '0.04em',
                  }}
                >
                  Curated Journey · Timeless Ritual
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
                  Kindai Excellence
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
                  Crafted For You
                </p>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#231F20',
                  }}
                >
                  Omakase — meaning &ldquo;I&apos;ll leave it up to you&rdquo; in Japanese — is the
                  ultimate experience. Consisting of a curated tasting of the chefs&apos; choice
                  of fresh sushi and whatever our chefs believe you would enjoy the most,
                  Omakase is always a special treat here at Tomo.
                </p>
              </AnimateIn>
            </div>

            {/* Right: video */}
            <div style={{ flex: '1 1 440px' }}>
              <AnimateIn from="right">
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 56px rgba(35,31,32,0.18)',
                  }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/1130925257?autoplay=1&muted=1&loop=1&autopause=0"
                    style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* ── Images + Text ── */}
          <div
            style={{
              ...INNER,
              paddingTop: '0',
              paddingBottom: '80px',
              display: 'flex',
              gap: '64px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {/* Left: image group */}
            <div style={{ flex: '1 1 420px' }}>
              <AnimateIn from="left">
                <div style={{ display: 'flex', gap: '8px' }}>
                  <img
                    src="/assets/omokase1.webp"
                    alt="Omakase dish"
                    style={{
                      width: '50%',
                      height: '380px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      display: 'block',
                    }}
                  />
                  <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <img
                      src="/assets/omokase2.webp"
                      alt="Chef at work"
                      style={{
                        width: '100%',
                        height: '186px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        display: 'block',
                      }}
                    />
                    <img
                      src="/assets/omokase3.webp"
                      alt="Plated omakase"
                      style={{
                        width: '100%',
                        height: '186px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        display: 'block',
                      }}
                    />
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right: text */}
            <div style={{ flex: '1 1 340px', maxWidth: '440px' }}>
              <AnimateIn from="right">
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#231F20',
                    marginBottom: '20px',
                  }}
                >
                  At TOMO, we specialize in contemporary Japanese cuisine, with a focus on the
                  freshest and highest quality ingredients sourced from around the world.
                </p>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    color: '#231F20',
                    marginBottom: '20px',
                  }}
                >
                  One of our most distinctive offerings is the{' '}
                  <strong>Tableside Omakase</strong>, a curated tasting experience prepared
                  live at your table. With options starting at 200 dollars per person, each
                  course is crafted with precision and designed to highlight seasonal flavors
                  and artistic presentation.
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
                  Come and discover <strong>the best of Japan here in Atlanta.</strong> We
                  look forward to providing you with an unforgettable dining experience.
                  Please feel free to make a reservation at any time and we will respond
                  promptly.
                </p>
                <TomoBtnLink href="#reserve-form" variant="solid-bronze">
                  Book Your Seat
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
          </div>

          {/* ── TABLESIDE OMAKASE — icons ── */}
          <div style={{ ...INNER, paddingTop: '0', paddingBottom: '100px' }}>
            <AnimateIn from="up">
              <h2
                style={{
                  fontFamily: "'Prestigious', serif",
                  fontSize: '64px',
                  fontWeight: 400,
                  color: '#231F20',
                  textTransform: 'uppercase',
                  lineHeight: '1',
                  marginBottom: '12px',
                }}
              >
                Tableside Omakase
              </h2>
              <p
                style={{
                  fontFamily: "'Brooklyn', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#926426',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '48px',
                }}
              >
                Live Creations At Your Table
              </p>

              {/* 3 icon cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '48px',
                }}
              >
                {[
                  {
                    icon: '/assets/icono_omokase1.svg',
                    title: 'Immersive Dining',
                    desc: 'Enjoy a front-row seat as our chefs prepare each course tableside, transforming every moment into a culinary performance.',
                  },
                  {
                    icon: '/assets/icono_omokase2.svg',
                    title: 'Tailored Menus',
                    desc: 'Choose between two curated options: $200 or $250 per person. And savor a journey of premium seasonal ingredients crafted with precision and care.',
                  },
                  {
                    icon: '/assets/icono_omokase3.svg',
                    title: 'Limited & Intimate',
                    desc: 'Available Monday through Saturday at 6pm or 8pm. With limited tables per night, every seat offers a personal and memorable experience.',
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title}>
                    <img
                      src={icon}
                      alt={title}
                      style={{ width: '48px', height: '48px', objectFit: 'contain', marginBottom: '16px', display: 'block' }}
                    />
                    <p
                      style={{
                        fontFamily: "'Zen Maru Gothic', sans-serif",
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#231F20',
                        marginBottom: '10px',
                        lineHeight: '1.3',
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Zen Maru Gothic', sans-serif",
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        color: '#525252',
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════ YOUR OMAKASE (dark) ══════════ */}
        <section style={{ backgroundColor: '#231F20', padding: '100px 0' }}>
          <div style={{ ...INNER }}>
            <AnimateIn from="up">
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <h2
                  style={{
                    fontFamily: "'Prestigious', serif",
                    fontSize: '64px',
                    fontWeight: 400,
                    color: '#F8F7F8',
                    textTransform: 'uppercase',
                    lineHeight: '1',
                    marginBottom: '12px',
                  }}
                >
                  Your Omakase
                </h2>
                <p
                  style={{
                    fontFamily: "'Brooklyn', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#C69C6D',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  A Ritual Of Taste
                </p>
              </div>

              {/* Tableside card */}
              <div
                style={{
                  maxWidth: '380px',
                  margin: '0 auto',
                  backgroundColor: '#1b1618',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ padding: '12px 12px 0' }}>
                  <img
                    src="/assets/tableside.webp"
                    alt="Tableside Omakase"
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <p
                    style={{
                      fontFamily: "'Brooklyn', sans-serif",
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#987636',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '4px',
                    }}
                  >
                    Tableside
                  </p>
                  <p
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#A8A6A6',
                      marginBottom: '16px',
                    }}
                  >
                    Table-Side Omakase at Main dining table
                  </p>
                  <p
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: '#F8F7F8',
                      marginBottom: '16px',
                    }}
                  >
                    We are delighted to offer you an{' '}
                    <strong>exclusive table-side Omakase</strong> dining experience right at
                    your table.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#987636',
                      marginBottom: '4px',
                    }}
                  >
                    Budget Options:
                  </p>
                  <p
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#F8F7F8',
                      marginBottom: '12px',
                    }}
                  >
                    $200 or $250
                  </p>
                  <p
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: '20px',
                      color: '#C8C6C6',
                      marginBottom: '16px',
                    }}
                  >
                    Our tableside Omakase experience starts at $200 per person, with an{' '}
                    <strong>enhanced option available for $250.</strong> This experience
                    includes live creations by our Executive Chefs,{' '}
                    <strong>offering a front-row seat</strong> to the artistry of Japanese
                    cuisine.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#987636',
                      marginBottom: '2px',
                    }}
                  >
                    Limited Availability
                  </p>
                  <p
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#C8C6C6',
                      marginBottom: '12px',
                    }}
                  >
                    Monday through Saturday, 6 pm – 8 pm
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      borderRadius: '20px',
                      padding: '4px 12px',
                      marginBottom: '16px',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#C69C6D' }}>◎</span>
                    <span
                      style={{
                        fontFamily: "'Zen Maru Gothic', sans-serif",
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#C69C6D',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      Live Creations
                    </span>
                  </div>
                  <div
                    style={{
                      borderTop: '1px solid rgba(255,255,255,0.10)',
                      paddingTop: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Zen Maru Gothic', sans-serif",
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#F8F7F8',
                      }}
                    >
                      Monday – Saturday
                    </span>
                    <span
                      style={{
                        fontFamily: "'Zen Maru Gothic', sans-serif",
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#A8A6A6',
                      }}
                    >
                      6 pm – 8 pm
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ══════════ BOOK YOUR RESERVATION (dark) ══════════ */}
        <section id="reserve-form" style={{ backgroundColor: '#231F20', padding: '80px 0 120px' }}>
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              padding: '0 40px',
              textAlign: 'center',
            }}
          >
            <AnimateIn from="up">
              <h2
                style={{
                  fontFamily: "'Prestigious', serif",
                  fontSize: '64px',
                  fontWeight: 400,
                  color: '#F8F7F8',
                  textTransform: 'uppercase',
                  lineHeight: '1',
                  marginBottom: '20px',
                }}
              >
                Book Your Reservation
              </h2>
              <p
                style={{
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  color: '#F0EEEE',
                  marginBottom: '48px',
                }}
              >
                Indulge in a curated journey of flavors, crafted by our chefs.
                <br />
                Select your experience, book your table, and let the artistry unfold.
              </p>
              <OmakaseForm />
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
