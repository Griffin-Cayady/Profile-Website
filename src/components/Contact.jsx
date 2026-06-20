import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        autoAlpha: 0, y: 30, duration: 0.8, ease: 'power3.out'
      });
      gsap.from(formRef.current, {
        scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
        autoAlpha: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.15
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-blob contact-blob--purple" />
      <div className="contact-blob contact-blob--blue" />

      <div className="contact-inner">
        <div className="contact-header" ref={headingRef}>
          <div className="contact-section-label">Let's Connect</div>
          <h2 className="contact-heading">
            Got a project?<br /><span className="contact-heading--accent">Let's talk.</span>
          </h2>
          <p className="contact-subtext">
            Whether you need a system analyst, have a complex process to untangle, or just want to say hello — my inbox is always open.
          </p>

          <div className="contact-links">
            <a href="mailto:griffin11122003@gmail.com" className="contact-link contact-link--blue">
              <span className="contact-link-icon">✉</span>
              griffin11122003@gmail.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link contact-link--green">
              <span className="contact-link-icon">in</span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-form-wrap" ref={formRef}>
          {sent ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label className="contact-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="contact-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="contact-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="contact-input contact-textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>
              <button type="submit" className="contact-submit">
                Send Message
                <span className="contact-submit-arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="contact-footer">
        <span className="contact-footer-name">Griffin Cayady</span>
        <span className="contact-footer-sep">·</span>
        <span className="contact-footer-role">System Analyst</span>
        <span className="contact-footer-sep">·</span>
        <span className="contact-footer-year">© {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
