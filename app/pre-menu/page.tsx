import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';

const CARDS = [
  { label: 'Bar', icon: '/assets/icono_bar.svg' },
  { label: 'Lunch Menu', icon: '/assets/icono_lunch.svg' },
  { label: 'Dinner Menu', icon: '/assets/icono_dinner.svg' },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#221f21', minHeight: '100vh' }}>
        <section
          style={{
            paddingTop: 'calc(80px + 120px)',
            paddingBottom: '80px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              padding: '0 40px',
            }}
          >
            <AnimateIn from="up">
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <h1
                  style={{
                    fontFamily: "'Prestigious', serif",
                    fontSize: '60px',
                    color: '#F8F7F8',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    lineHeight: '48px',
                  }}
                >
                  Curated
                  <br />
                  Selections
                </h1>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    color: '#F8F7EE',
                    fontWeight: 400,
                    lineHeight: '24px',
                    marginTop: '28px',
                  }}
                >
                  Handpicked menus for an exceptional dining experience.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '8px 0',
                }}
              >
                {CARDS.map(({ label, icon }) => (
                  <div
                    key={label}
                    className="premenu-card"
                    style={{
                      flex: 1,
                      backgroundImage: 'url(/assets/fondo_card_premenu.webp)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '1px solid #847379',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '48px 32px',
                      minHeight: '228px',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Brooklyn', sans-serif",
                        fontSize: '20px',
                        color: '#DED9DA',
                        fontWeight: 400,
                        textTransform: 'uppercase',
                        lineHeight: '20px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {label}
                    </span>
                    <img
                      src={icon}
                      alt={label}
                      style={{ width: '56px', height: '56px' }}
                    />
                  </div>
                ))}
              </div>
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
