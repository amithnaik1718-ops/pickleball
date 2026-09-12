import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  CircleDot,
  Clock3,
  Medal,
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

const events = [
  { number: '01', name: 'Saturday Social', type: 'Open doubles', description: 'A welcoming, fast-moving draw for players who want more match play and new partners.', detail: 'Every Saturday', accent: 'social' },
  { number: '02', name: 'Club Championship', type: 'Levelled singles + doubles', description: 'Compete in a focused weekend bracket built around your level, with a final worth earning.', detail: 'Monthly feature', accent: 'championship' },
  { number: '03', name: 'Junior Rally', type: 'Youth match day', description: 'A supportive first-tournament experience with coached warm-ups and plenty of court time.', detail: 'School holidays', accent: 'junior' },
] as const;

const matchDay = [
  ['Check in', 'Arrive 20 minutes early, meet your draw and settle in.'],
  ['Warm up', 'Use the practice court, then join a quick player briefing.'],
  ['Play', 'Round-robin pools lead into a sharp, well-paced knockout.'],
  ['Celebrate', 'Stick around for finals, podiums and the post-match buzz.'],
] as const;

export default function TournamentsPage() {
  return (
    <main className="tournaments-page-shell">
      <section className="tournaments-hero" aria-labelledby="tournaments-hero-title">
        <video className="tournaments-hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/assets/training-hero.mp4" type="video/mp4" />
        </video>
        <div className="tournaments-hero-wash" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="/" aria-label="Ace Pickle home"><span className="brand-mark" aria-hidden="true"><i /><i /></span><span>ACEPICKLE</span></a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a key={label} href={href} aria-current={label === 'Tournaments' ? 'page' : undefined}>{label}</a>)}
          </nav>
          <a className="button button-light" href="#events">Find an Event<span className="button-icon"><ChevronRight size={14} strokeWidth={2.6} /></span></a>
        </header>

        <div className="tournaments-hero-heading"><p className="eyebrow">ACEPICKLE COMPETITION</p><h1 id="tournaments-hero-title">PLAY FOR<br /><span>MORE.</span></h1></div>
        <aside className="tournaments-hero-score" aria-label="Tournament highlights"><p>GAME ON</p><strong>01 <span>/ 03</span></strong><div><Trophy size={16} /><span>Friendly to finals</span></div></aside>
        <div className="tournaments-hero-copy"><p className="eyebrow">Your next challenge</p><p>Find your level, bring your energy and make every rally count.</p><a href="#events">Explore events <ArrowRight size={16} /></a></div>
      </section>

      <section id="events" className="tournaments-events section" aria-labelledby="events-title">
        <div className="section-kicker"><span>T</span><p>Upcoming formats</p><i /></div>
        <div className="tournaments-intro"><h2 id="events-title">FIND YOUR<br />NEXT <em>RALLY.</em></h2><p>Our events give every player a place to compete—from first-match nerves to all-out finals. Choose a format, enter your level and get in the draw.</p></div>
        <div className="tournaments-event-grid">
          {events.map((event) => (
            <article key={event.number} className={`tournament-event tournament-event-${event.accent}`}>
              <div className="tournament-event-top"><span>{event.number}</span><ArrowUpRight size={21} /></div>
              <p className="tournament-event-type">{event.type}</p><h3>{event.name}</h3><p className="tournament-event-description">{event.description}</p>
              <div className="tournament-event-bottom"><CalendarDays size={15} /><span>{event.detail}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="tournaments-matchday" aria-labelledby="matchday-title">
        <div className="tournaments-matchday-inner section">
          <div className="tournaments-matchday-lead"><p className="eyebrow">Tournament day</p><h2 id="matchday-title">READY.<br />SET.<br /><em>RALLY.</em></h2><p>Simple formats, clear communication and great courts. All you need to bring is your paddle and a willingness to play.</p></div>
          <div className="tournaments-timeline">
            {matchDay.map(([step, text], index) => <article key={step}><span>0{index + 1}</span><div><h3>{step}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="tournaments-details section" aria-labelledby="details-title">
        <div><p className="eyebrow">Built for better competition</p><h2 id="details-title">GOOD GAMES.<br />GREAT <em>ENERGY.</em></h2></div>
        <div className="tournaments-detail-list">
          <p><Users size={20} /><span><strong>Balanced brackets</strong>Events are grouped by level to keep every match competitive.</span></p>
          <p><Clock3 size={20} /><span><strong>Well-paced format</strong>Clear schedules mean more playing and less waiting around.</span></p>
          <p><Medal size={20} /><span><strong>Something to play for</strong>Finalists earn their moment—and the right to come back stronger.</span></p>
          <a className="button button-dark" href="mailto:hello@acepickle.club?subject=Tournament%20registration">Register your interest<span className="button-icon"><ArrowRight size={14} strokeWidth={2.6} /></span></a>
        </div>
      </section>

      <GlobalCta />
      <SiteFooter />
    </main>
  );
}
