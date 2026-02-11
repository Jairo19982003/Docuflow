import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">DocuFlow Systems</h1>
          <p className="hero-subtitle">Transformando la gestión documental empresarial</p>
          <p className="hero-description">
            Somos líderes en soluciones de gestión documental y digitalización,
            ayudando a empresas a optimizar sus procesos documentales con tecnología de vanguardia.
          </p>
          <div className="hero-buttons">
            <a href="/productos" className="btn btn-primary">Nuestros Productos</a>
            <a href="/contacto" className="btn btn-secondary">Contáctanos</a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Innovación Continua</h3>
              <p>Tecnología de última generación para gestión documental eficiente</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Seguridad Garantizada</h3>
              <p>Protección de datos y cumplimiento normativo en todo momento</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Alto Rendimiento</h3>
              <p>Procesamiento rápido de grandes volúmenes documentales</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Soluciones Personalizadas</h3>
              <p>Adaptamos nuestros servicios a las necesidades de tu empresa</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Clientes Satisfechos</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">10M+</h3>
              <p className="stat-label">Documentos Procesados</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">99.9%</h3>
              <p className="stat-label">Uptime Garantizado</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Soporte Técnico</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>¿Listo para transformar tu gestión documental?</h2>
          <p>Contáctanos hoy y descubre cómo podemos ayudarte</p>
          <a href="/contacto" className="btn btn-primary">Solicitar Demo</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
