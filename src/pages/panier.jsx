import { useState } from 'react';

function Panier() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Votre Panier</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h3 className="text-muted mb-4">Votre panier est vide</h3>
          <p className="text-muted mb-4">
            Ajoutez des délicieux sushis depuis notre menu !
          </p>
          <a href="/menu" className="btn btn-danger btn-lg">
            Voir le Menu
          </a>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {/* Cart Items */}
            <div className="card mb-3">
              <div className="card-body">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                    <div>
                      <h5 className="mb-1">{item.nom}</h5>
                      <p className="text-muted mb-0">{item.pieces} pièces</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="me-3">{item.prix} €</span>
                      <button className="btn btn-sm btn-outline-danger">Retirer</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            {/* Summary */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Récapitulatif</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Sous-total</span>
                  <span>0.00 €</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Livraison</span>
                  <span>2.50 €</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>2.50 €</strong>
                </div>
                <button className="btn btn-danger w-100">
                  Commander
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panier;