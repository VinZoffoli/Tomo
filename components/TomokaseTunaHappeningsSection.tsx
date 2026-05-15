'use client';

import { useState, useEffect } from 'react';
import TomoBtnLink from '@/components/TomoBtnLink';

const HAPPENINGS = [
  {
    image: '/assets/happening1.webp',
    label: 'Happy Hour',
    title: 'Happy Hour',
    description: '5pm a 6pm, $5 Select Special Appetizers, $5 hand roll & $2 Oysters.',
    day: 'Monday To Thursday',
    time: '5 PM – 6 PM',
  },
  {
    image: '/assets/happening2.webp',
    label: 'The Bourbon Brothers Band',
    title: 'The Bourbon Brothers Band',
    description: 'Let the smooth sounds of The Bourbon Brothers Band set the tone for an evening.',
    day: 'Dates',
    time: '–',
  },
  {
    image: '/assets/happening3.webp',
    label: 'Michael Duffee',
    title: 'Michael Duffee',
    description: 'Experience the melodies of Michael Duffee as he brings an intimate and captivating performance.',
    day: 'Dates',
    time: '–',
  },
  {
    image: '/assets/happening5.webp',
    label: 'Moonlighting',
    title: 'Moonlighting',
    description: 'Live sounds for late hours. A band that blends soul, jazz, and ambient to create a uniquely intimate atmosphere at Tomo.',
    day: 'Dates',
    time: '–',
  },
  {
    image: '/assets/happening4.webp',
    label: 'Friday Happy Hour',
    title: 'Friday Happy Hour',
    description: 'Extended Happy Hour + Craft Drinks and Bar Specials. *Only at the Bar',
    day: 'Fridays',
    time: '4 PM – 6 PM',
  },
];

const VISIBLE = 3;

const BookButton = () => (
  <TomoBtnLink href="/reservations" variant="outlined-bronze" extraStyle={{ marginBottom: '16px' }}>
    Book Your Reservation
  </TomoBtnLink>
);

const LimitedNote = () => (
  <p
    style={{
      fontFamily: "'Zen Maru Gothic', sans-serif",
      fontSize: '14px',
      fontWeight: 400,
      color: '#231F20',
      lineHeight: '19px',
    }}
  >
    *<strong>Limited availability</strong> – Reservations required.
  </p>
);

