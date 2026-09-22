import { ArrowRight, ChevronRight } from 'lucide-react';
import { GlobalCta, SiteFooter } from '../components/SiteClosing';
import { MobileNavigation } from '../components/MobileNavigation';
import { BookingExperience } from './BookingExperience';

const navigation = [
  ['Home', '/'],
  ['Training', '/training'],
  ['Coaches', '/coaches'],
  ['Booking', '/booking'],
  ['Tournaments', '/tournaments'],
  ['Membership', '/membership'],
  ['Contact', '/contact'],
] as const;

export default function BookingPage() {
  return (
    <main className="booking-page-shell">
      <section className="booking-hero" aria-labelledby="booking-hero-title">
        <video className="booking-hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/assets/background-cloud.mp4" type="video/mp4" />
        </video>
        <div className="booking-hero-wash" aria-hidden="true" />
        <div className="booking-hero-players" aria-hidden="true">
    <img src="/assets/booking-hero-couple-v3.png" alt="" />
        </div>

        <header className="topbar">
          <a className="brand" href="/" aria-label="Ace Pickle home">
            <span className="brand-mark" aria-hidden="true"><i /><i /></span>
            <span>ACEPICKLE</span>
          </a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} aria-current={label === 'Booking' ? 'page' : undefined}>{label}</a>
            ))}
          </nav>
          <MobileNavigation items={navigation} currentPage="Booking" />
          <a className="button button-light" href="#booking-form">
            Book a Lesson
            <span className="button-icon"><ChevronRight size={14} strokeWidth={2.6} /></span>
          </a>
        </header>

        <div className="booking-hero-heading">
          <p className="eyebrow">Make your next point count</p>
          <h1 id="booking-hero-title" aria-label="Book Your Court.">
            <svg viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
              <text x="0" y="190" textLength="1000" lengthAdjust="spacingAndGlyphs">BOOK YOUR COURT<tspan className="booking-hero-period">.</tspan></text>
            </svg>
          </h1>
        </div>

        <div className="booking-hero-note">
          <span>NEW PLAYER OR NEXT-LEVEL ATHLETE</span>
          <p>Choose a session, tell us your goal and we’ll pair you with the right coach.</p>
          <a href="#booking-form">Start a booking <ArrowRight size={17} /></a>
        </div>
      </section>

      {/*
      <section className="booking-main section" id="booking-form" aria-labelledby="booking-title">
        <div className="section-kicker"><span>A</span><p>Book a Session</p><i /></div>
        <div className="booking-intro">
          <h2 id="booking-title">FIND THE RIGHT<br />TIME TO PLAY.</h2>
          <p>Send your preferred session and timing. Our team will confirm your coach and court within one working day.</p>
        </div>

        <div className="booking-layout">
          <div className="booking-session-list" aria-label="Available session types">
            {sessions.map((session) => (
              <article key={session.number} className="booking-session">
                <span>{session.number}</span>
                <div>
                  <h3>{session.title}</h3>
                  <p>{session.detail}</p>
                </div>
                <p className="booking-duration"><Clock3 size={15} /> {session.meta}</p>
              </article>
            ))}
          </div>

          <form className="booking-form" action="mailto:hello@acepickle.club" method="post" encType="text/plain">
            <div className="booking-form-heading"><p className="eyebrow">Your details</p><span>01 / 01</span></div>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" placeholder="Your full name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <div className="booking-form-row">
              <label>
                Session type
                <select name="session" defaultValue="Private lesson">
                  <option>Private lesson</option>
                  <option>Small group</option>
                  <option>Junior pathway</option>
                </select>
              </label>
              <label>
                Preferred date
                <input name="preferred-date" type="date" />
              </label>
            </div>
            <label>
              What would you like to work on?
              <textarea name="goal" rows={3} placeholder="For example: building confidence at the net" />
            </label>
            <button className="booking-submit" type="submit">Send booking request <ArrowUpRight size={18} /></button>
          </form>
        </div>

        <div className="booking-reassurance">
          <div><CalendarDays size={22} /><p><strong>Flexible scheduling</strong>We’ll find a time that works for you.</p></div>
          <div><Users size={22} /><p><strong>Right coach, right group</strong>Every session is matched to your level.</p></div>
          <div><Check size={22} /><p><strong>Simple confirmation</strong>We’ll confirm everything by email.</p></div>
        </div>
      </section>
      */}
      <BookingExperience />

      <GlobalCta />
      <SiteFooter />
    </main>
  );
}
