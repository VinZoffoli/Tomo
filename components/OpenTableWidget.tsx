'use client';
import { useEffect, useRef } from 'react';

// Module-level flag prevents double injection in React StrictMode
let injected = false;

export default function OpenTableWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (injected || !ref.current) return;
    injected = true;
    const s = document.createElement('script');
    s.type = 'text/javascript';
    // Explicit https:// so it matches the CSP allowlist (// resolves to http:// on localhost)
    s.src =
      'https://www.opentable.com/widget/reservation/loader?rid=72262&type=standard&theme=standard&color=1&dark=true&iframe=false&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&cfe=true';
    ref.current.appendChild(s);
  }, []);

  return <div ref={ref} />;
}
