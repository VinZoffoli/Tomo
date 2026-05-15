import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import Link from 'next/link';

const TOAST_HREF =
  'https://order.toasttab.com/online/tomo-japanese-restaurant?diningOption=takeout&rwg_token=AAiGsoYbNXfgUczuVRW9MQBJHADgWAzmFKJ14bIB-E8ujo5APB6vnv06JLlP1v8vgyxp1eQiQX67Tdmjo594v1xQflnfjBtNGg%3D%3D';

const PLATFORMS = [
  {
    alt: 'Uber Eats',
    src: '/assets/ubereats.webp',
    href: 'https://www.ubereats.com/store/tomo-japanese-restaurant/NQJUH7vjRIeTM5GdlOaV3g?diningMode=DELIVERY',
  },
  {
    alt: 'Grubhub',
    src: '/assets/grubhub.webp',
    href: 'https://www.grubhub.com/restaurant/tomo-japanese-restaurant-3630-peachtree-rd-ne-atlanta/7088480',
  },
  {
    alt: 'DoorDash',
    src: '/assets/doordash.webp',
    href: 'https://www.doordash.com/store/tomo-japanese-restaurant-atlanta-913959/18896747/?utm_source=mx_share',
  },
  {
    alt: 'Postmates',
    src: '/assets/postmates.webp',
    href: 'https://postmates.com/store/tomo-japanese-restaurant/NQJUH7vjRIeTM5GdlOaV3g?diningMode=PICKUP',
  },
];

export default function OrderOnlinePage() {
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
            src="/assets/hero_orderonline.webp"
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
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(35, 31, 32, 0.45)' }} />
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
              Order Online
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
              Exceptional Flavors, Now at Your Door
            </p>
          </div>
        </section>

        {/* ── Choose Your Order ── */}
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
              Choose Your Order
            </h2>
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '22px',
                color: '#B19341',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Your Favorite Dishes, Delivered Your Way
            </p>
            <p
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: '#F0EEEE',
                maxWidth: '600px',
                margin: '0 auto 56px',
              }}
            >
              Enjoy the flavors of Tomo from the comfort of your home. Select your preferred delivery option and indulge in expertly crafted Japanese cuisine, wherever you are.
            </p>

            {/* ── Button container — max 836px, centrado ── */}
            <div
              style={{
                maxWidth: '836px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Toast button */}
              <Link
                href={TOAST_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="order-btn"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  backgroundColor: '#4b4144',
                  borderRadius: '8px',
                  padding: '20px 40px',
                  textDecoration: 'none',
                  width: '100%',
                }}
              >
                <img
                  src="/assets/toast.webp"
                  alt="Toast — PickUp & Delivery"
                  style={{ maxWidth: '380px', width: '100%', height: 'auto' }}
                />
              </Link>

              {/* Other Options label */}
              <p
                style={{
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#F0EEEE',
                  textAlign: 'center',
                  margin: '4px 0',
                }}
              >
                Other Options
              </p>

              {/* 4 delivery buttons — 200px each, 4×200 + 3×12 = 836px */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                }}
              >
                {PLATFORMS.map(({ alt, src, href }) => (
                  <Link
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="order-btn"
                    style={{
                      width: '200px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#4b4144',
                      borderRadius: '8px',
                      padding: '24px 16px',
                      textDecoration: 'none',
                    }}
                  >
                    <img
                      src={src}
                      alt={alt}
                      style={{ maxWidth: '160px', width: '100%', height: 'auto' }}
                    />
                  </Link>
                ))}
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
