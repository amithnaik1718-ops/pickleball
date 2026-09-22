import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Check,
  MessageCircle,
  Target,
  Trophy,
} from 'lucide-react';
import { GlobalCta, SiteFooter } from '../components/SiteClosing';
import { MobileNavigation } from '../components/MobileNavigation';

const navigation = [
  ['Home', '/'],
  ['Training', '/training'],
  ['Coaches', '/coaches'],
  ['Booking', '/booking'],
  ['Tournaments', '/tournaments'],
  ['Membership', '/membership'],
  ['Contact', '/contact'],
] as const;

const principles = [
  {
    icon: Target,
    number: '01',
    title: 'See the player',
    text: 'We begin with the person in front of us—their movement, confidence and next meaningful goal.',
  },
  {
    icon: MessageCircle,
    number: '02',
    title: 'Make it clear',
    text: 'Simple feedback and purposeful repetitions turn a complex skill into something a player can trust.',
  },
  {
    icon: Trophy,
    number: '03',
    title: 'Build belief',
    text: 'We create challenging, supportive sessions where progress feels visible on and off the court.',
  },
] as const;

export default function CoachesPage() {
  return (
    <main className="coaches-page-shell">
      <section className="coaches-hero" aria-labelledby="coaches-hero-title">
        <video
          className="coaches-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/assets/training-hero.mp4" type="video/mp4" />
        </video>
        <div className="coaches-hero-wash" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="/" aria-label="Ace Pickle home">
            <span className="brand-mark" aria-hidden="true"><i /><i /></span>
            <span>ACEPICKLE</span>
          </a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} aria-current={label === 'Coaches' ? 'page' : undefined}>{label}</a>
            ))}
          </nav>
          <MobileNavigation items={navigation} currentPage="Coaches" />
          <a className="button button-light" href="#contact">
            Book a Lesson
            <span className="button-icon"><ChevronRight size={14} strokeWidth={2.6} /></span>
          </a>
        </header>

        <h1 id="coaches-hero-title" className="coaches-hero-title" aria-label="Play Smart.">
          <svg viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
            <text x="0" y="190" textLength="1000" lengthAdjust="spacingAndGlyphs">PLAY SMART<tspan className="coaches-hero-period">.</tspan></text>
          </svg>
        </h1>

        <div className="coaches-hero-coach" aria-hidden="true">
          <img src="/assets/coach-hero-provided.png" alt="" />
        </div>
        <div className="coaches-hero-transition" aria-hidden="true" />
        <div className="coaches-hero-front-foot" aria-hidden="true">
          <img src="/assets/coach-hero-provided.png" alt="" />
        </div>
        <p className="coaches-coach-label"><span>ACEPICKLE COACHING</span><span>01 / 03</span></p>

        <div className="coaches-hero-copy">
          <p className="eyebrow">Meet your mentors</p>
          <p>Coaches who bring<br />clarity to every point.</p>
          <a href="#approach">Our approach <ArrowRight size={16} /></a>
        </div>
      </section>

      <section id="approach" className="coaches-intro section">
        <div className="section-kicker"><span>A</span><p>Our Coaching</p><i /></div>
        <div className="coaches-intro-grid">
          <h2>THE RIGHT COACH<br />CHANGES THE GAME.</h2>
          <div>
            <p>
              Great coaching is equal parts expertise, empathy and energy. Our team creates
              structured sessions that meet players where they are—and take them further.
            </p>
            <a className="button button-dark" href="#contact">
              Meet the team
              <span className="button-icon"><ArrowRight size={14} strokeWidth={2.6} /></span>
            </a>
          </div>
        </div>

        <div className="coaches-principles">
          {principles.map(({ icon: Icon, number, title, text }) => (
            <article key={number}>
              <div><span>{number}</span><Icon size={25} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="coaches-standard">
        <div className="coaches-standard-inner section">
          <div>
            <p className="eyebrow">The Ace Pickle standard</p>
            <h2>SKILL.<br />ENERGY.<br /><em>CARE.</em></h2>
          </div>
          <div className="coaches-standard-copy">
            <p>Every coach is selected for more than their playing experience. They know how to listen, challenge and help each player find the joy in getting better.</p>
            <ul>
              <li><Check size={17} /> Certified, player-first coaching</li>
              <li><Check size={17} /> Small-group attention</li>
              <li><Check size={17} /> Ongoing development plans</li>
            </ul>
            <a href="#contact">Start your journey <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <GlobalCta />
      <SiteFooter />
    </main>
  );
}
