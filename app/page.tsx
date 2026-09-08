import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CircleArrowOutUpRight,
} from 'lucide-react';

const navigation = [
  ['Home', '#home'],
  ['Training', '#training'],
  ['Programs', '#programs'],
  ['Coaches', '#about'],
  ['Tournaments', '#training'],
  ['Membership', '#contact'],
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

        <h1 id="hero-title" className="hero-title">
          PLAY STRONG<span>.</span>
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
            <div className="court-lines" aria-hidden="true" />
            <div className="feature-message"><span>TRAIN WITH</span><strong>PURPOSE.</strong></div>
            <div className="feature-stats">
              <div><strong>500<span>+</span></strong><p>Active Players</p></div>
              <div><strong>20<span>+</span></strong><p>Professional Coaches</p></div>
              <a href="#training" aria-label="View training programs"><ArrowUpRight size={28} /></a>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-photo" aria-label="Pickleballs moving across a blue court">
              <span className="ball ball-one" /><span className="ball ball-two" />
              <span className="ball ball-three" /><span className="paddle-shadow" />
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
            <span className="program-index">01</span>
            <div className="program-content"><p>Build the foundations</p><h3>Beginner Training</h3></div>
            <a href="#contact" aria-label="Explore beginner training"><CircleArrowOutUpRight size={42} strokeWidth={1.25} /></a>
          </article>
          <article className="program-card program-card-coach">
            <span className="program-index">02</span>
            <div className="coach-figure" aria-hidden="true">
              <span className="coach-head" /><span className="coach-body" /><span className="coach-paddle" />
            </div>
            <div className="program-content"><p>James Curtis</p><h3>Private Coaching</h3></div>
            <a href="#contact" aria-label="Explore private coaching"><CircleArrowOutUpRight size={42} strokeWidth={1.25} /></a>
          </article>
          <article className="program-card program-card-dark">
            <span className="program-index">03</span><div className="speed-ball" aria-hidden="true" />
            <div className="program-content"><p>Push beyond your limits</p><h3>Advanced Training</h3></div>
            <a href="#contact" aria-label="Explore advanced training"><CircleArrowOutUpRight size={42} strokeWidth={1.25} /></a>
          </article>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div><p className="eyebrow">READY TO PLAY?</p><h2>BOOK YOUR FIRST LESSON.</h2></div>
        <a className="button button-light" href="mailto:hello@acepickle.club">
          hello@acepickle.club
          <span className="button-icon"><ArrowUpRight size={14} strokeWidth={2.6} /></span>
        </a>
      </footer>
    </main>
  );
}
