import React, { useState } from 'react';
import boxesData from '../assets/DATA/boxes.json';
import { useCart } from '../hooks/useCart';

const Menu = () => {
    const [menus] = useState(boxesData);

    // Fonction pour obtenir le chemin de l'image
    const getImagePath = (imageName) => {
        try {
            return new URL(`../assets/images/${imageName}.jpg`, import.meta.url).href;
        } catch {
            return '';
        }
    };
    const { addToCart } = useCart();

    return (
        <div className="menu-page">
            <div className="container-fluid px-4 py-5">
                <div className="text-center mb-5 position-relative">
                    <div className="d-inline-block position-relative">
                        <h1 className="display-3 fw-bold mb-2" style={{ letterSpacing: '2px' }}>
                            Nos Menus
                        </h1>
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60%',
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent, #dc3545, transparent)'
                        }}></div>
                    </div>
                    <p className="lead text-muted mt-4">Découvrez notre sélection de boxes préparées avec soin</p>
                </div>
                
                <div className="row g-4 px-md-5">
                    {menus.map((menu, index) => (
                        <div key={menu.id} className="col-md-6 col-xl-4">
                            <div className="menu-card position-relative" style={{
                                background: 'white',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                                transition: 'all 0.3s ease'
                            }}>
                                <div className="position-relative" style={{ overflow: 'hidden' }}>
                                    <img 
                                        src={getImagePath(menu.image)} 
                                        alt={menu.nom}
                                        style={{ 
                                            height: '280px', 
                                            width: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="menu-card-img"
                                    />
                                    <div className="position-absolute top-0 end-0 m-3">
                                                      <span className="badge bg-danger" style={{
                                            fontSize: '1.2rem',
                                            padding: '10px 15px',
                                            borderRadius: '50px',
                                            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'
                                        }}>
                                                          {(menu.prix ?? 0).toFixed(2)} €
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <h5 className="fw-bold mb-0" style={{ fontSize: '1.4rem' }}>{menu.nom}</h5>
                                        <span className="badge bg-dark bg-opacity-10 text-dark" style={{ borderRadius: '20px' }}>
                                            {menu.pieces} pcs
                                        </span>
                                    </div>
                                    {menu.aliments && menu.aliments.length > 0 && (
                                        <div className="mb-3" style={{
                                            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            borderLeft: '3px solid #dc3545'
                                        }}>
                                            <small className="d-block" style={{ lineHeight: '1.6' }}>
                                                {menu.aliments.slice(0, 3).map((aliment, index) => (
                                                    <span key={index}>
                                                        • {aliment.nom}
                                                        {index < Math.min(2, menu.aliments.length - 1) ? ' ' : ''}
                                                        <br />
                                                    </span>
                                                ))}
                                                {menu.aliments.length > 3 && <span className="text-muted fst-italic">Et plus encore...</span>}
                                            </small>
                                        </div>
                                    )}
                                    
                                    <button
                                      className="btn btn-danger w-100"
                                      style={{
                                        borderRadius: '12px',
                                        padding: '12px',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)',
                                        border: 'none',
                                        transition: 'all 0.3s ease'
                                      }}
                                      onClick={() =>
                                        addToCart({
                                          id: menu.id,
                                          nom: menu.nom,
                                          prix: menu.prix || 0,
                                          image: getImagePath(menu.image),
                                          pieces: menu.pieces,
                                        })
                                      }
                                    >
                                      Ajouter au panier
                                    
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;