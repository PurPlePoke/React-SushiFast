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
        <div className="filtres-page" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', minHeight: '100vh' }}>
            <div className="container py-5">
                <div className="text-center mb-5 position-relative">
                    <div className="d-inline-block position-relative">
                        <h1 className="display-3 fw-bold mb-2" style={{ letterSpacing: '2px' }}>
                            Filtres & Stats
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
                    <p className="lead text-muted mt-4">Explorez nos menus selon vos critères</p>
                </div>

                {/* 1. Menus avec avocat ou coriandre */}
                <div className="mb-5" style={{
                    background: 'white',
                    borderRadius: '25px',
                    padding: '30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    border: '2px solid transparent',
                    backgroundClip: 'padding-box'
                }}>
                    <div className="d-flex align-items-center mb-4" style={{
                        borderBottom: '3px solid #dc3545',
                        paddingBottom: '15px'
                    }}>
                        <div style={{
                            width: '6px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #dc3545 0%, #ff6b6b 100%)',
                            borderRadius: '10px',
                            marginRight: '20px',
                            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)'
                        }}></div>
                        <h4 className="mb-0 fw-bold" style={{ fontSize: '1.8rem' }}>Menus avec Avocat ou Coriandre</h4>
                    </div>
                    <p className="text-muted mb-4" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                        {menusAvecAvocatOuCoriandre.length} menu(s) trouvé(s)
                    </p>
                    <div className="row g-4">
                        {menusAvecAvocatOuCoriandre.map(menu => (
                            <div key={menu.id} className="col-md-6 col-lg-4">
                                <div style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '2px solid #f1f3f5',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }} className="hover-shadow h-100">
                                    <div className="position-relative">
                                        <img 
                                            src={getImagePath(menu.image)} 
                                            alt={menu.nom}
                                            style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                                        />
                                        <div className="position-absolute top-0 end-0 m-2">
                                            <span className="badge bg-danger" style={{ borderRadius: '20px', padding: '8px 12px' }}>
                                                {(menu.prix ?? 0).toFixed(2)} €
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h6 className="fw-bold mb-2">{menu.nom}</h6>
                                        <p className="mb-2"><small className="badge bg-light text-dark">{menu.pieces} pièces</small></p>
                                        <div style={{
                                            background: '#f8f9fa',
                                            padding: '8px',
                                            borderRadius: '10px',
                                            fontSize: '0.85rem'
                                        }}>
                                            <small className="text-muted">Saveurs: {menu.saveurs?.join(', ')}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Aliments d'un menu donné */}
                <div className="mb-5" style={{
                    background: 'white',
                    borderRadius: '25px',
                    padding: '30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                }}>
                    <div className="d-flex align-items-center mb-4" style={{
                        borderBottom: '3px solid #dc3545',
                        paddingBottom: '15px'
                    }}>
                        <div style={{
                            width: '6px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #dc3545 0%, #ff6b6b 100%)',
                            borderRadius: '10px',
                            marginRight: '20px',
                            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)'
                        }}></div>
                        <h4 className="mb-0 fw-bold" style={{ fontSize: '1.8rem' }}>Composition d'un Menu</h4>
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-bold mb-3">Sélectionnez un menu :</label>
                        <select 
                            className="form-select" 
                            value={selectedMenu} 
                            onChange={(e) => setSelectedMenu(Number(e.target.value))}
                            style={{
                                borderRadius: '15px',
                                border: '2px solid #e9ecef',
                                padding: '12px 20px',
                                fontSize: '1rem'
                            }}
                        >
                            {boxesData.map(menu => (
                                <option key={menu.id} value={menu.id}>
                                    {menu.nom} - {(menu.prix ?? 0).toFixed(2)} €
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        borderRadius: '15px',
                        overflow: 'hidden'
                    }}>
                        <table className="table table-hover mb-0">
                            <thead style={{ background: '#dc3545', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '15px', borderRadius: '15px 0 0 0' }}>Aliment</th>
                                    <th style={{ padding: '15px', borderRadius: '0 15px 0 0' }}>Quantité</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alimentsMenuSelectionne.map((aliment, index) => (
                                    <tr key={index}>
                                        <td style={{ padding: '12px 15px' }}>{aliment.nom}</td>
                                        <td style={{ padding: '12px 15px' }}>
                                            <span className="badge bg-danger" style={{ borderRadius: '10px' }}>
                                                {aliment.quantite}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. Menus sans California Saumon Avocat */}
                <div className="mb-5" style={{
                    background: 'white',
                    borderRadius: '25px',
                    padding: '30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                }}>
                    <div className="d-flex align-items-center mb-4" style={{
                        borderBottom: '3px solid #dc3545',
                        paddingBottom: '15px'
                    }}>
                        <div style={{
                            width: '6px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #dc3545 0%, #ff6b6b 100%)',
                            borderRadius: '10px',
                            marginRight: '20px',
                            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)'
                        }}></div>
                        <h4 className="mb-0 fw-bold" style={{ fontSize: '1.8rem' }}>Sans California Saumon Avocat</h4>
                    </div>
                    <p className="text-muted mb-4" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                        {menusSansCaliforniaSaumonAvocat.length} menu(s) trouvé(s)
                    </p>
                    <div className="row g-3">
                        {menusSansCaliforniaSaumonAvocat.map(menu => (
                            <div key={menu.id} className="col-md-6">
                                <div style={{
                                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                    borderRadius: '15px',
                                    padding: '20px',
                                    borderLeft: '5px solid #dc3545',
                                    transition: 'all 0.3s ease'
                                }} className="hover-shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="fw-bold mb-2">{menu.nom}</h6>
                                            <small className="text-muted">{menu.pieces} pièces</small>
                                        </div>
                                        <div style={{
                                            background: '#dc3545',
                                            color: 'white',
                                            padding: '10px 20px',
                                            borderRadius: '25px',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem'
                                        }}>
                                            {(menu.prix ?? 0).toFixed(2)} €
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Menus le plus cher et le moins cher */}
                <div className="row g-4">
                    <div className="col-md-6">
                        <div style={{
                            background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                            borderRadius: '25px',
                            padding: '30px',
                            color: 'white',
                            boxShadow: '0 10px 40px rgba(40, 167, 69, 0.3)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '50%'
                            }}></div>
                            <h5 className="mb-4 fw-bold d-flex align-items-center" style={{ fontSize: '1.5rem', position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(255,255,255,0.3)',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    MIN
                                </div>
                                Menu le moins cher
                            </h5>
                            <div className="text-center position-relative" style={{ zIndex: 1 }}>
                                <img 
                                    src={getImagePath(menuMoinsCher.image)} 
                                    alt={menuMoinsCher.nom}
                                    style={{ 
                                        maxHeight: '220px', 
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                                        marginBottom: '20px'
                                    }}
                                />
                                <h4 className="fw-bold mb-2">{menuMoinsCher.nom}</h4>
                                <p className="mb-3" style={{ opacity: 0.9 }}>{menuMoinsCher.pieces} pièces</p>
                                <div style={{
                                    background: 'white',
                                    color: '#28a745',
                                    display: 'inline-block',
                                    padding: '15px 30px',
                                    borderRadius: '20px',
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.15)'
                                }}>
                                    {(menuMoinsCher.prix ?? 0).toFixed(2)} €
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div style={{
                            background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)',
                            borderRadius: '25px',
                            padding: '30px',
                            color: 'white',
                            boxShadow: '0 10px 40px rgba(255, 193, 7, 0.3)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '50%'
                            }}></div>
                            <h5 className="mb-4 fw-bold d-flex align-items-center" style={{ fontSize: '1.5rem', position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(255,255,255,0.3)',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    MAX
                                </div>
                                Menu le plus cher
                            </h5>
                            <div className="text-center position-relative" style={{ zIndex: 1 }}>
                                <img 
                                    src={getImagePath(menuPlusCher.image)} 
                                    alt={menuPlusCher.nom}
                                    style={{ 
                                        maxHeight: '220px', 
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                                        marginBottom: '20px'
                                    }}
                                />
                                <h4 className="fw-bold mb-2">{menuPlusCher.nom}</h4>
                                <p className="mb-3" style={{ opacity: 0.9 }}>{menuPlusCher.pieces} pièces</p>
                                <div style={{
                                    background: 'white',
                                    color: '#ff9800',
                                    display: 'inline-block',
                                    padding: '15px 30px',
                                    borderRadius: '20px',
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.15)'
                                }}>
                                    {(menuPlusCher.prix ?? 0).toFixed(2)} €
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filtres;
