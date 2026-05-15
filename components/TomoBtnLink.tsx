'use client';

import { useState } from 'react';

type BtnVariant = 'gold' | 'light' | 'michelin' | 'outlined-bronze' | 'outlined-tuna' | 'solid-bronze';

const VARIANTS: Record<BtnVariant, { bg: string; color: string; border: string; hoverBg: string; hoverColor: string }> = {
  gold:             { bg: '#C69C6D',   color: '#231F20', border: '#C69C6D',   hoverBg: 'transparent', hoverColor: '#C69C6D'   },
  light:            { bg: '#F0EEEE',   color: '#231F20', border: '#F0EEEE',   hoverBg: 'transparent', hoverColor: '#F0EEEE'   },
  michelin:         { bg: '#F8F7F8',   color: '#C30029', border: '#F8F7F8',   hoverBg: 'transparent', hoverColor: '#F8F7F8'   },
  'outlined-bronze':{ bg: 'transparent', color: '#926426', border: '#926426', hoverBg: '#926426',     hoverColor: '#F8F7EE'   },
  'outlined-tuna':  { bg: 'transparent', color: '#987636', border: '#987636', hoverBg: '#987636',     hoverColor: '#FFFFFF'   },
  'solid-bronze':   { bg: '#8c6633',   color: '#FFFFFF', border: '#8c6633',   hoverBg: 'transparent', hoverColor: '#8c6633'   },
};

export default function TomoBtnLink({
  href,
  variant,
  children,
  extraStyle,
  onClick,
  target,
  rel,
  download,
}: {
  href: string;
  variant: BtnVariant;
  children: React.ReactNode;
  extraStyle?: React.CSSProperties;
  onClick?: () => void;
  target?: string;
  rel?: string;
  download?: boolean | string;
}) {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[variant];

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        padding: '8px 12px',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
        textDecoration: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        border: `1.5px solid ${v.border}`,
        backgroundColor: hovered ? v.hoverBg : v.bg,
        color: hovered ? v.hoverColor : v.color,
        transition: 'background-color 0.25s ease, color 0.25s ease',
        ...extraStyle,
      }}
    >
      {children}
    </a>
  );
}
