import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Target,
  Users,
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

const programs = [
  {
    number: '01',
    level: 'Foundation',
    title: 'Starter Skills',
    description: 'Build a reliable grip, clean contact and confident court movement through playful, repeatable drills.',
    meta: ['Ages 7–11', '60 min'],
    image: '/assets/training-starter.webp',
    imageAlt: 'Young player practicing pickleball fundamentals on an outdoor court',
  },
  {
    number: '02',
    level: 'Development',
    title: 'Performance Lab',
    description: 'Turn solid technique into smarter patterns with movement training, point construction and live play.',
    meta: ['Ages 10–15', '75 min'],
    image: '/assets/training-performance.jpg',
    imageAlt: 'Athlete completing resistance training in a performance gym',
  },
  {
    number: '03',
    level: 'Competition',
    title: 'Match Ready',
    description: 'Prepare for tournament pressure with tactical scenarios, performance goals and match review.',
    meta: ['Invite group', '90 min'],
    image: '/assets/training-match-ready.jpg',
    imageAlt: 'Pickleball players training together on an outdoor court',
  },
] as const;

const trainingSteps = [
  ['Assess', 'A focused baseline session identifies technique, movement and game-awareness priorities.'],
  ['Build', 'Your coach sets a clear training block with measurable weekly targets.'],
  ['Compete', 'Guided points and match play turn new skills into confident decisions.'],
  ['Review', 'Simple feedback and progress notes shape the next training cycle.'],
] as const;

export default function TrainingPage() {
  return (
    <main className="training-page-shell">
      <section className="training-page-hero" aria-labelledby="training-hero-title">
        <video
          className="training-page-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/assets/training-hero.mp4" type="video/mp4" />
        </video>
        <div className="training-page-wash" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="/" aria-label="Ace Pickle home">
            <span className="brand-mark" aria-hidden="true"><i /><i /></span>
            <span>ACEPICKLE</span>
          </a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} aria-current={label === 'Training' ? 'page' : undefined}>{label}</a>
            ))}
          </nav>
          <MobileNavigation items={navigation} currentPage="Training" />
          <a className="button button-light" href="#contact">
            Book a Lesson
            <span className="button-icon"><ChevronRight size={14} strokeWidth={2.6} /></span>
          </a>
        </header>

        <h1 id="training-hero-title" className="training-page-title" aria-label="Train Bold.">
          <svg viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
            <text x="0" y="190" textLength="1000" lengthAdjust="spacingAndGlyphs">
              TRAIN BOLD<tspan>.</tspan>
            </text>
          </svg>
        </h1>

        <img
          className="training-page-player"
          src="/assets/training-player-hd-solid.png"
          alt="Pickleball player stepping forward with a paddle"
        />

        <div className="training-page-copy">
          <p className="eyebrow">Youth development</p>
          <p>Build control, confidence<br />and match intelligence.</p>
          <a href="#programs">Explore programs <ArrowRight size={16} /></a>
        </div>

        <a className="training-scroll-cue" href="#programs">
          Discover training <ArrowRight size={15} />
        </a>
      </section>

      <section id="programs" className="training-intro section">
        <div className="section-kicker"><span>A</span><p>Training Programs</p><i /></div>
        <div className="training-intro-heading">
          <h2>TRAIN WITH A<br />CLEAR PURPOSE.</h2>
          <div>
            <p>
              Every player starts in a different place. Our coaching combines technical detail,
              athletic movement and match play in a pathway that grows with the athlete.
            </p>
            <p className="training-intro-note">Small groups. Clear goals. Feedback players can use.</p>
          </div>
        </div>

        <div className="training-program-list">
          {programs.map((program) => (
            <article className="training-program" key={program.number}>
              <div className="training-program-media">
                <img className="training-program-image-backdrop" src={program.image} alt="" aria-hidden="true" />
                <img className="training-program-image" src={program.image} alt={program.imageAlt} />
                <div className="training-program-topline">
                  <span>{program.number}</span>
                  <p>{program.level}</p>
                  <span className="training-program-arrow"><ArrowUpRight size={21} strokeWidth={1.6} /></span>
                </div>
              </div>
              <div className="training-program-body">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="training-program-meta">
                  <span><Users size={14} />{program.meta[0]}</span>
                  <span><Clock3 size={14} />{program.meta[1]}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pathways" className="training-pathway">
        <div className="training-pathway-inner section">
          <div className="section-kicker section-kicker-light"><span>B</span><p>How It Works</p><i /></div>
          <div className="training-pathway-heading">
            <p className="eyebrow">A smarter route to progress</p>
            <h2>FROM FIRST CONTACT<br />TO MATCH CONFIDENCE.</h2>
          </div>
          <div className="training-steps">
            {trainingSteps.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <Target size={22} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GlobalCta />
      <SiteFooter />
    </main>
  );
}
