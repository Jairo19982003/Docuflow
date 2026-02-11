import './Equipo.css';

function Equipo() {
  const teamMembers = [
    {
      id: 1,
      name: "María Elena Torres",
      position: "CEO - Chief Executive Officer",
      description: "Lidera la visión estratégica de DocuFlow Systems con más de 15 años de experiencia en transformación digital empresarial.",
      icon: "👩‍💼",
      responsibilities: [
        "Dirección estratégica de la empresa",
        "Gestión de relaciones con inversionistas",
        "Supervisión de objetivos corporativos",
        "Toma de decisiones de alto nivel"
      ]
    },
    {
      id: 2,
      name: "Carlos Andrés Mendoza",
      position: "CTO - Chief Technology Officer",
      description: "Arquitecto principal de nuestras soluciones tecnológicas, especializado en sistemas distribuidos y arquitecturas escalables.",
      icon: "👨‍💻",
      responsibilities: [
        "Supervisión de la arquitectura tecnológica",
        "Innovación y desarrollo de productos",
        "Gestión del equipo técnico",
        "Evaluación de nuevas tecnologías"
      ]
    },
    {
      id: 3,
      name: "Ana Patricia Rodríguez",
      position: "Product Manager",
      description: "Experta en gestión de productos digitales, conectando las necesidades del cliente con soluciones innovadoras.",
      icon: "👩‍💼",
      responsibilities: [
        "Definición de roadmap de productos",
        "Análisis de requisitos del cliente",
        "Coordinación entre equipos técnicos y comerciales",
        "Seguimiento de métricas de producto"
      ]
    },
    {
      id: 4,
      name: "Diego Fernando López",
      position: "Desarrollador Full Stack Senior",
      description: "Desarrollador experto en tecnologías web modernas, con especialización en React, Node.js y arquitecturas cloud.",
      icon: "👨‍💻",
      responsibilities: [
        "Desarrollo de aplicaciones web y móviles",
        "Implementación de APIs y microservicios",
        "Code review y mentoring técnico",
        "Optimización de rendimiento"
      ]
    },
    {
      id: 5,
      name: "Gabriela Sofía Paredes",
      position: "Especialista en Digitalización",
      description: "Líder en procesos de digitalización documental, con expertise en OCR, procesamiento de imágenes y automatización.",
      icon: "👩‍🔬",
      responsibilities: [
        "Gestión de proyectos de digitalización",
        "Implementación de tecnologías OCR/ICR",
        "Optimización de procesos documentales",
        "Capacitación de clientes en digitalización"
      ]
    }
  ];

  return (
    <div className="equipo">
      <section className="equipo-hero">
        <div className="container">
          <h1>Nuestro Equipo</h1>
          <p>Profesionales expertos comprometidos con la excelencia</p>
        </div>
      </section>

      <section className="organigrama">
        <div className="container">
          <h2 className="section-title">Organigrama Empresarial</h2>
          <div className="org-chart">
            <div className="org-level level-1">
              <div className="org-card ceo-card">
                <span className="org-icon">👩‍💼</span>
                <h4>CEO</h4>
                <p>María Elena Torres</p>
              </div>
            </div>
            <div className="org-connector"></div>
            <div className="org-level level-2">
              <div className="org-card">
                <span className="org-icon">👨‍💻</span>
                <h4>CTO</h4>
                <p>Carlos Mendoza</p>
              </div>
              <div className="org-card">
                <span className="org-icon">👩‍💼</span>
                <h4>Product Manager</h4>
                <p>Ana Rodríguez</p>
              </div>
            </div>
            <div className="org-connector"></div>
            <div className="org-level level-3">
              <div className="org-card">
                <span className="org-icon">👨‍💻</span>
                <h4>Full Stack Senior</h4>
                <p>Diego López</p>
              </div>
              <div className="org-card">
                <span className="org-icon">👩‍🔬</span>
                <h4>Esp. Digitalización</h4>
                <p>Gabriela Paredes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-members">
        <div className="container">
          <h2 className="section-title">Conoce a Nuestro Equipo</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-icon">{member.icon}</div>
                <h3>{member.name}</h3>
                <h4 className="position">{member.position}</h4>
                <p className="description">{member.description}</p>
                <div className="responsibilities">
                  <h5>Responsabilidades:</h5>
                  <ul>
                    {member.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-structure">
        <div className="container">
          <h2 className="section-title">Estructura Empresarial</h2>
          <div className="structure-grid">
            <div className="structure-card">
              <h3>🏢 Departamentos</h3>
              <ul>
                <li>Dirección Ejecutiva</li>
                <li>Tecnología e Innovación</li>
                <li>Desarrollo de Productos</li>
                <li>Operaciones y Servicios</li>
                <li>Ventas y Marketing</li>
                <li>Soporte al Cliente</li>
              </ul>
            </div>
            <div className="structure-card">
              <h3>👥 Tamaño del Equipo</h3>
              <ul>
                <li>50+ Empleados</li>
                <li>15 Desarrolladores</li>
                <li>8 Especialistas en Digitalización</li>
                <li>10 Personal de Soporte</li>
                <li>12 Ventas y Marketing</li>
                <li>5 Administración</li>
              </ul>
            </div>
            <div className="structure-card">
              <h3>🎯 Valores Corporativos</h3>
              <ul>
                <li>Innovación Constante</li>
                <li>Excelencia en el Servicio</li>
                <li>Trabajo en Equipo</li>
                <li>Integridad Profesional</li>
                <li>Orientación al Cliente</li>
                <li>Mejora Continua</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Equipo;
