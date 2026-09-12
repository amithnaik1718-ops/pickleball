import { ArrowRight, ArrowUpRight, ChevronRight, MapPin } from 'lucide-react';

const links = [
  ['Home', '/'],
  ['Training', '/training'],
  ['Coaches', '/coaches'],
  ['Booking', '/booking'],
  ['Tournaments', '/tournaments'],
  ['Membership', '/membership'],
  ['Contact', '/contact'],
] as const;

export function GlobalCta() {
  return (
    <>
      <section className="global-cta" aria-labelledby="global-cta-title">
      <div className="global-cta-inner section">
        <div>
          <p className="eyebrow">THE NEXT RALLY STARTS HERE</p>
          <h2 id="global-cta-title">LET’S PLAY<br /><em>WITH PURPOSE.</em></h2>
        </div>
        <div className="global-cta-action">
          <p>Tell us how you want to play, and we’ll help you find the right court, coach or community.</p>
          <a className="button button-light" href="/booking">
            Book a session
            <span className="button-icon"><ArrowRight size={14} strokeWidth={2.6} /></span>
          </a>
        </div>
      </div>
      </section>
    </>
  );
}

export function LocationSection() {
  return (
    <section className="club-location" aria-labelledby="club-location-title">
      <div className="club-location-shell">
        <div className="club-location-map">
          <iframe
            title="Map to The Pickleball Club"
            src="https://www.google.com/maps?q=The%20Pickleball%20Club%2C%20Plot%201C%20%26%201D%2C%20Anusuya%20Avenue%2C%20Kilpauk%20Garden%20Lane%2C%20Chennai%20600010&z=16&output=embed"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="club-location-map-label"><MapPin size={14} strokeWidth={2.5} /><span>The Pickleball Club</span><small>Location</small></div>
        </div>

        <div className="club-location-info">
          <div className="club-location-lead">
            <p className="eyebrow">Find the club</p>
            <h2 id="club-location-title">Find your next<br />rally <em>here.</em></h2>
          </div>
          <div className="club-location-detail">
            <span>Book a court</span>
            <a className="location-directions" href="https://www.google.com/maps/search/?api=1&query=The%20Pickleball%20Club" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} strokeWidth={2.5} /></a>
            <a className="location-booking" href="/booking">Court bookings <ArrowRight size={15} strokeWidth={2.5} /></a>
          </div>
          <div className="club-location-detail">
            <span>Location</span>
            <strong>Chennai</strong>
            <p>Kilpauk Garden Lane,<br />Kilpauk</p>
          </div>
          <div className="club-location-detail">
            <span>Pincode</span>
            <strong>600010</strong>
            <p>Chennai, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer-main section">
        <div className="site-footer-brand">
          <a className="brand" href="/" aria-label="Ace Pickle home"><span className="brand-mark" aria-hidden="true"><i /><i /></span><span>ACEPICKLE</span></a>
          <p>More good games, more often.</p>
        </div>
        <nav aria-label="Footer navigation">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="site-footer-contact" href="mailto:hello@acepickle.club">
          <span>START A CONVERSATION</span>
          <strong>hello@acepickle.club</strong>
          <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="site-footer-bottom section"><span>© 2026 ACEPICKLE CLUB</span><span>PLAY. LEARN. BELONG.</span><a href="/membership">Member access <ChevronRight size={14} /></a></div>
    </footer>
  );
}
