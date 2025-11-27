import { useCart } from '../hooks/useCart';

function Panier() {
  const { items, increment, decrement, removeFromCart, subtotal, clearCart } = useCart();
  const delivery = items.length > 0 ? 2.5 : 0;
  const total = subtotal + delivery;

  return (
    <div className="container my-5">
      <h1 className="mb-4">Votre Panier</h1>
      
      {items.length === 0 ? (
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
                {items.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                    <div className="d-flex align-items-center">
                      {item.image && (
                        <img src={item.image} alt={item.nom} style={{ width: 80, height: 60, objectFit: 'cover' }} className="rounded me-3" />
                      )}
                      <div>
                        <h5 className="mb-1">{item.nom}</h5>
                        {item.pieces ? <p className="text-muted mb-0">{item.pieces} pièces</p> : null}
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="input-group input-group-sm me-3" style={{ width: 120 }}>
                        <button className="btn btn-outline-secondary" onClick={() => decrement(item.id)}>-</button>
                        <input className="form-control text-center" readOnly value={item.qty} />
                        <button className="btn btn-outline-secondary" onClick={() => increment(item.id)}>+</button>
                      </div>
                      <span className="me-3 fw-bold">{(item.prix * item.qty).toFixed(2)} €</span>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>Retirer</button>
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
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Livraison</span>
                  <span>{delivery.toFixed(2)} €</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>{total.toFixed(2)} €</strong>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-danger">Commander</button>
                  <button className="btn btn-outline-secondary" onClick={clearCart}>Vider le panier</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panier;