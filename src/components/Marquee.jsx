import LogoLoop from './LogoLoop';
import './Marquee.css';

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const techLogos = [
  { src: `${BASE}/github/github-original.svg`,      alt: 'GitHub',      title: 'GitHub' },
  { src: `${BASE}/php/php-original.svg`,             alt: 'PHP',         title: 'PHP' },
  { src: `${BASE}/java/java-original.svg`,           alt: 'Java',        title: 'Java' },
  { src: `${BASE}/html5/html5-original.svg`,         alt: 'HTML',        title: 'HTML' },
  { src: `${BASE}/javascript/javascript-original.svg`, alt: 'JavaScript', title: 'JavaScript' },
  { src: `${BASE}/css3/css3-original.svg`,           alt: 'CSS',         title: 'CSS' },
  { src: `${BASE}/react/react-original.svg`,         alt: 'React',       title: 'React' },
  { src: `${BASE}/nodejs/nodejs-original.svg`,       alt: 'Node.js',     title: 'Node.js' },
  { src: `${BASE}/laravel/laravel-original.svg`,     alt: 'Laravel',     title: 'Laravel' },
  { src: `${BASE}/react/react-original.svg`,         alt: 'JSX',         title: 'JSX' },
];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={64}
          gap={72}
          hoverSpeed={0}
          fadeOut={true}
          fadeOutColor="#fafafa"
          scaleOnHover={true}
          ariaLabel="Tech stack"
        />
      </div>
    </div>
  );
}