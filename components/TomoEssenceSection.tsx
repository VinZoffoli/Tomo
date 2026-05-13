'use client';

import { useState, useEffect } from 'react';
import TomoBtnLink from '@/components/TomoBtnLink';

const SLIDES = [
  '/assets/carrusel_about1.webp',
  '/assets/carrusel_about2.webp',
  '/assets/carrusel_about3.webp',
  '/assets/carrusel_about4.webp',
];

export default function TomoEssenceSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        backgroundImage: "url('/assets/fondo_about_home.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
      }}
    >
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
        {/* ─── Left: text ─── */}
        <div style={{ flex: '1 1 400px' }}>
          {/* Labels */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            {['Curated Excellence', 'Taste Mastery'].map((label, i) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#FFB8CC',
                    lineHeight: '14px',
                  }}
                >
                  {label}
                </span>
                {i === 0 && <span style={{ color: '#FFB8CC', lineHeight: 1 }}>|</span>}
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
              marginBottom: '18px',
              textTransform: 'uppercase',
            }}
          >
            Tomo Essence
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Brooklyn', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#FFB8CC',
              lineHeight: '30px',
              marginBottom: '28px',
              textTransform: 'uppercase',
            }}
          >
            Tradition meets innovation
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
              color: '#F8F7EE',
              lineHeight: '24px',
              marginBottom: '36px',
              maxWidth: '480px',
            }}
          >
            Tomo Japanese Restaurant is an Upscale Japanese Restaurant{' '}
            <strong>recommended by Michelin Guide</strong> of Atlanta serving authentic Japanese
            cuisine using only the finest ingredients available.
          </p>

          {/* About Us button */}
          <TomoBtnLink href="/about" variant="light" extraStyle={{ marginBottom: '40px', fontSize: '14px' }}>About Us</TomoBtnLink>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* Facebook */}
            <a href="https://www.facebook.com/tomojapaneserestaurantbuckhead" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ lineHeight: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#F8F7F8">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/tomobuckhead?igsh=MTBvNWNqbzBwM2Nn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ lineHeight: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F8F7F8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@tomobuckhead?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ lineHeight: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#F8F7F8">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.31a8.16 8.16 0 0 0 4.77 1.52V7.38a4.85 4.85 0 0 1-1.01-.69z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ─── Right: carousel ─── */}
        <div style={{ flex: '1 1 400px' }}>
          {/* Wrapper with horizontal padding to make room for side arrows */}
          <div style={{ position: 'relative', padding: '0 52px' }}>
            {/* Prev arrow — outside image, left side */}
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(35,31,32,0.55)',
                border: '1.5px solid rgba(255,255,255,0.4)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="#F8F7F8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Image container */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                maxHeight: '560px',
              }}
            >
              {SLIDES.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Tomo Restaurant ${idx + 1}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: idx === current ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                  }}
                />
              ))}
            </div>

            {/* Next arrow — outside image, right side */}
            <button
              onClick={next}
              aria-label="Next"
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(35,31,32,0.55)',
                border: '1.5px solid rgba(255,255,255,0.4)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#F8F7F8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Bullet dots — centered below the padded wrapper */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Slide ${idx + 1}`}
                style={{
                  width: idx === current ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: idx === current ? '#FFB8CC' : 'rgba(255,184,204,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.3s ease, background-color 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
