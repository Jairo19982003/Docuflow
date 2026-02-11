import './Servicios.css';

function Servicios() {
  const digitalizationServices = [
    {
      icon: "📄",
      title: "Digitalización Masiva",
      description: "Conversión de grandes volúmenes de documentos físicos a formato digital",
      features: [
        "Escaneo de alta velocidad (200+ ppm)",
        "Procesamiento de millones de páginas",
        "Control de calidad automatizado",
        "Gestión de proyectos dedicada"
      ]
    },
    {
      icon: "🔍",
      title: "OCR Avanzado",
      description: "Reconocimiento óptico de caracteres con IA para extracción de datos",
      features: [
        "OCR multiidioma (50+ idiomas)",
        "Reconocimiento de escritura manual",
        "Extracción de campos específicos",
        "Validación automática de datos"
      ]
    },
    {
      icon: "📊",
      title: "Indexación Inteligente",
      description: "Clasificación y etiquetado automático de documentos",
      features: [
        "Clasificación con Machine Learning",
        "Extracción de metadatos",
        "Taxonomía personalizable",
        "Búsqueda full-text"
      ]
    },
    {
      icon: "🔐",
      title: "Digitalización Certificada",
      description: "Digitalización con validez legal y cumplimiento normativo",
      features: [
        "Firma digital certificada",
        "Timestamping",
        "Cumplimiento de normativas",
        "Trazabilidad completa"
      ]
    }
  ];

  const serviceProcess = [
    {
      step: 1,
      title: "Consultoría Inicial",
      description: "Análisis de necesidades y planificación del proyecto",
      icon: "💼"
    },
    {
      step: 2,
      title: "Preparación",
      description: "Organización y preparación de documentos físicos",
      icon: "📦"
    },
    {
      step: 3,
      title: "Digitalización",
      description: "Escaneo de alta calidad con equipos profesionales",
      icon: "🖨️"
    },
    {
      step: 4,
      title: "Procesamiento",
      description: "OCR, indexación y extracción de datos",
      icon: "⚙️"
    },
    {
      step: 5,
      title: "Control de Calidad",
      description: "Verificación y validación de resultados",
      icon: "✅"
    },
    {
      step: 6,
      title: "Entrega",
      description: "Migración a sistema de gestión documental",
      icon: "🚀"
    }
  ];

  const packages = [
    {
      name: "Paquete Básico",
      price: "Desde $0.05 por página",
      description: "Ideal para proyectos pequeños",
      features: [
        "Escaneo a 300 dpi",
        "OCR básico",
        "Formato PDF",
        "Soporte por email"
      ],
      highlight: false
    },
    {
      name: "Paquete Profesional",
      price: "Desde $0.08 por página",
      description: "Solución completa para empresas",
      features: [
        "Escaneo hasta 600 dpi",
        "OCR avanzado con IA",
        "Múltiples formatos",
        "Indexación inteligente",
        "Gestión de proyecto",
        "Soporte prioritario"
      ],
      highlight: true
    },
    {
      name: "Paquete Enterprise",
      price: "Cotización personalizada",
      description: "Para grandes volúmenes",
      features: [
        "Todo lo del paquete Profesional",
        "Digitalización certificada",
        "Consultoría especializada",
        "SLA garantizado",
        "Integración personalizada",
        "Soporte 24/7"
      ],
      highlight: false
    }
  ];

  return (
    <div className="servicios">
      <section className="servicios-hero">
        <div className="container">
          <h1>Servicios de Digitalización</h1>
          <p>Transformamos sus archivos físicos en activos digitales</p>
        </div>
      </section>

      <section className="services-intro">
        <div className="container">
          <h2 className="section-title">¿Qué Ofrecemos?</h2>
          <p className="intro-text">
            Nuestro servicio de digitalización de documentos está diseñado para ayudar a las empresas 
            a transformar sus archivos físicos en documentos digitales de alta calidad, organizados y 
            fácilmente accesibles. Utilizamos tecnología de vanguardia y procesos certificados para 
            garantizar la máxima calidad y seguridad.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-grid">
            {digitalizationServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-features">
                  <h4>Incluye:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Nuestro Proceso</h2>
          <div className="process-timeline">
            {serviceProcess.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-step">Paso {item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Paquetes de Servicios</h2>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className={`package-card ${pkg.highlight ? 'highlighted' : ''}`}>
                {pkg.highlight && <div className="popular-badge">Más Popular</div>}
                <h3>{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <p className="package-desc">{pkg.description}</p>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="btn-package">Solicitar Cotización</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Beneficios de la Digitalización</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">💰</span>
              <h3>Ahorro de Espacio</h3>
              <p>Elimine costosos archivos físicos y libere espacio valioso</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <h3>Acceso Instantáneo</h3>
              <p>Encuentre documentos en segundos, no en horas</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🔒</span>
              <h3>Mayor Seguridad</h3>
              <p>Proteja sus documentos de pérdida, daño o robo</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🌱</span>
              <h3>Sostenibilidad</h3>
              <p>Reduzca el uso de papel y su huella de carbono</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🤝</span>
              <h3>Mejor Colaboración</h3>
              <p>Comparta documentos fácilmente entre equipos</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📈</span>
              <h3>Cumplimiento</h3>
              <p>Facilite auditorías y cumplimiento normativo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para digitalizar sus documentos?</h2>
          <p>Contáctenos para una consulta gratuita y cotización personalizada</p>
          <a href="/contacto" className="btn-cta">Solicitar Consulta Gratuita</a>
        </div>
      </section>
    </div>
  );
}

export default Servicios;
