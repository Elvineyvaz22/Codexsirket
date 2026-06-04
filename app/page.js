const services = [
  ['Yaşayış binalarının tikintisi', 'Residential building construction'],
  ['Qeyri-yaşayış obyektləri', 'Commercial and non-residential facilities'],
  ['Cari və əsaslı təmir', 'Current and capital renovation works'],
  ['Kommunal kommunikasiya', 'Utility communication and infrastructure lines'],
  ['Fasad və dam örtüyü', 'Facade, roofing and exterior works'],
  ['Abadlaşdırma işləri', 'Interior and exterior improvement works']
];

const steps = [
  ['İlkin baxış', 'Obyekt və texniki tələblər qiymətləndirilir.'],
  ['Planlama', 'Smeta, iş qrafiki və icra mərhələləri hazırlanır.'],
  ['İcra', 'Tikinti və təmir işləri nəzarətli şəkildə aparılır.'],
  ['Təhvil', 'Layihə yekun yoxlamadan sonra təhvil verilir.']
];

const projects = [
  {
    title: 'Yaşayış obyektləri',
    text: 'Müasir yaşayış binaları və fərdi evlər üzrə tikinti işləri.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'Kommersiya binaları',
    text: 'Ofis, mağaza və qeyri-yaşayış obyektləri üçün tikinti həlləri.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'Mühəndislik işləri',
    text: 'Kommunal kommunikasiya, sahə planlama və infrastruktur işləri.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85'
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
          <a href="#process">İş prosesi</a>
          <a href="#contact">Əlaqə</a>
        </nav>
        <a className="header-cta" href="#contact">Təklif al</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-text">
          <p className="label">TURAN.İ.O MMC · 2019-cu ildən</p>
          <h1>Etibarlı tikinti və mühəndislik həlləri</h1>
          <p>
            Yaşayış və qeyri-yaşayış binalarının tikintisi, cari və əsaslı təmir,
            kommunal kommunikasiya və abadlaşdırma işləri üzrə peşəkar xidmət.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#contact">Bizimlə əlaqə</a>
            <a className="secondary" href="#services">Xidmətlərə bax</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-card"></div>
          <div className="stats-card">
            <strong>2019</strong>
            <span>fəaliyyətə başlanılıb</span>
          </div>
        </div>
      </section>

      <section id="about" className="section about-grid">
        <div>
          <p className="label">Haqqımızda / About</p>
          <h2>Layihələrdə keyfiyyət, təhlükəsizlik və vaxtında təhvil prinsipi</h2>
        </div>
        <div className="text-block">
          <p>
            TURAN.İ.O MMC 2019-cu ildən tikinti və təmir sahəsində fəaliyyət göstərir.
            Şirkət yaşayış, qeyri-yaşayış obyektləri, təmir və kommunal kommunikasiya
            işlərini planlı və məsuliyyətli şəkildə icra edir.
          </p>
          <p>
            TURAN.İ.O LLC has been operating since 2019, delivering construction,
            renovation and utility infrastructure solutions with a focus on quality,
            safety and timely project completion.
          </p>
        </div>
      </section>

      <section id="services" className="section soft">
        <div className="section-head">
          <p className="label">Xidmətlər / Services</p>
          <h2>Gördüyümüz əsas işlər</h2>
        </div>
        <div className="service-grid">
          {services.map(([az, en], index) => (
            <article className="service-card" key={az}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{az}</h3>
              <p>{en}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-head">
          <p className="label">Layihələr / Projects</p>
          <h2>Tikinti və mühəndislik istiqamətlərimiz</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section">
        <div className="section-head narrow">
          <p className="label">İş prosesi / Process</p>
          <h2>Layihəni başlanğıcdan təhvilə qədər idarə edirik</h2>
        </div>
        <div className="process-grid">
          {steps.map(([title, text], index) => (
            <div className="process-item" key={title}>
              <b>{index + 1}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="label light">Əlaqə / Contact</p>
          <h2>Layihəniz üçün ilkin təklif alın</h2>
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
