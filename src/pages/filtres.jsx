import React, { useState, useMemo } from 'react';
import boxesData from '../assets/DATA/boxes.json';

const Filtres = () => {
    const [selectedMenu, setSelectedMenu] = useState(boxesData[0]?.id || null);

    // Fonction pour obtenir le chemin de l'image
    const getImagePath = (imageName) => {
        try {
            return new URL(`../assets/images/${imageName}.jpg`, import.meta.url).href;
        } catch {
            return '';
        }
    };

    // 1. Menus contenant avocat ou coriandre
    const menusAvecAvocatOuCoriandre = useMemo(() => {
        return boxesData.filter(menu => 
            menu.saveurs?.some(saveur => 
                saveur.toLowerCase().includes('avocat') || 
                saveur.toLowerCase().includes('coriandre')
            )
        );
    }, []);

    // 2. Aliments d'un menu donné
    const alimentsMenuSelectionne = useMemo(() => {
        const menu = boxesData.find(m => m.id === selectedMenu);
        return menu?.aliments || [];
    }, [selectedMenu]);

    // 3. Menus NE contenant PAS "California Saumon Avocat"
    const menusSansCaliforniaSaumonAvocat = useMemo(() => {
        return boxesData.filter(menu => 
            !menu.aliments?.some(aliment => 
                aliment.nom === "California Saumon Avocat"
            )
        );
    }, []);

    // 4. Menu le plus cher et le moins cher
    const menuPlusCher = useMemo(() => {
        return boxesData.reduce((max, menu) => 
            menu.prix > max.prix ? menu : max
        , boxesData[0]);
    }, []);

    const menuMoinsCher = useMemo(() => {
        return boxesData.reduce((min, menu) => 
            menu.prix < min.prix ? menu : min
        , boxesData[0]);
    }, []);

    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-3">Filtres et Statistiques</h1>
                <p className="lead text-muted">Explorez nos menus selon vos critères</p>
            </div>

            {/* 1. Menus avec avocat ou coriandre */}
            <div className="card mb-4 shadow-sm">
                <div className="card-header bg-danger text-white">
                    <h5 className="mb-0">Menus contenant Avocat ou Coriandre</h5>
                </div>
                <div className="card-body">
                    <p className="text-muted mb-3">
                        {menusAvecAvocatOuCoriandre.length} menu(s) trouvé(s)
                    </p>
                    <div className="row g-3">
                        {menusAvecAvocatOuCoriandre.map(menu => (
                            <div key={menu.id} className="col-md-6 col-lg-4">
                                <div className="card h-100">
                                    <img 
                                        src={getImagePath(menu.image)} 
                                        className="card-img-top" 
                                        alt={menu.nom}
                                        style={{ height: '150px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h6 className="card-title">{menu.nom}</h6>
                                        <p className="mb-1"><small>{menu.pieces} pièces</small></p>
                                        <p className="text-danger fw-bold mb-1">{menu.prix.toFixed(2)} €</p>
                                        <p className="mb-0">
                                            <small className="text-muted">
                                                Saveurs: {menu.saveurs?.join(', ')}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Aliments d'un menu donné */}
            <div className="card mb-4 shadow-sm">
                <div className="card-header bg-danger text-white">
                    <h5 className="mb-0">Aliments d'un menu</h5>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label fw-bold">Sélectionnez un menu :</label>
                        <select 
                            className="form-select" 
                            value={selectedMenu} 
                            onChange={(e) => setSelectedMenu(Number(e.target.value))}
                        >
                            {boxesData.map(menu => (
                                <option key={menu.id} value={menu.id}>
                                    {menu.nom} - {menu.prix.toFixed(2)} €
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Aliment</th>
                                    <th>Quantité</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alimentsMenuSelectionne.map((aliment, index) => (
                                    <tr key={index}>
                                        <td>{aliment.nom}</td>
                                        <td>{aliment.quantite}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 3. Menus sans California Saumon Avocat */}
            <div className="card mb-4 shadow-sm">
                <div className="card-header bg-danger text-white">
                    <h5 className="mb-0">Menus sans "California Saumon Avocat"</h5>
                </div>
                <div className="card-body">
                    <p className="text-muted mb-3">
                        {menusSansCaliforniaSaumonAvocat.length} menu(s) trouvé(s)
                    </p>
                    <div className="list-group">
                        {menusSansCaliforniaSaumonAvocat.map(menu => (
                            <div key={menu.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">{menu.nom}</h6>
                                    <small className="text-muted">{menu.pieces} pièces</small>
                                </div>
                                <span className="badge bg-danger rounded-pill">
                                    {menu.prix.toFixed(2)} €
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Menus le plus cher et le moins cher */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm h-100 border-success">
                        <div className="card-header bg-success text-white">
                            <h5 className="mb-0">Menu le moins cher</h5>
                        </div>
                        <div className="card-body text-center">
                            <img 
                                src={getImagePath(menuMoinsCher.image)} 
                                className="img-fluid rounded mb-3" 
                                alt={menuMoinsCher.nom}
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            <h4 className="card-title">{menuMoinsCher.nom}</h4>
                            <p className="text-muted mb-2">{menuMoinsCher.pieces} pièces</p>
                            <h2 className="text-success">{menuMoinsCher.prix.toFixed(2)} €</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm h-100 border-warning">
                        <div className="card-header bg-warning text-dark">
                            <h5 className="mb-0">Menu le plus cher</h5>
                        </div>
                        <div className="card-body text-center">
                            <img 
                                src={getImagePath(menuPlusCher.image)} 
                                className="img-fluid rounded mb-3" 
                                alt={menuPlusCher.nom}
                                style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                            <h4 className="card-title">{menuPlusCher.nom}</h4>
                            <p className="text-muted mb-2">{menuPlusCher.pieces} pièces</p>
                            <h2 className="text-warning">{menuPlusCher.prix.toFixed(2)} €</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filtres;
