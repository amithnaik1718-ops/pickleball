import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck2,
  Check,
  ChevronRight,
  CirclePlay,
  Trophy,
  Users,
} from 'lucide-react';
import { GlobalCta, SiteFooter } from '../components/SiteClosing';

const navigation = [
  ['Home', '/'],
  ['Training', '/training'],
  ['Coaches', '/coaches'],
  ['Booking', '/booking'],
  ['Tournaments', '/tournaments'],
  ['Membership', '/membership'],
  ['Contact', '/contact'],
] as const;

const memberships = [
  {
    number: '01',
    name: 'Play',
    note: 'For players finding their rhythm.',
    perks: ['Priority court access', 'Member social sessions', 'Club event invitations'],
    tone: 'light',
  },
  {
    number: '02',
    name: 'Progress',
    note: 'For players building a stronger game.',
    perks: ['Everything in Play', 'Training session priority', 'Member tournament entry'],
    tone: 'dark',
  },
  {
    number: '03',
    name: 'Junior',
    note: 'For young players with big energy.',
    perks: ['Junior match play', 'Holiday rally days', 'Supportive coaching pathway'],
    tone: 'lime',
  },
] as const;

const benefits = [
  { icon: CalendarCheck2, title: 'More time on court', text: 'Priority access makes it easier to turn plans into play.' },
  { icon: Users, title: 'A ready-made community', text: 'Meet regular partners, new opponents and friendly faces.' },
  { icon: Trophy, title: 'A reason to keep growing', text: 'From clinics to competitions, your next challenge is close.' },
] as const;

export default function MembershipPage() {
  return (
    <main className="membership-page-shell">
      <section className="membership-hero" aria-labelledby="membership-hero-title">
        <video className="membership-hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/assets/background-cloud.mp4" type="video/mp4" />
        </video>
        <div className="membership-hero-wash" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="/" aria-label="Ace Pickle home"><span className="brand-mark" aria-hidden="true"><i /><i /></span><span>ACEPICKLE</span></a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a key={label} href={href} aria-current={label === 'Membership' ? 'page' : undefined}>{label}</a>)}
          </nav>
          <a className="button button-light" href="#membership-options">Join the Club<span className="button-icon"><ChevronRight size={14} strokeWidth={2.6} /></span></a>
        </header>

        <div className="membership-hero-heading"><p className="eyebrow">YOUR CLUB. YOUR COURT.</p><h1 id="membership-hero-title">MAKE PLAY<br /><span>YOURS.</span></h1></div>
        <div className="membership-hero-copy"><p className="eyebrow">Membership at AcePickle</p><p>More court time, more connections and a club that keeps you moving forward.</p><a href="#membership-options">Find your membership <ArrowRight size={16} /></a></div>
      </section>

      <section id="membership-options" className="membership-options section" aria-labelledby="membership-options-title">
        <div className="section-kicker"><span>M</span><p>Choose your membership</p><i /></div>
        <div className="membership-intro"><h2 id="membership-options-title">A GOOD GAME<br />STARTS WITH <em>BELONGING.</em></h2><p>Choose the club experience that fits how you want to play. Every membership is built around easy access, meaningful progress and a lot more time on court.</p></div>
        <div className="membership-grid">
          {memberships.map((membership) => (
            <article key={membership.number} className={`membership-card membership-card-${membership.tone}`}>
              <div className="membership-card-top"><span>{membership.number}</span><CirclePlay size={21} /></div>
              <h3>{membership.name}</h3><p className="membership-card-note">{membership.note}</p>
              <ul>{membership.perks.map((perk) => <li key={perk}><Check size={16} />{perk}</li>)}</ul>
              <a href={`mailto:hello@acepickle.club?subject=${encodeURIComponent(`${membership.name} membership`)}`}>Ask about {membership.name}<ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="membership-benefits" aria-labelledby="membership-benefits-title">
        <div className="membership-benefits-inner section">
          <div><p className="eyebrow">The club advantage</p><h2 id="membership-benefits-title">MORE THAN<br />A <em>MEMBERSHIP.</em></h2></div>
          <div className="membership-benefit-list">
            {benefits.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon size={23} /><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="membership-community section" aria-labelledby="community-title">
        <div className="membership-community-mark"><span>PLAY</span><strong>TOGETHER.</strong></div>
        <div className="membership-community-copy"><p className="eyebrow">A place to return to</p><h2 id="community-title">YOUR PEOPLE.<br />YOUR <em>PACE.</em></h2><p>Whether you’re here for a weekly hit, a coaching block or a weekend tournament, AcePickle gives every player a place to belong.</p><a className="button button-dark" href="mailto:hello@acepickle.club?subject=Membership%20enquiry">Talk to our team<span className="button-icon"><ArrowRight size={14} strokeWidth={2.6} /></span></a></div>
      </section>

      <GlobalCta />
      <SiteFooter />
    </main>
  );
}
