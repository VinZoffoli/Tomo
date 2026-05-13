import TomoBtnLink from '@/components/TomoBtnLink';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        backgroundColor: '#231F20',
      }}
    >
      {/* Vimeo background video */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '177.78vh',
          height: '56.25vw',
          minWidth: '100%',
          minHeight: '100%',
          pointerEvents: 'none',
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1130925925?autoplay=1&muted=1&loop=1&background=1&playsinline=1&autopause=0"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          title="Tomo Japanese Restaurant"
        />
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(35, 31, 32, 0.48)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
          gap: '32px',
        }}
      >
        <img
          src="/assets/logo_hero.webp"
          alt="Tomo Japanese Restaurant"
          style={{ maxWidth: '320px', width: '100%' }}
        />
        <TomoBtnLink href="/reservations" variant="light">Reserve A Table</TomoBtnLink>
      </div>
    </section>
  );
}
