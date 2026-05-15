'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/pre-menu' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Tuna Tuesday', href: '/tuna-tuesday' },
  { label: 'Omakase', href: '/omakase' },
];

const MORE = [
  { label: 'Seasonal Celebrations', href: '/seasonal-celebrations' },
  { label: 'Specials', href: '/specials' },
  { label: 'Order Online', href: '/order-online' },
  { label: 'Careers', href: '/careers' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

const NAV_STYLE_BASE: React.CSSProperties = {
  fontFamily: "'Zen Maru Gothic', sans-serif",
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '20px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'color 0.2s, border-color 0.2s',
};

function OrderOnlineBtn({ onClick, className }: { onClick?: () => void; className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/order-online"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        display: 'inline-block',
        backgroundColor: hovered ? 'transparent' : '#C69C6D',
        color: hovered ? '#C69C6D' : '#231F20',
        border: '1.5px solid #C69C6D',
        borderRadius: '8px',
        padding: '8px 12px',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'background-color 0.25s ease, color 0.25s ease',
        cursor: 'pointer',
      }}
    >
      Order Online
    </Link>
  );
}

function NavLink({ label, href, active }: { label: string; href: string; active: boolean }) {
  const [hovered, setHovered] = useState(false);
  const highlighted = active || hovered;
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...NAV_STYLE_BASE,
        paddingBottom: '3px',
        color: highlighted ? '#CFAD77' : '#F8F7F8',
        borderBottom: highlighted ? '1.5px solid #CFAD77' : '1.5px solid transparent',
      }}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const h = scrolled ? 65 : 80;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#231F20',
        height: `${h}px`,
        transition: 'height 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          height: '100%',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Logo — remove display:'block' so Tailwind hidden/md:hidden can work */}
        <Link href="/" style={{ flexShrink: 0, lineHeight: 0 }}>
          <img
            src="/assets/logo_header.svg"
            alt="Tomo"
            className="hidden md:block"
            style={{ height: '44px', width: 'auto' }}
          />
          <img
            src="/assets/logo_header_mobile.svg"
            alt="Tomo"
            className="block md:hidden"
            style={{ height: '36px', width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" style={{ gap: '28px' }}>
          {NAV.map(({ label, href }) => (
            <NavLink key={label} label={label} href={href} active={pathname === href} />
          ))}

          {/* More dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              onClick={() => setMoreOpen((o) => !o)}
              style={{
                ...NAV_STYLE_BASE,
                color: '#F8F7F8',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
              }}
            >
              More
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                style={{ transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}
              >
                <path d="M1 1L5 5L9 1" stroke="#F8F7F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {moreOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  paddingTop: '12px',
                  zIndex: 300,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#231F20',
                    minWidth: '220px',
                    borderTop: '2px solid #CFAD77',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                  }}
                >
                {MORE.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="nav-more-link"
                    style={{
                      display: 'block',
                      padding: '10px 24px',
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#F8F7F8',
                      textDecoration: 'none',
                      transition: 'color 0.2s, background 0.2s',
                    }}
                  >
                    {label}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
          <div className="hidden md:block">
            <OrderOnlineBtn />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', lineHeight: 0 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#F8F7F8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="#F8F7F8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#231F20',
            position: 'absolute',
            top: `${h}px`,
            left: 0,
            right: 0,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '8px 0 20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            zIndex: 999,
          }}
        >
          {[...NAV, ...MORE].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '12px 40px',
                fontFamily: "'Zen Maru Gothic', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '20px',
                color: pathname === href ? '#CFAD77' : '#F8F7F8',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ padding: '16px 40px 0' }}>
            <OrderOnlineBtn onClick={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
