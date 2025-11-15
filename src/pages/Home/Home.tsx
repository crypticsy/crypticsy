import { useEffect, useRef } from "react";
import { Layout } from "../../template";
import { About, Footer, Intro, LeftSocials, NavBar, Publications, RightSocials, Work } from './components';

import './Home.css';

export function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cursorRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout>
      <NavBar/>
      <LeftSocials/>
      <RightSocials/>

      <Intro/>

      {/* Cursor spotlight wrapper for everything except Intro */}
      <div
        ref={cursorRef}
        className="cursor-spotlight"
        style={{
          '--mouse-x': '0px',
          '--mouse-y': '0px',
        } as React.CSSProperties}
      >
        <About/>
        <Work/>
        <Publications/>
        <Footer/>
      </div>
    </Layout>
  );
}