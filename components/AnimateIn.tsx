'use client';

import { useEffect, useRef, useState } from 'react';

type From = 'up' | 'left' | 'right' | 'scale';

const TRANSFORMS: Record<From, { hidden: string; visible: string }> = {
  up:    { hidden: 'translateY(40px)',                   visible: 'translateY(0)' },
  left:  { hidden: 'translateX(-52px)',                  visible: 'translateX(0)' },
  right: { hidden: 'translateX(52px)',                   visible: 'translateX(0)' },
  scale: { hidden: 'scale(0.95) translateY(24px)',       visible: 'scale(1) translateY(0)' },
};

export default function AnimateIn({
  children,
  from = 'up',
  delay = 0,
}: {
  children: React.ReactNode;
  from?: From;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.07 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const t = TRANSFORMS[from];

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? t.visible : t.hidden,
        transition: `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
