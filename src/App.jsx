import React, { useState } from 'react';

const navItems = [
  ['Solutions', '#solutions'],
  ['Devices', '#devices'],
  ['Platform', '#platform'],
  ['How it works', '#how-it-works'],
  ['Resources', '#resources'],
];

const capabilities = [
  {
    icon: '◎',
    title: 'Location visibility',
    description: 'Review location information from compatible devices in one operational view.',
    tag: 'Device dependent',
  },
  {
    icon: '⌖',
    title: 'Zone-event workflows',
    description: 'Configure review workflows around authorized zones and defined event rules.',
    tag: 'Integration dependent',
  },
  {
    icon: '⌁',
    title: 'Device status',
    description: 'Bring available battery, connectivity, and device-health signals into context.',
    tag: 'Device dependent',
  },
  {
    icon: '◷',
    title: 'History & reporting',
    description: 'Support operational review with location history and configurable reporting.',
    tag: 'Proposed capability',
  },
  {
    icon: '▤',
    title: 'Centralized workflows',
    description: 'Give authorized teams a shared workspace for monitoring activity and alerts.',
    tag: 'Proposed capability',
  },
  {
    icon: '⌑',
    title: 'Access controls',
    description: 'Design permissions and auditability to match the needs of each deployment.',
    tag: 'Confirm before deployment',
  },
];

const steps = [
  ['01', 'Assign', 'Associate a compatible device with an authorized monitoring record.'],
  ['02', 'Locate', 'The device determines location using its supported positioning technology.'],
  ['03', 'Transmit', 'Updates travel over the supported network when connectivity is available.'],
  ['04', 'Review', 'A configured platform presents permitted device and event information.'],
  ['05', 'Respond', 'Authorized staff review alerts and follow established procedures.'],
];

const useCases = [
  ['Community supervision', 'Support authorized supervision teams with clearer operational visibility.'],
  ['Court-authorized monitoring', 'Help teams review configured monitoring information and events.'],
  ['Operations & reporting', 'Bring device status and review workflows into a centralized view.'],
];

const Icon = ({ name, size = 20, className = '' }) => {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4z" /></>,
  };
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">{paths[name]}</svg>
  );
};

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#home" aria-label="Trackin360 home">
      <span className="brand-mark"><span /><span /><span /></span>
      <span>trackin<span className="brand-blue">360</span></span>
    </a>
  );
}

function BraceletIllustration() {
  return (
    <svg className="bracelet-art" viewBox="0 0 560 390" role="img" aria-label="Illustrative electronic monitoring device with a curved black strap">
      <defs>
        <linearGradient id="strap" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#202a38" /><stop offset=".48" stopColor="#050a12" /><stop offset="1" stopColor="#303d4b" />
        </linearGradient>
        <linearGradient id="device" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#303d4c" /><stop offset=".52" stopColor="#111b29" /><stop offset="1" stopColor="#080e17" />
        </linearGradient>
        <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="17" /></filter>
      </defs>
      <ellipse cx="286" cy="316" rx="172" ry="25" fill="#000" opacity=".45" filter="url(#shadow)" />
      <path d="M166 80c-67 44-96 126-70 189 21 52 75 80 144 83l17-48c-54-4-88-24-101-57-14-36 5-82 54-111z" fill="url(#strap)" stroke="#485563" strokeWidth="3" />
      <path d="M380 62c69 47 105 118 90 181-13 57-62 92-131 106l-21-49c53-12 84-34 92-69 9-39-16-79-67-104z" fill="url(#strap)" stroke="#485563" strokeWidth="3" />
      <path d="M157 107c-33 31-49 70-44 104M400 91c36 35 56 75 54 112" fill="none" stroke="#6c7884" strokeWidth="3" strokeDasharray="8 12" opacity=".65" />
      <rect x="199" y="90" width="171" height="222" rx="44" fill="#02060b" opacity=".6" />
      <rect x="190" y="77" width="174" height="225" rx="42" fill="url(#device)" stroke="#5d6875" strokeWidth="2" />
      <rect x="204" y="91" width="146" height="196" rx="31" fill="#0b1420" stroke="#3b4652" />
      <path d="M221 110h112" stroke="#8794a2" strokeWidth="2" opacity=".5" />
      <circle cx="277" cy="183" r="44" fill="#101f2e" stroke="#238fd0" strokeWidth="2" />
      <circle cx="277" cy="183" r="30" fill="none" stroke="#19a9f5" strokeWidth="1.6" opacity=".65" />
      <circle cx="277" cy="183" r="15" fill="#19a9f5" opacity=".13" />
      <circle cx="277" cy="183" r="5" fill="#7dd4ff" />
      <path d="M246 240h62" stroke="#3d4b59" strokeWidth="5" strokeLinecap="round" />
      <circle cx="277" cy="264" r="5" fill="#20c78a" />
      <path d="M205 108h8m117 0h8M205 270h8m117 0h8" stroke="#768492" strokeWidth="2" />
    </svg>
  );
}

