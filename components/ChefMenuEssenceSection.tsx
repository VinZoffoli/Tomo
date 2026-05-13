const DISHES = [
  {
    image: '/assets/chef1.webp',
    name: 'Tuna Tartare',
    description: 'Sticky yam, scallion, pink peppercorn, shiso, pistachio, balsamic glaze, wasabi-soy.',
  },
  {
    image: '/assets/chef2.webp',
    name: 'Tomo Lamb Chop (GF)',
    description: 'Two New Zealand lamb chops, Sansho peppercorn.',
  },
  {
    image: '/assets/chef3.webp',
    name: 'Nigiri Variation',
    description: 'A refined selection of expertly crafted nigiri, showcasing the freshest seasonal fish.',
  },
  {
    image: '/assets/chef4.webp',
    name: 'Black Cod Wrap',
    description: 'Broiled cod, sweet miso marinade, Boston lettuce, garlic chips.',
  },
];

const ESSENCE = [
  {
    icon: '/assets/icono_essence1.svg',
    title: 'Masterful Craftsmanship',
    description:
      'Every dish is a work of art, blending precision, technique, and the finest ingredients to create an elevated Japanese dining experience.',
  },
  {
    icon: '/assets/icono_essence2.svg',
    title: 'Exclusive Sake Selection',
    description:
      "Featuring one of Atlanta's most refined sake collections, carefully curated to complement and enhance the flavors of each dish.",
  },
  {
    icon: '/assets/icono_essence3.svg',
    title: 'A Modern Take on Tradition',
    description:
      'A seamless fusion of authentic Japanese techniques with contemporary creativity, presented in a sleek and intimate atmosphere.',
  },
];

import TomoBtnLink from '@/components/TomoBtnLink';

export default function ChefMenuEssenceSection() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/fondo_largo_home.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* ═══════════════ CHEF'S MENU ═══════════════ */}
      <div style={{ padding: '100px 0 80px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 40px',
          }}
        >
          {/* Labels */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            {['Artful Precision', 'Taste Mastery'].map((label, i) => (
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
              marginBottom: '14px',
              textTransform: 'uppercase',
            }}
          >
            DINNER Menu
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Brooklyn', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#C69C6D',
              lineHeight: '30px',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            designed for Discovery
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#F8F7EE',
              lineHeight: '24px',
              maxWidth: '680px',
              marginBottom: '40px',
            }}
          >
            An ever-evolving expression of craftsmanship, the Dinner Menu at Tomo is a celebration of seasonality, precision, and innovation. Thoughtfully curated by our chefs, each dish tells a story. Blending time-honored techniques with bold creativity.
          </p>

          {/* View Full Menu button */}
          <TomoBtnLink href="/menu" variant="gold" extraStyle={{ fontSize: '18px', marginBottom: '72px' }}>
            View Full Menu
          </TomoBtnLink>

          {/* Section label */}
          <p
            style={{
              fontFamily: "'Brooklyn', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#C69C6D',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '20px',
            }}
          >
            Chef&apos;s Dishes
          </p>

          {/* Dish cards — 4 columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {DISHES.map((dish) => (
              <div key={dish.name}>
                <div
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginBottom: '12px',
                    aspectRatio: '5 / 4',
                  }}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "'Brooklyn', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#C69C6D',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    lineHeight: '20px',
                  }}
                >
                  {dish.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#F8F7EE',
                    lineHeight: '20px',
                  }}
                >
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ OUR ESSENCE ═══════════════ */}
      <div
        style={{
          padding: '80px 0 100px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 40px',
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Prestigious', serif",
              fontSize: '64px',
              fontWeight: 400,
              color: '#F8F7F8',
              lineHeight: 1.05,
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}
          >
            our Essence
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Brooklyn', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#C69C6D',
              lineHeight: '22.8px',
              marginBottom: '56px',
              textTransform: 'uppercase',
            }}
          >
            unique fine dining
          </p>

          {/* 3 columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '48px',
              marginBottom: '56px',
            }}
          >
            {ESSENCE.map((item) => (
              <div key={item.title}>
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ height: '56px', marginBottom: '20px', display: 'block' }}
                />
                <h3
                  style={{
                    fontFamily: "'Brooklyn', sans-serif",
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#F9F7ED',
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    color: 'rgba(249,247,237,0.75)',
                    lineHeight: '24px',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Reserve a Table button */}
          <TomoBtnLink href="/reservations" variant="gold">Reserve a Table</TomoBtnLink>
        </div>
      </div>
    </section>
  );
}
