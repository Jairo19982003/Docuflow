import './Productos.css';

function Productos() {
  const features = [
    {
      icon: "📁",
      title: "Gestión Centralizada",
      description: "Almacena y organiza todos tus documentos en un repositorio central seguro y accesible"
    },
    {
      icon: "🔍",
      title: "Búsqueda Inteligente",
      description: "Motor de búsqueda avanzado con OCR para encontrar documentos en segundos"
    },
    {
      icon: "🔐",
      title: "Control de Acceso",
      description: "Gestión granular de permisos y roles para proteger información sensible"
    },
    {
      icon: "📊",
      title: "Flujos de Trabajo",
      description: "Automatiza procesos de aprobación y routing de documentos"
    },
    {
      icon: "📱",
      title: "Multi-plataforma",
      description: "Acceso desde web, móvil y desktop con sincronización en tiempo real"
    },
    {
      icon: "🔄",
      title: "Versionado",
      description: "Control de versiones automático con historial completo de cambios"
    },
    {
      icon: "📧",
      title: "Integración Email",
      description: "Captura automática de documentos desde correo electrónico"
    },
    {
      icon: "☁️",
      title: "Cloud Native",
      description: "Arquitectura cloud escalable con backup automático"
    }
  ];

  const modules = [
    {
      name: "DocuFlow Core",
      description: "Sistema base de gestión documental",
      features: ["Repositorio documental", "Búsqueda y indexación", "Gestión de metadatos", "Control de versiones"],
      price: "Desde $299/mes"
    },
    {
      name: "DocuFlow Workflow",
      description: "Automatización de procesos documentales",
      features: ["Diseñador de flujos", "Reglas de negocio", "Notificaciones automáticas", "Reportes y analytics"],
      price: "Desde $499/mes"
    },
    {
      name: "DocuFlow Enterprise",
      description: "Solución completa para grandes empresas",
      features: ["Todas las funciones", "SSO e integraciones", "Soporte 24/7 prioritario", "Consultoría incluida"],
      price: "Desde $1,299/mes"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Elasticsearch", icon: "🔍" },
    { name: "Redis", icon: "📮" }
  ];

  return (
    <div className="productos">
      <section className="productos-hero">
        <div className="container">
          <h1>Sistema de Gestión Documental</h1>
          <p>Solución integral para la gestión eficiente de documentos empresariales</p>
        </div>
      </section>

      <section className="product-overview">
        <div className="container">
          <h2 className="section-title">DocuFlow DMS - Document Management System</h2>
          <p className="overview-text">
            DocuFlow DMS es una plataforma robusta y escalable que transforma la manera en que las empresas 
            gestionan sus documentos. Desde la captura hasta el archivo, pasando por la colaboración y el 
            cumplimiento normativo, nuestra solución cubre todas las necesidades de gestión documental moderna.
          </p>
          <div className="product-highlights">
            <div className="highlight-item">
              <h3>🎯 100% Cloud</h3>
              <p>Sin infraestructura propia</p>
            </div>
            <div className="highlight-item">
              <h3>⚡ Alto Rendimiento</h3>
              <p>Procesamiento en tiempo real</p>
            </div>
            <div className="highlight-item">
              <h3>🔒 Seguro</h3>
              <p>Encriptación end-to-end</p>
            </div>
            <div className="highlight-item">
              <h3>📈 Escalable</h3>
              <p>Crece con tu negocio</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Características Principales</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modules-section">
        <div className="container">
          <h2 className="section-title">Nuestros Módulos</h2>
          <div className="modules-grid">
            {modules.map((module, index) => (
              <div key={index} className="module-card">
                <h3>{module.name}</h3>
                <p className="module-description">{module.description}</p>
                <ul className="module-features">
                  {module.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
                <div className="module-price">{module.price}</div>
                <button className="btn-module">Solicitar Demo</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title">Stack Tecnológico</h2>
          <p className="tech-intro">Construido con las mejores tecnologías del mercado</p>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Beneficios para tu Empresa</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>⏱️ Ahorro de Tiempo</h3>
              <p>Reduce hasta un 70% el tiempo de búsqueda de documentos</p>
            </div>
            <div className="benefit-card">
              <h3>💰 Reducción de Costos</h3>
              <p>Elimina costos de almacenamiento físico y papel</p>
            </div>
            <div className="benefit-card">
              <h3>✅ Cumplimiento</h3>
              <p>Garantiza el cumplimiento de normativas y auditorías</p>
            </div>
            <div className="benefit-card">
              <h3>🤝 Colaboración</h3>
              <p>Mejora la colaboración entre equipos y departamentos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productos;
