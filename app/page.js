const content = {
  az: {
    nav: ['Haqqımızda', 'Xidmətlər', 'Layihələr', 'Əlaqə'],
    heroTitle: 'Etibarlı tikinti və təmir həlləri',
    heroText:
      'TURAN.İ.O MMC 2019-cu ildən yaşayış və qeyri-yaşayış obyektlərinin tikintisi, cari və əsaslı təmiri, həmçinin kommunal kommunikasiya işləri üzrə xidmət göstərir.',
    cta: 'Bizimlə əlaqə',
    aboutTitle: 'Haqqımızda',
    aboutText:
      'Şirkətimiz tikinti prosesinin planlaşdırılmasından təhvil mərhələsinə qədər keyfiyyət, təhlükəsizlik və vaxtında icra prinsipləri ilə çalışır. Məqsədimiz müştərilərə uzunömürlü, funksional və estetik tikinti nəticələri təqdim etməkdir.',
    servicesTitle: 'Xidmətlərimiz',
    services: [
      'Yaşayış binalarının tikintisi',
      'Qeyri-yaşayış obyektlərinin tikintisi',
      'Cari və əsaslı təmir işləri',
      'Kommunal kommunikasiya xətləri',
      'Fasad və dam örtüyü işləri',
      'Daxili və xarici abadlaşdırma'
    ],
    projectsTitle: 'Layihə yanaşmamız',
    projectsText:
      'Hər layihədə ilkin baxış, smeta, texniki planlama, icra və təhvil mərhələləri ardıcıllıqla idarə olunur. Bu yanaşma həm büdcəyə, həm də keyfiyyətə nəzarəti gücləndirir.',
    stats: ['2019-dan fəaliyyət', 'Tikinti və təmir', 'Kommunikasiya işləri'],
    contactTitle: 'Əlaqə',
    address: 'Bakı şəhəri, Nərimanov rayonu',
    phone: '+994 50 123 45 67',
    email: 'info@turanio.az'
  },
  en: {
    nav: ['About', 'Services', 'Projects', 'Contact'],
    heroTitle: 'Reliable construction and renovation solutions',
    heroText:
      'TURAN.İ.O LLC has been operating since 2019, providing construction of residential and non-residential buildings, renovation works, and utility communication services.',
    cta: 'Contact us',
    aboutTitle: 'About us',
    aboutText:
      'Our company works with a focus on quality, safety, and timely delivery from project planning to final handover. Our goal is to provide durable, functional, and aesthetically strong construction results.',
    servicesTitle: 'Our services',
    services: [
      'Residential building construction',
      'Non-residential facility construction',
      'Current and capital renovation works',
      'Utility communication lines',
      'Facade and roofing works',
      'Interior and exterior improvement'
    ],
    projectsTitle: 'Our project approach',
    projectsText:
      'Each project is managed through site assessment, cost estimation, technical planning, execution, and handover stages. This approach improves budget discipline and quality control.',
    stats: ['Operating since 2019', 'Construction & renovation', 'Utility works'],
    contactTitle: 'Contact',
    address: 'Narimanov district, Baku, Azerbaijan',
    phone: '+994 50 123 45 67',
    email: 'info@turanio.az'
  }
};

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  const az = content.az;
  const en = content.en;

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top">TURAN.İ.O</a>
        <nav>
          {az.nav.map((item, index) => (
            <a key={item} href={`#${['about', 'services', 'projects', 'contact'][index]}`}>{item}</a>
          ))}
        </nav>
        <div className="lang">AZ / EN</div>
      </header>

      <section id="top" className="hero">
        <div className="hero-content">
          <p className="badge">TURAN.İ.O MMC · Since 2019</p>
          <h1>{az.heroTitle}</h1>
          <p>{az.heroText}</p>
          <div className="hero-actions">
            <a href="#contact" className="button">{az.cta}</a>
            <a href="#services" className="button secondary">Xidmətlərə bax</a>
          </div>
        </div>
        <div className="hero-card">
          {az.stats.map((stat) => <span key={stat}>{stat}</span>)}
        </div>
      </section>

      <Section id="about" eyebrow="01 / ABOUT" title={az.aboutTitle}>
        <div className="two-col">
          <p>{az.aboutText}</p>
          <p>{en.aboutText}</p>
        </div>
      </Section>

      <Section id="services" eyebrow="02 / SERVICES" title={az.servicesTitle}>
        <div className="cards">
          {az.services.map((service, index) => (
            <article className="card" key={service}>
              <span>0{index + 1}</span>
              <h3>{service}</h3>
              <p>{en.services[index]}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="03 / PROJECTS" title={az.projectsTitle}>
        <div className="project-box">
          <p>{az.projectsText}</p>
          <p>{en.projectsText}</p>
        </div>
      </Section>

      <Section id="contact" eyebrow="04 / CONTACT" title={az.contactTitle}>
        <div className="contact-grid">
          <div>
            <h3>TURAN.İ.O MMC</h3>
            <p>{az.address}</p>
          </div>
          <div>
            <h3>Telefon</h3>
            <p>{az.phone}</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>{az.email}</p>
          </div>
        </div>
      </Section>

      <footer>
        <strong>TURAN.İ.O</strong>
        <span>© 2026. Bütün hüquqlar qorunur.</span>
      </footer>
    </main>
  );
}
