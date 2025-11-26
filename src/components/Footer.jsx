function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning mb-3">SushiFast</h5>
            <p className="text-light">
              Découvrez l'authenticité de la cuisine japonaise avec nos sushis frais, préparés avec passion et livrés rapidement chez vous.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning mb-3">Liens rapides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Accueil</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Menu</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-light">01 23 45 67 89</span>
              </li>
              <li className="mb-2">
                <span className="text-light">contact@sushifast.fr</span>
              </li>
              <li className="mb-2">
                <span className="text-light">Paris, France</span>
              </li>
            </ul>
            <div className="mt-3">
              <a href="#" className="text-warning me-3 fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-warning me-3 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-warning me-3 fs-4">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12 text-center border-top border-secondary pt-3">
            <p className="mb-0 text-light">
              © 2025 SushiFast. Tous droits réservés. | 
              <a href="#" className="text-warning text-decoration-none ms-2">Mentions légales</a> | 
              <a href="#" className="text-warning text-decoration-none ms-2">CGV</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;