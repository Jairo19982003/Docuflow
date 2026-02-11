import './Arquitectura.css';

function Arquitectura() {
  return (
    <div className="arquitectura">
      <section className="arquitectura-hero">
        <div className="container">
          <h1>Arquitectura del Sistema</h1>
          <p>Diseño técnico y flujo de procesos de DocuFlow DMS</p>
        </div>
      </section>

      <section className="architecture-overview">
        <div className="container">
          <h2 className="section-title">Arquitectura de Software</h2>
          <p className="arch-intro">
            DocuFlow DMS está construido sobre una arquitectura de microservicios moderna, escalable y resiliente,
            desplegada en la nube para garantizar alta disponibilidad y rendimiento óptimo.
          </p>
        </div>
      </section>

      <section className="architecture-diagram">
        <div className="container">
          <h2 className="section-title">Diagrama de Arquitectura</h2>
          
          <div className="arch-layers">
            {/* Capa de Presentación */}
            <div className="arch-layer presentation-layer">
              <h3>🖥️ Capa de Presentación</h3>
              <div className="layer-components">
                <div className="component">
                  <span className="comp-icon">💻</span>
                  <span>Web App (React)</span>
                </div>
                <div className="component">
                  <span className="comp-icon">📱</span>
                  <span>Mobile App</span>
                </div>
                <div className="component">
                  <span className="comp-icon">🖥️</span>
                  <span>Desktop App</span>
                </div>
              </div>
            </div>

            <div className="arch-arrow">⬇️</div>

            {/* API Gateway */}
            <div className="arch-layer gateway-layer">
              <h3>🚪 API Gateway</h3>
              <div className="layer-components">
                <div className="component">
                  <span className="comp-icon">🔐</span>
                  <span>Autenticación JWT</span>
                </div>
                <div className="component">
                  <span className="comp-icon">🛡️</span>
                  <span>Rate Limiting</span>
                </div>
                <div className="component">
                  <span className="comp-icon">📊</span>
                  <span>Load Balancer</span>
                </div>
              </div>
            </div>

            <div className="arch-arrow">⬇️</div>

            {/* Capa de Servicios */}
            <div className="arch-layer services-layer">
              <h3>⚙️ Capa de Microservicios</h3>
              <div className="services-grid">
                <div className="service-box">
                  <span className="service-icon">📄</span>
                  <p>Document Service</p>
                </div>
                <div className="service-box">
                  <span className="service-icon">👤</span>
                  <p>User Service</p>
                </div>
                <div className="service-box">
                  <span className="service-icon">🔍</span>
                  <p>Search Service</p>
                </div>
                <div className="service-box">
                  <span className="service-icon">🔄</span>
                  <p>Workflow Service</p>
                </div>
                <div className="service-box">
                  <span className="service-icon">📧</span>
                  <p>Notification Service</p>
                </div>
                <div className="service-box">
                  <span className="service-icon">🤖</span>
                  <p>OCR Service</p>
                </div>
              </div>
            </div>

            <div className="arch-arrow">⬇️</div>

            {/* Capa de Datos */}
            <div className="arch-layer data-layer">
              <h3>💾 Capa de Datos</h3>
              <div className="layer-components">
                <div className="component">
                  <span className="comp-icon">🐘</span>
                  <span>PostgreSQL</span>
                </div>
                <div className="component">
                  <span className="comp-icon">🍃</span>
                  <span>MongoDB</span>
                </div>
                <div className="component">
                  <span className="comp-icon">📮</span>
                  <span>Redis Cache</span>
                </div>
                <div className="component">
                  <span className="comp-icon">☁️</span>
                  <span>AWS S3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-flow">
        <div className="container">
          <h2 className="section-title">Flujo de Proceso - Gestión Documental</h2>
          
          <div className="flow-diagram">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-icon">📤</div>
              <h4>Captura</h4>
              <p>El usuario carga documentos vía web, email o escáner</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-icon">🔍</div>
              <h4>Procesamiento OCR</h4>
              <p>Extracción automática de texto e información</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-icon">🏷️</div>
              <h4>Indexación</h4>
              <p>Clasificación y asignación de metadatos</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <div className="step-number">4</div>
              <div className="step-icon">💾</div>
              <h4>Almacenamiento</h4>
              <p>Guardado seguro en repositorio cloud</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <div className="step-number">5</div>
              <div className="step-icon">🔄</div>
              <h4>Workflow</h4>
              <p>Enrutamiento según reglas de negocio</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <div className="step-number">6</div>
              <div className="step-icon">✅</div>
              <h4>Aprobación</h4>
              <p>Revisión y aprobación por usuarios autorizados</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <div className="step-number">7</div>
              <div className="step-icon">📁</div>
              <h4>Archivo</h4>
              <p>Archivo permanente con retención configurable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-details">
        <div className="container">
          <h2 className="section-title">Detalles Técnicos</h2>
          <div className="tech-cards">
            <div className="tech-card">
              <h3>🏗️ Arquitectura</h3>
              <ul>
                <li>Microservicios con Docker</li>
                <li>Kubernetes para orquestación</li>
                <li>Event-Driven Architecture</li>
                <li>CQRS Pattern</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>🔒 Seguridad</h3>
              <ul>
                <li>Autenticación JWT/OAuth2</li>
                <li>Encriptación AES-256</li>
                <li>SSL/TLS en tránsito</li>
                <li>RBAC (Role-Based Access Control)</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>📊 Escalabilidad</h3>
              <ul>
                <li>Auto-scaling horizontal</li>
                <li>CDN para contenido estático</li>
                <li>Cache distribuido con Redis</li>
                <li>Load balancing inteligente</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>🔄 Integración</h3>
              <ul>
                <li>RESTful APIs</li>
                <li>GraphQL endpoint</li>
                <li>Webhooks</li>
                <li>Message Queue (RabbitMQ)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="deployment">
        <div className="container">
          <h2 className="section-title">Infraestructura de Despliegue</h2>
          <div className="deployment-diagram">
            <div className="deploy-zone">
              <h3>☁️ AWS Cloud</h3>
              <div className="deploy-items">
                <div className="deploy-item">ECS/EKS Cluster</div>
                <div className="deploy-item">RDS PostgreSQL</div>
                <div className="deploy-item">S3 Buckets</div>
                <div className="deploy-item">CloudFront CDN</div>
                <div className="deploy-item">Route 53 DNS</div>
                <div className="deploy-item">CloudWatch Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Arquitectura;