export default function TomokaseTunaHappeningsSection() {
  const [happeningStart, setHappeningStart] = useState(0);
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('left');

  const maxStart = HAPPENINGS.length - VISIBLE;

  const prev = () => {
    setSlideDir('right');
    setHappeningStart((s) => Math.max(0, s - 1));
  };
  const next = () => {
    setSlideDir('left');
    setHappeningStart((s) => Math.min(maxStart, s + 1));
  };

  useEffect(() => {
    const id = setInterval(() => {
      setSlideDir('left');
      setHappeningStart((s) => (s >= maxStart ? 0 : s + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [maxStart]);

  const visible = HAPPENINGS.slice(happeningStart, happeningStart + VISIBLE);

  return (
    <section
      style={{
        backgroundImage: "url('/assets/fondo_tomo_tuna_happenings.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ═══════════════ TOMOKASE ═══════════════ */}
      <div style={{ padding: '100px 0' }}>
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
          {/* Left: video */}
          <div style={{ flex: '1 1 440px' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/9',
                boxShadow: '0 24px 64px rgba(35,31,32,0.25)',
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1130925925?autoplay=1&muted=1&loop=1&autopause=0"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Tomokase"
              />
            </div>
          </div>

          {/* Right: text */}
          <div style={{ flex: '1 1 360px' }}>
            {/* Tomokase logo */}
            <img
              src="/assets/tomokase.svg"
              alt="Tomokase"
              style={{ width: '224px', height: 'auto', marginBottom: '28px', display: 'block' }}
            />

            {/* Labels */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              {['Curated Excellence', 'Taste Mastery'].map((label, i) => (
                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#674A2C',
                      lineHeight: '14px',
                    }}
                  >
                    {label}
                  </span>
                  {i === 0 && <span style={{ color: '#674A2C' }}>|</span>}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                color: '#674A2C',
                lineHeight: '22px',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              Trust the chef, embrace the unknown.
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgba(35,31,32,0.75)',
                lineHeight: '24px',
                marginBottom: '36px',
              }}
            >
              An ever-evolving expression of craftsmanship, the Chef&apos;s Menu at Tomo is a
              celebration of seasonality, precision, and innovation.
            </p>

            <BookButton />
            <br />
            <LimitedNote />
          </div>
        </div>
      </div>

      {/* ═══════════════ TUNA TUESDAY ═══════════════ */}
      <div style={{ padding: '0 0 100px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            flexWrap: 'wrap-reverse',
          }}
        >
          {/* Left: text */}
          <div style={{ flex: '1 1 360px' }}>
            {/* Labels */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              {['Artful Carving', 'Precision Crafted'].map((label, i) => (
                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#674A2C',
                      lineHeight: '14px',
                    }}
                  >
                    {label}
                  </span>
                  {i === 0 && <span style={{ color: '#674A2C' }}>|</span>}
                </span>
              ))}
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Prestigious', serif",
                fontSize: '64px',
                fontWeight: 400,
                color: '#231F20',
                lineHeight: 1.05,
                marginBottom: '14px',
                textTransform: 'uppercase',
              }}
            >
              Tuna Tuesday
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                color: '#674A2C',
                lineHeight: '22px',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              A rare indulgence, a timeless tradition
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                color: 'rgba(35,31,32,0.75)',
                lineHeight: '24px',
                marginBottom: '36px',
              }}
            >
              At Tomo, Tuna Tuesday is more than just a special night. It&apos;s a celebration of
              Japanese culinary craftsmanship. Witness the art of tuna carving, savor the richness
              of this extraordinary fish, and indulge in an exclusive dining experience unlike any
              other.
            </p>

            <BookButton />
            <br />
            <LimitedNote />
          </div>

          {/* Right: video */}
          <div style={{ flex: '1 1 440px' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/9',
                boxShadow: '0 24px 64px rgba(35,31,32,0.25)',
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1130926107?autoplay=1&muted=1&loop=1&autopause=0"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Tuna Tuesday"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ HAPPENINGS ═══════════════ */}
      <div style={{ padding: '80px 0 100px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 40px',
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '40px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
              {/* Heading */}
              <h2
                style={{
                  fontFamily: "'Prestigious', serif",
                  fontSize: '64px',
                  fontWeight: 400,
                  color: '#231F20',
                  lineHeight: 1.05,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                Happenings
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: "'Brooklyn', sans-serif",
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#674A2C',
                  lineHeight: '26px',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                }}
              >
                Fleeting moments, lasting flavors.
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#231F20',
                  lineHeight: '24px',
                }}
              >
                Like the delicate bloom of a cherry blossom, some experiences exist only for a
                moment—but linger forever in memory. At Tomo, our special events are crafted to
                surprise, enchant, and indulge the senses. From rare sake unveilings to inspired
                seasonal creations, each night is a celebration of the unexpected. Let the moment
                take you.
              </p>
            </div>

            {/* Lantern icon */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="/assets/icono_happenings.svg"
                alt="Happenings"
                style={{ height: '160px', opacity: 0.85 }}
              />
            </div>
          </div>

          {/* Weekly Specials label */}
          <p
            style={{
              fontFamily: "'Brooklyn', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              color: '#926426',
              marginBottom: '24px',
            }}
          >
            Weekly Specials
          </p>

          {/* Cards + navigation */}
          <div
            key={happeningStart}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginBottom: '32px',
            }}
            className={`happenings-grid tomo-cards-slide-${slideDir}`}
          >
            {visible.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  {/* Label */}
                  <div
                    style={{
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Brooklyn', sans-serif",
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#593F2A',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#231F20',
                      lineHeight: '20px',
                      marginBottom: '12px',
                    }}
                  >
                    {item.description}
                  </p>

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#593F2A',
                    }}
                  >
                    {item.day} · {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots + arrows */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={prev}
              disabled={happeningStart === 0}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid #593F2A',
                backgroundColor: 'transparent',
                cursor: happeningStart === 0 ? 'not-allowed' : 'pointer',
                opacity: happeningStart === 0 ? 0.4 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="#593F2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {Array.from({ length: maxStart + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setHappeningStart(i)}
                style={{
                  width: i === happeningStart ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: i === happeningStart ? '#593F2A' : 'rgba(89,63,42,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.3s ease, background-color 0.3s ease',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}

            <button
              onClick={next}
              disabled={happeningStart === maxStart}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid #593F2A',
                backgroundColor: 'transparent',
                cursor: happeningStart === maxStart ? 'not-allowed' : 'pointer',
                opacity: happeningStart === maxStart ? 0.4 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2L10 7L5 12" stroke="#593F2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
