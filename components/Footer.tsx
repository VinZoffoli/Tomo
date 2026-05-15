'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import TomoBtnLink from '@/components/TomoBtnLink';

const NAV_COLUMNS = [
  {
    title: 'Events & Specials',
    links: [
      { label: 'Seasonal Celebrations', href: '/seasonal-celebrations' },
      { label: 'Specials', href: '/specials' },
    ],
  },
  {
    title: 'Tomo Japanese',
    links: [
      { label: 'Reservations', href: '/reservations' },
      { label: 'Menu', href: '/pre-menu' },
      { label: 'Careers', href: '/careers' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tomobuckhead?igsh=MTBvNWNqbzBwM2Nn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C69C6D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@tomobuckhead?is_from_webapp=1&sender_device=pc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#C69C6D">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.31a8.16 8.16 0 0 0 4.77 1.52V7.38a4.85 4.85 0 0 1-1.01-.69z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/tomojapaneserestaurantbuckhead',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#C69C6D">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

function FooterNavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const highlighted = pathname === href || hovered;
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Zen Maru Gothic', sans-serif",
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
        color: highlighted ? '#CFAD77' : 'rgba(248,247,238,0.75)',
        textDecoration: 'none',
        paddingBottom: '3px',
        borderBottom: highlighted ? '1.5px solid #CFAD77' : '1.5px solid transparent',
        transition: 'color 0.2s, border-color 0.2s',
        whiteSpace: 'nowrap',
        alignSelf: 'flex-start',
      }}
    >
      {label}
    </Link>
  );
}

function SocialIcon({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '40px',
        height: '40px',
        border: `1px solid ${hovered ? '#C69C6D' : 'rgba(198,156,109,0.4)'}`,
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: hovered ? 1 : 0.75,
        transition: 'border-color 0.2s, opacity 0.2s',
        lineHeight: 0,
        flexShrink: 0,
      }}
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#231F20' }}>

      {/* ── Main content ── */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '72px 40px 56px',
          display: 'flex',
          gap: '60px',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >

        {/* Left — logo + info + CTA */}
        <div style={{ flex: '1 1 260px', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <img
            src="/assets/logo_footer.svg"
            alt="Tomo Japanese Restaurant"
            style={{ height: '48px', width: 'auto', display: 'block', marginBottom: '8px', alignSelf: 'flex-start' }}
          />
          <p
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(248,247,238,0.65)',
              lineHeight: '22px',
            }}
          >
            Upscale Japanese cuisine recommended by the Michelin Guide, located in the heart of Buckhead, Atlanta.
          </p>
          <a
            href="https://maps.app.goo.gl/fGZwxeTTnGqxMrDk7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(248,247,238,0.45)',
              lineHeight: '20px',
              textDecoration: 'none',
            }}
          >
            3630 Peachtree Rd NE, Suite #140<br />Atlanta, GA 30326
          </a>
          <div style={{ marginTop: '8px' }}>
            <TomoBtnLink href="/reservations" variant="gold">Reserve A Table</TomoBtnLink>
          </div>
        </div>

        {/* Middle — nav columns */}
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          {NAV_COLUMNS.map(({ title, links }) => (
            <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p
                style={{
                  fontFamily: "'Brooklyn', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#C69C6D',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '4px',
                }}
              >
                {title}
              </p>
              {links.map(({ label, href }) => (
                <FooterNavLink key={label} label={label} href={href} />
              ))}
            </div>
          ))}
        </div>

        {/* Right — social + phone */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

          {/* Social */}
          <div>
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: '#C69C6D',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
              }}
            >
              Social Media
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {SOCIAL.map((s) => (
                <SocialIcon key={s.label} label={s.label} href={s.href} icon={s.icon} />
              ))}
            </div>
          </div>

          {/* Phone */}
          <div>
            <p
              style={{
                fontFamily: "'Brooklyn', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: '#C69C6D',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '6px',
              }}
            >
              Phone
            </p>
            <a
              href="tel:14048352708"
              style={{
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgba(248,247,238,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              (404) 835-2708
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '16px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Powered by logo */}
          <a
            href="https://restoexp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', lineHeight: 0 }}
          >
            <img
              src="/assets/restoexplogo.webp"
              alt="Resto Experience"
              style={{ height: 'auto', width: '307px', maxWidth: '100%', display: 'block' }}
            />
          </a>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: '14px', lineHeight: '30px', color: '#5c5c5c' }}>
              Restaurant Marketing, Content &amp; Web Design
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
              <rect width="2" height="40" fill="url(#footer-divider)" />
              <defs>
                <radialGradient id="footer-divider" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1 20) rotate(90) scale(20 1)">
                  <stop stopColor="#7C7C7C" stopOpacity="0.486275" />
                  <stop offset="1" stopColor="#7C7C7C" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <span style={{ fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: '14px', lineHeight: '30px', color: '#5c5c5c' }}>
              2026
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
