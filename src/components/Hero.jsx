import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Aurora from './Aurora';
import TextPressure from './TextPressure';
import './Hero.css';

export default function Hero() {
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set([headingRef.current, descRef.current, ctaRef.current], {
      autoAlpha: 0, y: 40
    });

    tl.to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.3)
      .to(descRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.6)
      .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.8);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-ferrofluid">
        <Aurora
          colorStops={['#3b82f6', '#10b981', '#8b5cf6']}
          amplitude={1.2}
          blend={0.6}
          speed={0.5}
        />
      </div>

      <div className="hero-content">
        <div className="hero-heading" ref={headingRef}>
          <div className="hero-tp-row">
            <TextPressure
              text="Griffin Cayady"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#111111"
              minFontSize={48}
            />
          </div>
        </div>
        <p className="hero-desc" ref={descRef}>
          Bridging business needs and technology — designing systems that are clear, efficient, and built to last.
        </p>
        <div className="hero-cta" ref={ctaRef}>
          <a href="#projects" className="hero-btn hero-btn--primary" onClick={e => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View My Work
          </a>
          <a href="#contact" className="hero-btn hero-btn--ghost" onClick={e => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}