import StaggeredMenu from './components/StaggeredMenu';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const menuItems = [
  { label: 'Home',     ariaLabel: 'Go to home',     link: '#home' },
  { label: 'About',    ariaLabel: 'Learn about me',  link: '#about' },
  { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
  { label: 'Contact',  ariaLabel: 'Get in touch',    link: '#contact' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'GitHub',   link: 'https://github.com' },
  { label: 'Email',    link: 'mailto:griffin11122003@gmail.com' },
];

export default function App() {
  return (
    <div className="app">
      <StaggeredMenu
        position="right"
        colors={['#3b82f6', '#8b5cf6']}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#111111"
        openMenuButtonColor="#111111"
        accentColor="#3b82f6"
        changeMenuColorOnOpen={true}
        isFixed={true}
        closeOnClickAway={true}
        logoContent={null}
      />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
