import sushiImage from '../assets/cuisine-japonaise-sushi-et-sashimi.jpg';

function Home() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-3">Bienvenue chez SushiFast</h1>
          <p className="lead text-muted mb-4">
            Découvrez l'authenticité de la cuisine japonaise avec nos sushis frais, 
            préparés avec passion et livrés rapidement chez vous.
          </p>
          <a href="/menu" className="btn btn-danger btn-lg me-3">
            Voir le Menu
          </a>
          <a href="/contact" className="btn btn-outline-dark btn-lg">
            Nous contacter
          </a>
        </div>
        <div className="col-lg-6 text-center">
          <div className="p-5 bg-light rounded-3">
            <img src={sushiImage} alt="Cuisine japonaise" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="row text-center my-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title">Livraison Rapide</h5>
              <p className="card-text text-muted">
                Livraison en moins de 30 minutes dans toute la ville
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title">Produits Frais</h5>
              <p className="card-text text-muted">
                Poissons sélectionnés quotidiennement pour une fraîcheur optimale
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title">Chef Expérimenté</h5>
              <p className="card-text text-muted">
                Préparés par des chefs formés aux techniques traditionnelles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;