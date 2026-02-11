import { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto pronto!');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contacto">
      <section className="contacto-hero">
        <div className="container">
          <h1>Contáctenos</h1>
          <p>Estamos aquí para ayudarle con sus necesidades de gestión documental</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Ubicación</h3>
              <p>Av. Amazonas N24-03 y Colón</p>
              <p>Edificio Financorp, Piso 12</p>
              <p>Quito, Ecuador 170143</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>info@docuflow.com</p>
              <p>ventas@docuflow.com</p>
              <p>soporte@docuflow.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Teléfono</h3>
              <p>+593 2 234-5678</p>
              <p>+593 2 234-5679 (Ventas)</p>
              <p>+593 99 876-5432 (WhatsApp)</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Horario</h3>
              <p>Lunes - Viernes: 8:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <h2 className="section-title">Envíenos un Mensaje</h2>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su nombre"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="su.email@empresa.com"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de su empresa"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+593 99 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Cuéntenos sobre su proyecto o consulta..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Nuestra Ubicación</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <h3>DocuFlow Systems</h3>
              <p>Av. Amazonas N24-03 y Colón</p>
              <p>Edificio Financorp, Piso 12</p>
              <p>Quito, Ecuador</p>
              <div className="map-coords">
                <p>📍 Coordenadas: -0.1807, -78.4678</p>
              </div>
              <div className="map-directions">
                <h4>Cómo llegar:</h4>
                <ul>
                  <li>🚇 Metro: Estación La Carolina (5 min caminando)</li>
                  <li>🚌 Buses: Líneas que pasan por Av. Amazonas</li>
                  <li>🚗 Estacionamiento disponible en el edificio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offices-section">
        <div className="container">
          <h2 className="section-title">Nuestras Oficinas</h2>
          <div className="offices-grid">
            <div className="office-card">
              <h3>🏢 Oficina Principal</h3>
              <p><strong>Quito - Ecuador</strong></p>
              <p>Av. Amazonas N24-03 y Colón</p>
              <p>Edificio Financorp, Piso 12</p>
              <p className="office-detail">Centro de operaciones y sede administrativa</p>
            </div>
            <div className="office-card">
              <h3>🏢 Centro de Digitalización</h3>
              <p><strong>Quito - Parque Industrial</strong></p>
              <p>Av. Eloy Alfaro y Granados</p>
              <p>Bodega 15-A</p>
              <p className="office-detail">Planta de digitalización masiva</p>
            </div>
            <div className="office-card">
              <h3>🏢 Oficina de Soporte</h3>
              <p><strong>Guayaquil - Ecuador</strong></p>
              <p>Av. Francisco de Orellana</p>
              <p>World Trade Center, Torre B, Piso 8</p>
              <p className="office-detail">Soporte técnico y ventas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-diagram">
        <div className="container">
          <h2 className="section-title">Diagrama de la Empresa</h2>
          <div className="diagram-container">
            <div className="diagram-section">
              <h3>🏛️ Estructura Organizacional</h3>
              <div className="org-structure">
                <div className="dept-box">
                  <h4>Dirección Ejecutiva</h4>
                  <ul>
                    <li>CEO</li>
                    <li>Dirección Estratégica</li>
                    <li>Finanzas</li>
                  </ul>
                </div>
                <div className="dept-box">
                  <h4>Tecnología</h4>
                  <ul>
                    <li>CTO</li>
                    <li>15 Desarrolladores</li>
                    <li>Infraestructura IT</li>
                  </ul>
                </div>
                <div className="dept-box">
                  <h4>Productos</h4>
                  <ul>
                    <li>Product Manager</li>
                    <li>Diseño UX/UI</li>
                    <li>Analistas de Negocio</li>
                  </ul>
                </div>
                <div className="dept-box">
                  <h4>Operaciones</h4>
                  <ul>
                    <li>8 Esp. Digitalización</li>
                    <li>Control de Calidad</li>
                    <li>Gestión de Proyectos</li>
                  </ul>
                </div>
                <div className="dept-box">
                  <h4>Ventas & Marketing</h4>
                  <ul>
                    <li>12 Ejecutivos</li>
                    <li>Marketing Digital</li>
                    <li>Atención al Cliente</li>
                  </ul>
                </div>
                <div className="dept-box">
                  <h4>Soporte</h4>
                  <ul>
                    <li>10 Técnicos</li>
                    <li>Soporte 24/7</li>
                    <li>Capacitación</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="diagram-stats">
              <h3>📊 Datos de la Empresa</h3>
              <div className="stats-boxes">
                <div className="stat-box">
                  <span className="stat-value">50+</span>
                  <span className="stat-label">Empleados</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">3</span>
                  <span className="stat-label">Oficinas</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">500+</span>
                  <span className="stat-label">Clientes</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">6</span>
                  <span className="stat-label">Departamentos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
