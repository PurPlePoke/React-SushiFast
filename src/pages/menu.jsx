import React, { useState } from 'react';
import boxesData from '../assets/DATA/boxes.json';

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

    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-3">Nos Menus</h1>
                <p className="lead text-muted">Découvrez notre sélection de boxes préparées avec soin</p>
            </div>
            
            <div className="row g-4">
                {menus.map((menu) => (
                    <div key={menu.id} className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0 hover-shadow">
                            <img 
                                src={getImagePath(menu.image)} 
                                className="card-img-top" 
                                alt={menu.nom}
                                style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{menu.nom}</h5>
                                <p className="text-muted mb-2">
                                    <small>{menu.pieces} pièces</small>
                                </p>
                                {menu.aliments && menu.aliments.length > 0 && (
                                    <div className="mb-3">
                                        <small className="text-muted">
                                            {menu.aliments.slice(0, 3).map((aliment, index) => (
                                                <span key={index}>
                                                    {aliment.nom}
                                                    {index < Math.min(2, menu.aliments.length - 1) ? ', ' : ''}
                                                </span>
                                            ))}
                                            {menu.aliments.length > 3 && '...'}
                                        </small>
                                    </div>
                                )}
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="h4 mb-0 text-danger">{menu.prix.toFixed(2)} €</span>
                                    <button className="btn btn-danger">
                                        Ajouter au panier
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;