function DashboardPreview() {
  return (
    <div className="dashboard-window" aria-label="Illustrative dashboard preview using fictional demonstration data">
      <div className="dash-topbar">
        <div className="dash-brand"><span className="dash-logo">t</span><strong>Monitor</strong><span className="demo-label">DEMO DATA</span></div>
        <div className="dash-top-actions"><span className="dash-sync"><i /> Demo view</span><span className="avatar">JD</span></div>
      </div>
      <div className="dash-content">
        <aside className="dash-sidebar">
          <div className="side-active">◫ <span>Overview</span></div>
          <div>⌖ <span>Map view</span></div>
          <div>◷ <span>Event review</span></div>
          <div>▤ <span>Reports</span></div>
          <div className="side-bottom">⚙ <span>Settings</span></div>
        </aside>
        <div className="dash-main">
          <div className="dash-heading"><div><small>WORKSPACE / OVERVIEW</small><h3>Monitoring overview</h3></div><span className="filter-button">Today⌄</span></div>
          <div className="stat-row">
            <div className="stat-box"><small>DEMO DEVICES</small><strong>128</strong><span className="stat-hint">Illustrative total</span></div>
            <div className="stat-box"><small>NEEDS REVIEW</small><strong>04</strong><span className="stat-hint review-hint">Fictional alerts</span></div>
            <div className="stat-box"><small>DEVICE STATUS</small><strong className="status-good">● Normal</strong><span className="stat-hint">Sample status only</span></div>
          </div>
          <div className="dash-map-row">
            <div className="map-panel">
              <div className="map-tools"><strong>Location overview</strong><span className="map-control" aria-hidden="true">⌖</span></div>
              <div className="illustrative-map">
                <iframe
                  title="Google Maps preview of a fictional demonstration area in San Francisco"
                  src="https://maps.google.com/maps?q=37.7749%2C-122.4194&z=12&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <span className="map-you-are">FICTIONAL DEMO AREA · SAN FRANCISCO</span>
                <span className="map-watermark">Example map · no person is being tracked</span>
              </div>
              <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=37.7749%2C-122.4194" target="_blank" rel="noreferrer">Open demo area in Google Maps ↗</a>
            </div>
            <div className="events-panel">
              <div className="events-title"><strong>Recent events</strong><span>View all →</span></div>
              <div className="event-item"><span className="event-icon event-blue">⌖</span><div><b>Zone event</b><small>Sample record · 10:42 AM</small></div><i className="event-dot" /></div>
              <div className="event-item"><span className="event-icon event-orange">⌁</span><div><b>Status update</b><small>Sample record · 10:18 AM</small></div><i className="event-dot orange-dot" /></div>
              <div className="event-item"><span className="event-icon event-green">✓</span><div><b>Check-in received</b><small>Sample record · 09:56 AM</small></div><i className="event-dot green-dot" /></div>
              <div className="events-disclaimer">Fictional demonstration data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />
          <button className="mobile-menu" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
          <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="login-link" href="https://mgr.trackin360.com/en-us/Home/Index" target="_blank" rel="noreferrer">Login ↗</a>
            <a className="nav-cta" href="#solutions" onClick={() => setMenuOpen(false)}>Explore solutions <Icon name="arrow" size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> ELECTRONIC MONITORING, REIMAGINED</div>
              <h1>Smarter monitoring.<br /><span>Greater visibility.</span></h1>
              <p className="hero-description">Connect electronic monitoring devices with a centralized platform designed to help authorized teams review location information, manage alerts, and support supervision workflows.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solutions">Explore solutions <Icon name="arrow" size={18} /></a>
                <a className="button button-quiet" href="#platform"><Icon name="play" size={19} /> See the platform</a>
              </div>
              <div className="hero-points">
                <span><Icon name="check" /> Built for authorized teams</span>
                <span><Icon name="check" /> Device capabilities vary</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-visual-orb" />
              <div className="device-card"><div className="device-caption"><span className="device-caption-dot" /> DEVICE CONCEPT <span>01 / 03</span></div><BraceletIllustration /><div className="device-card-foot"><span>Electronic monitoring device</span><span>Illustrative concept</span></div></div>
              <div className="floating-status"><span className="float-icon"><Icon name="pin" size={18} /></span><span><b>Location context</b><small>Example platform view</small></span><i /></div>
              <div className="visual-note">Product illustration — not an actual Trackin360 device</div>
            </div>
          </div>
          <div className="hero-bottom container"><span>DESIGNED FOR OPERATIONAL CLARITY</span><div><i /> Location context <i /> Device status <i /> Review workflows</div></div>
        </section>

        <section className="intro-strip" aria-label="Platform overview">
          <div className="container intro-grid">
            <p>One connected view<br /><strong>for complex work.</strong></p>
            <span className="intro-divider" />
            <p className="intro-copy">Bring device information, location context, and operational workflows together—while keeping authorized human review at the center.</p>
            <a href="#platform" className="text-link">See the platform <Icon name="arrow" size={17} /></a>
          </div>
        </section>

        <section className="section solutions-section" id="solutions">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> A MORE CONNECTED APPROACH</div><h2>Visibility that helps<br />teams move with clarity.</h2></div>
              <p>Support daily monitoring operations with a connected view of the information that matters. Capabilities depend on the device, configuration, and integration.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((item, index) => (
                <article className="capability-card" key={item.title}>
                  <div className="capability-top"><span className={`capability-icon icon-${index}`}>{item.icon}</span><span className="card-number">0{index + 1}</span></div>
                  <h3>{item.title}</h3><p>{item.description}</p>
                  <span className="capability-tag"><i />{item.tag}</span>
                </article>
              ))}
            </div>
            <p className="section-footnote">Capability labels are illustrative and must be validated against the selected device and deployment.</p>
          </div>
        </section>

        <section className="platform-section" id="platform">
          <div className="container platform-layout">
            <div className="platform-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR OPERATIONAL PICTURE</div>
              <h2>A clearer view.<br /><span>A more considered response.</span></h2>
              <p>Bring location context, device updates, and event review into a single illustrative workspace. Make the information easier to scan—so authorized staff can apply their own judgment and procedures.</p>
              <div className="platform-checks">
                <div><span><Icon name="check" size={16} /></span><p><b>See the overview</b><small>Illustrative fleet and status summaries.</small></p></div>
                <div><span><Icon name="check" size={16} /></span><p><b>Review the context</b><small>Sample location and event information.</small></p></div>
                <div><span><Icon name="check" size={16} /></span><p><b>Keep people in control</b><small>Events support review, never replace it.</small></p></div>
              </div>
              <a className="button button-outline" href="#how-it-works">How it works <Icon name="arrow" size={17} /></a>
            </div>
            <div className="platform-preview">
              <div className="preview-kicker"><span><i /> PLATFORM PREVIEW</span><span>Fictional data · Not live tracking</span></div>
              <DashboardPreview />
              <div className="preview-foot"><Icon name="shield" size={16} /> Concept interface only. Features and data shown are examples, not a representation of a live Trackin360 account.</div>
            </div>
          </div>
        </section>

        <section className="section device-section" id="devices">
          <div className="container device-layout">
            <div className="device-showcase">
              <div className="showcase-grid" />
              <BraceletIllustration />
              <div className="showcase-orbit orbit-one" /><div className="showcase-orbit orbit-two" />
              <span className="showcase-label">ILLUSTRATIVE DEVICE CONCEPT</span>
            </div>
            <div className="device-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> THE DEVICE ECOSYSTEM</div>
              <h2>Hardware that fits<br />your deployment.</h2>
              <p>Electronic monitoring deployments rely on compatible devices, supported networks, and an integration designed for the operating environment. Confirm the specific product and capabilities before procurement or launch.</p>
              <div className="device-specs">
                <div><span className="spec-icon">⌖</span><span><b>Positioning</b><small>Confirm supported technologies</small></span><span className="spec-state">To verify</span></div>
                <div><span className="spec-icon">⌁</span><span><b>Connectivity</b><small>Depends on model and network</small></span><span className="spec-state">To verify</span></div>
                <div><span className="spec-icon">◷</span><span><b>Device details</b><small>Specifications not provided here</small></span><span className="spec-state">To verify</span></div>
              </div>
              <a className="text-link" href="#platform">Explore the platform <Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </section>

        <section className="workflow-section" id="how-it-works">
          <div className="container">
            <div className="workflow-heading">
              <div className="eyebrow"><span className="eyebrow-line" /> FROM DEVICE TO DECISION</div>
              <h2>Designed around a<br />clearer workflow.</h2>
              <p>A conceptual flow for an integrated monitoring deployment. Actual architecture and behavior depend on selected hardware and implementation.</p>
            </div>
            <div className="steps-track">
              {steps.map(([number, title, text], index) => (
                <article className="step" key={number}>
                  <div className="step-marker"><span>{number}</span>{index < steps.length - 1 && <i />}</div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
            <div className="workflow-note"><Icon name="shield" size={18} /><p><b>Context matters.</b> Update frequency and location accuracy vary with hardware, connectivity, configuration, and environment.</p></div>
          </div>
        </section>

        <section className="section usecase-section" id="resources">
          <div className="container">
            <div className="section-heading usecase-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> MADE FOR THE PEOPLE BEHIND THE PROCESS</div><h2>Workflows that respect<br />the human element.</h2></div>
              <p>Technology can help teams organize information. Decisions and responses remain with authorized professionals and established procedures.</p>
            </div>
            <div className="usecase-grid">
              {useCases.map(([title, text], index) => (
                <article className="usecase-card" key={title}>
                  <div className="usecase-number">0{index + 1}</div><span className="usecase-icon">{['◉', '⌂', '▤'][index]}</span>
                  <h3>{title}</h3><p>{text}</p><a href="#how-it-works" aria-label={`Learn how ${title} works`}>How it works <Icon name="arrow" size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="container trust-layout">
            <div className="trust-icon"><Icon name="shield" size={27} /></div>
            <div><div className="eyebrow eyebrow-light">TRUST STARTS WITH TRANSPARENCY</div><h2>Responsible by design.<br /><span>Specifics by deployment.</span></h2></div>
            <div className="trust-copy"><p>Authentication, access permissions, encryption, audit logging, and data retention must be confirmed for the specific implementation. We avoid unverified certifications and security promises.</p><a href="#platform" className="button button-outline">Explore the platform <Icon name="arrow" size={17} /></a></div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line" /> GOOD QUESTIONS, CLEAR ANSWERS</div><h2>Frequently<br />asked questions.</h2>            <p>Exact capabilities are defined by the selected hardware, integration, and deployment.</p><a className="text-link" href="#solutions">Explore capabilities <Icon name="arrow" size={17} /></a></div>
            <div className="faq-list">
              <details><summary>What is an electronic monitoring system?<span>+</span></summary><p>A system that can combine a compatible monitoring device, communication network, and software to support authorized review. Available functions vary by deployment.</p></details>
              <details><summary>How does GPS ankle monitoring work?<span>+</span></summary><p>A compatible device may use GPS or other supported positioning technologies and transmit updates over an available network. Accuracy and update intervals depend on hardware and conditions.</p></details>
              <details><summary>Can authorized personnel review location history?<span>+</span></summary><p>Location history depends on the connected device, platform capabilities, retention settings, and access permissions. Confirm the details for your proposed deployment.</p></details>
              <details><summary>What happens if a device loses connectivity?<span>+</span></summary><p>Offline behavior varies by device and configuration. Confirm how events are recorded, transmitted after reconnection, and presented to authorized users.</p></details>
              <details><summary>Can this platform integrate with existing systems?<span>+</span></summary><p>Integration compatibility has not been confirmed here. APIs, device protocols, and system requirements should be reviewed before making a compatibility decision.</p></details>
              <details><summary>How can I learn more about a deployment?<span>+</span></summary><p>Review the device, platform, and workflow sections on this page. Product capabilities and compatibility should be confirmed for each specific deployment.</p></details>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand"><Brand light /><p>Electronic monitoring solutions<br />for authorized teams.</p><span className="footer-disclaimer">Product capabilities are subject to device, integration, and deployment validation.</span></div>
            <div className="footer-column"><b>Explore</b><a href="#solutions">Solutions</a><a href="#devices">Devices</a><a href="#platform">Platform</a><a href="#how-it-works">How it works</a></div>
            <div className="footer-column"><b>Resources</b><a href="#faq">FAQs</a><a href="#resources">Use cases</a><a href="#how-it-works">How it works</a><a href="https://mgr.trackin360.com/en-us/Home/Index" target="_blank" rel="noreferrer">Login ↗</a></div>
            <div className="footer-column"><b>Learn more</b><p>Explore the monitoring workflow and platform preview.</p><a className="footer-contact-link" href="#platform">Explore the platform <Icon name="arrow" size={15} /></a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Trackin360. All rights reserved.</span><span>Product details should be confirmed for each deployment.</span><span className="footer-concept">Concept landing page</span></div>
        </div>
      </footer>
    </>
  );
}

export default App;
