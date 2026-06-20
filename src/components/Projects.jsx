import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Inventory Management System',
    description: 'Analyzed and redesigned an inventory tracking system for a mid-size retailer, reducing stock discrepancy by 40% through improved data flow and automated alerts.',
    tags: ['Requirements Analysis', 'SQL', 'Process Mapping'],
    accent: '#3b82f6',
    number: '01',
  },
  {
    title: 'HR Workflow Automation',
    description: 'Documented and streamlined HR onboarding processes, cutting onboarding time from 5 days to 1.5 days by identifying bottlenecks and designing a cleaner approval workflow.',
    tags: ['Business Analysis', 'UML', 'Stakeholder Interviews'],
    accent: '#10b981',
    number: '02',
  },
  {
    title: 'Customer Data Integration',
    description: 'Led the analysis phase for integrating three legacy CRM systems into a single unified platform, defining data mappings and migration rules across 200k+ records.',
    tags: ['Data Modeling', 'System Design', 'Documentation'],
    accent: '#f59e0b',
    number: '03',
  },
  {
    title: 'ERP Requirements Specification',
    description: 'Conducted workshops with 8 departments to gather ERP requirements, producing a 60-page functional specification used to evaluate and select the final vendor.',
    tags: ['Agile', 'Workshops', 'Functional Specs'],
    accent: '#8b5cf6',
    number: '04',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        autoAlpha: 0, y: 30, duration: 0.8, ease: 'power3.out'
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 88%' },
          autoAlpha: 0, y: 50, duration: 0.7,
          ease: 'power3.out', delay: i * 0.08
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-inner">
        <div className="projects-header" ref={headingRef}>
          <div className="projects-section-label">Selected Work</div>
          <h2 className="projects-heading">
            Projects that<br /><span className="projects-heading--outline">made an impact</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card"
              ref={el => cardsRef.current[i] = el}
              style={{ '--card-accent': project.accent }}
            >
              <div className="project-card-number">{project.number}</div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="project-card-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-card-accent-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
