import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CircleCheck,
  Clock3,
  Mail,
  MapPin,
} from 'lucide-react';
import { LocationSection, SiteFooter } from '../components/SiteClosing';

const navigation = [
  ['Home', '/'],
  ['Training', '/training'],
  ['Coaches', '/coaches'],
  ['Booking', '/booking'],
  ['Tournaments', '/tournaments'],
  ['Membership', '/membership'],
  ['Contact', '/contact'],
] as const;

export default function ContactPage() {
  return (
    <main className="contact-page-shell">
      <section className="contact-hero" aria-labelledby="contact-title">
        <header className="topbar">
          <a className="brand" href="/" aria-label="Ace Pickle home">
            <span className="brand-mark" aria-hidden="true"><i /><i /></span>
            <span>ACEPICKLE</span>
          </a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, href]) => (
              <a key={label} href={href} aria-current={label === 'Contact' ? 'page' : undefined}>{label}</a>
            ))}
          </nav>
          <a className="button button-light" href="/booking">
            Book a court
            <span className="button-icon"><ChevronRight size={14} strokeWidth={2.6} /></span>
          </a>
        </header>

        <div className="contact-hero-content section">
          <p className="eyebrow">Get in touch</p>
          <h1 id="contact-title">LET'S GET<br /><em>YOU PLAYING.</em></h1>
          <p>Questions, court bookings, coaching or membership—our club team is here to help you get on court.</p>
        </div>
        <div className="contact-hero-orbit" aria-hidden="true" />
      </section>

      <section className="contact-options section" aria-label="Contact options">
        <a className="contact-option" href="mailto:hello@acepickle.club">
          <span className="contact-option-icon"><Mail size={20} /></span>
          <span><small>Email us</small><strong>hello@acepickle.club</strong><em>We’ll get back to you soon.</em></span>
          <ArrowUpRight size={20} />
        </a>
        <a className="contact-option" href="/booking">
          <span className="contact-option-icon"><ArrowRight size={20} /></span>
          <span><small>Book a court</small><strong>Choose your session</strong><em>Find a time that suits you.</em></span>
          <ArrowUpRight size={20} />
        </a>
        <div className="contact-option">
          <span className="contact-option-icon"><Clock3 size={20} /></span>
          <span><small>Club hours</small><strong>Open daily</strong><em>Plan your next rally with us.</em></span>
        </div>
      </section>

      <section className="contact-message section" aria-labelledby="contact-message-title">
        <div className="contact-message-copy">
          <p className="eyebrow">Contact / enquiries</p>
          <h2 id="contact-message-title">WE’RE READY<br />WHEN <em>YOU ARE.</em></h2>
          <p>Tell us what you’re looking for and we’ll point you to the right session, coach or membership.</p>
          <ul className="contact-reasons">
            <li><CircleCheck size={18} strokeWidth={2.4} />Court bookings &amp; session enquiries</li>
            <li><CircleCheck size={18} strokeWidth={2.4} />Coaching &amp; training information</li>
            <li><CircleCheck size={18} strokeWidth={2.4} />Memberships, events &amp; group bookings</li>
          </ul>
          <div className="contact-visit"><MapPin size={18} /><span>Plot 1C &amp; 1D, Anusuya Avenue,<br />Kilpauk Garden Lane, Chennai 600010</span></div>
        </div>
        <div className="contact-form-wrap">
          <form className="contact-form" action="mailto:hello@acepickle.club" method="post" encType="text/plain">
            <div className="contact-form-heading">
              <div><p>Enquiry form</p><h3>How can we help?</h3></div>
              <span aria-hidden="true"><ArrowUpRight size={20} strokeWidth={2.4} /></span>
            </div>
            <div className="contact-form-two-up">
              <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
              <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" /></label>
            </div>
            <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <label>I’m interested in
              <select name="enquiryType" defaultValue="">
                <option value="" disabled>Select an enquiry type</option>
                <option>Court booking</option>
                <option>Coaching</option>
                <option>Membership</option>
                <option>Group booking</option>
                <option>Events</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows={5} placeholder="Tell us how we can help" required /></label>
            <button className="contact-submit" type="submit">Send message<ArrowRight size={18} strokeWidth={2.6} /></button>
          </form>
        </div>
      </section>

      <LocationSection />
      <SiteFooter />
    </main>
  );
}
