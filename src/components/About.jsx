import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CircularText from './CircularText';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        autoAlpha: 0, x: -40, duration: 0.8, ease: 'power3.out'
      });
      gsap.from(textRef.current, {
        scrollTrigger: { trigger: textRef.current, start: 'top 85%' },
        autoAlpha: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.15
      });
      gsap.from(decorRef.current, {
        scrollTrigger: { trigger: decorRef.current, start: 'top 80%' },
        autoAlpha: 0, scale: 0.7, duration: 1, ease: 'back.out(1.4)', delay: 0.1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-inner">
        <div className="about-left">
          <div className="about-section-label">About Me</div>
          <h2 className="about-heading" ref={headingRef}>
            Turning complexity<br />into <span className="about-heading--accent">clarity</span>
          </h2>
          <div className="about-text" ref={textRef}>
            <p>
              I'm Griffin Cayady, a System Analyst who specializes in understanding how organizations work and designing the systems that help them work better. I bridge the gap between people, processes, and technology.
            </p>
            <p>
              My work involves gathering requirements, mapping workflows, and translating business needs into technical specifications that development teams can execute with confidence. Every system I analyze gets a clear, documented path forward.
            </p>
          </div>

        </div>

        <div className="about-right">
          <div className="about-decor" ref={decorRef}>
            <div className="about-circular-bg">
              <CircularText
                text="GRIFFIN*CAYADY*GRIFFIN*CAYADY*"
                onHover="speedUp"
                spinDuration={22}
              />
            </div>
            <div className="about-decor-ring about-decor-ring--blue" />
            <div className="about-decor-ring about-decor-ring--green" />
            <div className="about-decor-card">
              <div className="about-stat">
                <span className="about-stat-num">3+</span>
                <span className="about-stat-label">Years Experience</span>
              </div>
              <div className="about-stat-divider" />
              <div className="about-stat">
                <span className="about-stat-num">15+</span>
                <span className="about-stat-label">Projects Delivered</span>
              </div>
              <div className="about-stat-divider" />
              <div className="about-stat">
                <span className="about-stat-num">100%</span>
                <span className="about-stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
