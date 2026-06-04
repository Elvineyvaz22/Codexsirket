const services = [
  ['Yaşayış binalarının tikintisi', 'Fərdi evlər və yaşayış kompleksləri üzrə tikinti işləri.'],
  ['Qeyri-yaşayış obyektləri', 'Ofis, mağaza, anbar və kommersiya obyektləri üçün həllər.'],
  ['Cari və əsaslı təmir', 'Daxili və xarici təmir işlərinin planlı icrası.'],
  ['Kommunal kommunikasiya', 'Su, kanalizasiya, drenaj və infrastruktur xətləri.']
];

const projects = [
  {
    title: 'Yaşayış layihələri',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85'
  },
  {
    title: 'Kommersiya obyektləri',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85'
  },
  {
    title: 'Tikinti sahəsi və mühəndislik',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85'
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top">TURAN.İ.O</a>
        <nav>
          <a href="#about">Haqqımızda</a>
          <a href="#services">Xidmətlər</a>
          <a href="#projects">Layihələr</a>
          <a href="#contact">Əlaqə</a>
        </nav>
        <a className="header-cta" href="#contact">Təklif al</a>
      </header>

      <section id="top" className="hero hero-full">
        <div className="hero-overlay">
          <p className="label dark">TURAN.İ.O MMC · Since 2019</p>
          <h1>Tikinti, təmir və mühəndislik işlərində etibarlı tərəfdaş</h1>
          <p>
            Yaşayış və qeyri-yaşayış binalarının tikintisi, cari və əsaslı təmir,
            kommunal kommunikasiya və abadlaşdırma işlərini peşəkar şəkildə icra edirik.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#contact">Layihə üçün müraciət et</a>
            <a className="secondary dark-btn" href="#services">Xidmətlərə bax</a>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div><strong>2019</strong><span>fəaliyyətə başlanılıb</span></div>
        <div><strong>4+</strong><span>əsas xidmət istiqaməti</span></div>
        <div><strong>AZ / EN</strong><span>korporativ təqdimat</span></div>
      </section>

      <section id="about" className="section split-section">
        <div className="image-panel about-img"></div>
        <div className="content-panel">
          <p className="label">Haqqımızda / About</p>
          <h2>Keyfiyyət, təhlükəsizlik və vaxtında təhvil</h2>
          <p>
            TURAN.İ.O MMC 2019-cu ildən tikinti və təmir sahəsində fəaliyyət göstərir.
            Şirkət obyektlərin planlaşdırılması, icrası və təhvil mərhələlərində məsuliyyətli
            yanaşma tətbiq edir.
          </p>
          <p>
            TURAN.İ.O LLC provides construction, renovation and utility infrastructure
            services with focus on reliable execution and long-term value.
          </p>
        </div>
      </section>

      <section id="services" className="section soft">
        <div className="section-head centered">
          <p className="label">Xidmətlər / Services</p>
          <h2>Əsas fəaliyyət istiqamətləri</h2>
        </div>
        <div className="service-grid compact">
          {services.map(([title, text], index) => (
            <article className="service-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-head">
          <p className="label">Layihələr / Projects</p>
          <h2>Görünüşü real tikinti sahəsinə yaxın olan layihə təqdimatı</h2>
        </div>
        <div className="project-grid premium">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="project-caption">
                <h3>{project.title}</h3>
                <p>Tikinti və mühəndislik xidmətləri</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section clean-contact">
        <div>
          <p className="label light">Əlaqə / Contact</p>
          <h2>Layihəniz haqqında danışaq</h2>
          <p>
            Tikinti, təmir və kommunikasiya işləri ilə bağlı müraciətinizi göndərin.
            Komandamız sizinlə əlaqə saxlayacaq.
          </p>
        </div>
        <div className="contact-card">
          <p><strong>Ünvan:</strong> Bakı şəhəri, Nərimanov rayonu</p>
          <p><strong>Telefon:</strong> +994 50 123 45 67</p>
          <p><strong>Email:</strong> info@turanio.az</p>
          <a href="tel:+994501234567">Zəng et</a>
        </div>
      </section>

      <footer>
        <strong>TURAN.İ.O</strong>
        <span>© 2026 TURAN.İ.O MMC. Bütün hüquqlar qorunur.</span>
      </footer>
    </main>
  );
}
