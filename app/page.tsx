import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CircleArrowOutUpRight,
} from 'lucide-react';
import { GlobalCta, LocationSection, SiteFooter } from './components/SiteClosing';

const navigation = [
  ['Home', '#home'],
  ['Training', '/training'],
  ['Coaches', '/coaches'],
  ['Booking', '/booking'],
  ['Tournaments', '/tournaments'],
  ['Membership', '/membership'],
  ['Contact', '/contact'],
] as const;

export default function Home() {
  return (
    <main className="site-shell">
      <section id="home" className="hero" aria-labelledby="hero-title">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/assets/background-cloud.mp4" type="video/mp4" />
        </video>
        <div className="hero-wash" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="#home" aria-label="Ace Pickle home">
            <span className="brand-mark" aria-hidden="true"><i /><i /></span>
            <span>ACEPICKLE</span>
          </a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>
          <a className="button button-light" href="#contact">
            Book a Lesson
            <span className="button-icon"><ChevronRight size={14} strokeWidth={2.6} /></span>
          </a>
        </header>

        <h1 id="hero-title" className="hero-title" aria-label="Play Strong.">
          <svg viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
            <text x="0" y="190" textLength="1000" lengthAdjust="spacingAndGlyphs">
              PLAY STRONG<tspan className="hero-period">.</tspan>
            </text>
          </svg>
        </h1>
        <img
          className="hero-player"
          src="/assets/pickleball-player.png"
          alt="Pickleball player leaping through the air with a paddle and ball"
        />

        <div className="hero-copy">
          <p className="eyebrow">— Since 2010</p>
          <p className="hero-copy-title">Building Champions On<br />and Off the Court</p>
          <div className="hero-arrows" aria-label="Featured story navigation">
            <button type="button" aria-label="Previous story"><ArrowLeft size={18} /></button>
            <button type="button" aria-label="Next story"><ArrowRight size={18} /></button>
          </div>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
          SCROLL TO DISCOVER <ArrowRight size={15} />
        </a>
      </section>

      <section id="about" className="section about-section">
        <div className="section-kicker"><span>A</span><p>About</p><i /></div>
        <div className="about-copy-grid">
          <h2>BUILDING CHAMPIONS ON AND OFF THE COURT</h2>
          <p>
            Our tennis academy provides world-class training programs designed for players of all levels.
            From beginners learning the basics to advanced athletes competing at national tournaments,
            our coaches focus on technique, fitness, and match strategy.
          </p>
          <div>
            <p>
              We combine modern training methods, performance analytics, and professional coaching to
              help every player reach their full potential.
            </p>
            <a className="button button-dark" href="#contact">
              Book a Lesson
              <span className="button-icon"><ChevronRight size={14} strokeWidth={2.6} /></span>
            </a>
          </div>
        </div>

        <div className="about-visual-grid">
          <div className="player-feature">
            <img
              src="/assets/pickleball-feature-man.webp"
              alt="Pickleball player returning a shot during a professional match"
            />
            <div className="feature-stats">
              <div><strong>500<span>+</span></strong><p>Active Players</p></div>
              <div><strong>20<span>+</span></strong><p>Professional Coaches</p></div>
              <a href="#training" aria-label="View training programs"><ArrowUpRight size={28} /></a>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-photo">
              <img
                src="/assets/pickleball-feature-woman.jpg"
                alt="Pickleball player reaching forward for a low shot at the net"
              />
            </div>
            <div className="experience-number">
              <strong>15</strong><p>Years of<br />Excellence</p>
            </div>
            <ul>
              <li>Professional certified coaches</li>
              <li>Modern tennis courts</li>
              <li>Personalized training programs</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="training" className="section training-section">
        <div className="section-kicker"><span>B</span><p>Training Program</p><i /></div>
        <div id="programs" className="program-grid">
          <article className="program-card program-card-soft">
            <img
              className="program-image program-image-beginner"
              src="/assets/training-beginner.jpg"
              alt="Beginner pickleball player practicing on an outdoor court"
            />
            <span className="program-index">01</span>
            <div className="program-content"><p>Build the foundations</p><h3>Beginner Training</h3></div>
            <a href="#contact" aria-label="Explore beginner training"><CircleArrowOutUpRight size={42} strokeWidth={1.25} /></a>
          </article>
          <article className="program-card program-card-coach">
            <img
              className="program-image program-image-private"
              src="/assets/training-private.webp"
              alt="Pickleball players receiving private coaching on an outdoor court"
            />
            <span className="program-index">02</span>
            <div className="program-content"><p>James Curtis</p><h3>Private Coaching</h3></div>
            <a href="#contact" aria-label="Explore private coaching"><CircleArrowOutUpRight size={42} strokeWidth={1.25} /></a>
          </article>
          <article className="program-card program-card-dark">
            <img
              className="program-image program-image-advanced"
              src="/assets/training-advanced.jpg"
              alt="Advanced pickleball doubles training session on an indoor court"
            />
            <span className="program-index">03</span>
            <div className="program-content"><p>Push beyond your limits</p><h3>Advanced Training</h3></div>
            <a href="#contact" aria-label="Explore advanced training"><CircleArrowOutUpRight size={42} strokeWidth={1.25} /></a>
          </article>
        </div>
      </section>

      <section className="home-window home-booking-window" aria-labelledby="home-booking-title">
        <div className="home-window-visual">
          <img src="/assets/booking-pickleball-poster.png" alt="Graphic pickleball poster featuring a player and the words Play With Purpose" />
        </div>
        <div className="home-window-copy">
          <p className="eyebrow">Book your court time</p>
          <h2 id="home-booking-title">MAKE TIME<br />TO <em>PLAY.</em></h2>
          <p>Private lessons, group sessions and junior training—choose your moment and we’ll take care of the details.</p>
          <a className="button button-dark" href="/booking">Book a session<span className="button-icon"><ArrowRight size={14} strokeWidth={2.6} /></span></a>
        </div>
      </section>

      <section className="home-window home-tournaments-window" aria-labelledby="home-tournaments-title">
        <div className="home-window-copy">
          <p className="eyebrow">Competition for every level</p>
          <h2 id="home-tournaments-title">CHASE THE<br /><em>NEXT POINT.</em></h2>
          <p>From first-match nerves to club finals, our tournament calendar gives every player a reason to step up.</p>
          <a className="home-window-link" href="/tournaments">Explore tournaments <ArrowUpRight size={18} /></a>
        </div>
        <div className="home-tournament-board" aria-label="Tournament formats">
          <div><span>01</span><strong>OPEN<br />DOUBLES</strong><p>Every Saturday</p></div>
          <div><span>02</span><strong>CLUB<br />FINALS</strong><p>Monthly feature</p></div>
          <div><span>03</span><strong>JUNIOR<br />RALLY</strong><p>School holidays</p></div>
        </div>
      </section>

      <section className="home-window home-membership-window" aria-labelledby="home-membership-title">
        <div className="home-membership-image"><img src="/assets/membership-pickleball-poster.png" alt="Graphic pickleball membership poster featuring a player in a red dress" /></div>
        <div className="home-window-copy">
          <p className="eyebrow">Membership made for play</p>
          <h2 id="home-membership-title">JOIN THE<br /><em>CLUB.<br />PLAY MORE.</em></h2>
          <p>Unlock priority court access, member-only match play and a welcoming community for every rally.</p>
          <a className="button button-dark" href="/membership">Explore membership<span className="button-icon"><ArrowRight size={14} strokeWidth={2.6} /></span></a>
        </div>
      </section>

      <GlobalCta />
      <LocationSection />
      <SiteFooter />
    </main>
  );
}
