import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>DocuFlow Systems</h3>
          <p>Innovación en gestión documental</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📧 info@docuflow.com</p>
          <p>📱 +593 2 234-5678</p>
        </div>
        <div className="footer-section">
          <h4>Ubicación</h4>
          <p>Quito, Ecuador</p>
          <p>Av. Amazonas N24-03</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 DocuFlow Systems. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
