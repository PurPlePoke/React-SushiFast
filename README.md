# SushiFast 

Une application web moderne de vente de sushis en ligne, construite avec **React** et **Vite**.

##  Description

SushiFast est un site e-commerce spécialisé dans la vente de boxes de sushis. L'application offre une expérience utilisateur fluide avec navigation intuitive, gestion de panier complète et système de filtrage avancé.

##  Fonctionnalités

###  Pages Principales
- **Accueil** : Présentation du site avec les points forts (Livraison rapide, Produits frais, Chef expérimenté)
- **Menu** : Affichage des boxes de sushis avec images, prix et composition
- **Filtres & Stats** : 
  - Filtrer les menus par saveurs (avocat, coriandre)
  - Voir la composition détaillée d'un menu
  - Lister les menus sans un ingrédient spécifique
  - Afficher les prix min/max
- **Panier** : Gestion complète du panier (ajout, suppression, modification de quantité)
- **Contact** : Formulaire de contact avec coordonnées

###  Gestion du Panier
- ✅ Ajouter/supprimer des produits
- ✅ Modifier les quantités (+/-)
- ✅ Calcul automatique du sous-total et total
- ✅ Frais de livraison
- ✅ **Persistance avec localStorage** (panier conservé au rechargement)
- ✅ Badge de compteur dans la navbar

###  Design
- Interface moderne et épurée avec **Bootstrap 5**
- Animations fluides (hover effects, transitions)
- Design responsive (mobile, tablette, desktop)
- Logo personnalisé et police élégante (Satisfy)
- Palette de couleurs : Rouge danger (#dc3545) et noir

##  Structure du Projet

```
SushiFast/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navbar avec logo et menu
│   │   └── Footer.jsx          # Pied de page avec infos
│   ├── context/
│   │   ├── CartContext.jsx     # Provider du panier
│   │   └── CartContextOnly.js  # Contexte panier (séparation)
│   ├── hooks/
│   │   └── useCart.js          # Hook pour accéder au panier
│   ├── pages/
│   │   ├── home.jsx            # Page d'accueil
│   │   ├── menu.jsx            # Liste des boxes
│   │   ├── filtres.jsx         # Filtrage avancé
│   │   ├── contact.jsx         # Formulaire contact
│   │   └── panier.jsx          # Panier d'achat
│   ├── assets/
│   │   ├── DATA/
│   │   │   └── boxes.json      # Données des menus
│   │   ├── images/             # Photos des produits
│   │   ├── logo.png            # Logo SushiFast
│   │   └── cuisine-*.jpg       # Images héros
│   ├── App.jsx                 # Composant principal
│   ├── App.css                 # Styles personnalisés
│   ├── index.css               # Styles globaux
│   └── main.jsx                # Entrée de l'app
├── index.html                  # HTML template
├── package.json                # Dépendances
├── vite.config.js              # Config Vite
└── README.md                   # Ce fichier
```

##  Technologies Utilisées

- **React 18+** : Framework UI
- **Vite** : Build tool et dev server ultra-rapide
- **React Router DOM** : Navigation entre pages
- **Bootstrap 5.3.2** : Framework CSS responsive
- **Google Fonts (Satisfy)** : Police élégante
- **localStorage API** : Persistance du panier

##  Installation & Démarrage

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Installation
```bash
cd SushiFast
npm install
```

### Démarrage du serveur de développement
```bash
npm run dev
```
L'application sera accessible à `http://localhost:5173`

### Build pour la production
```bash
npm run build
```

Le dossier `dist/` contient la version optimisée prête à être déployée.

##  Dépendances Principales

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.x.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x.x",
    "vite": "^5.x.x"
  }
}
```

##  Flux du Panier

1. **Ajout au panier** → Clic sur "Ajouter au panier" dans Menu
2. **Sauvegarde** → LocalStorage conserve les données
3. **Consultation** → Page Panier affiche les items + totaux
4. **Modification** → Boutons +/- pour ajuster quantités
5. **Suppression** → Bouton "Retirer" pour chaque item
6. **Validation** → Bouton "Commander" (prêt pour intégration paiement)

##  Persistance des Données

Le panier est automatiquement sauvegardé dans `localStorage` sous la clé `sushifast_cart`. Cela signifie que les articles restent dans le panier même après :
- La fermeture du navigateur
- Le rechargement de la page
- La navigation entre pages

##  Points Clés du Développement

✅ **Gestion d'état centralisée** avec React Context API  
✅ **Hooks personnalisés** pour un code réutilisable  
✅ **Composants modulaires** et maintenables  
✅ **Responsive design** sans breakpoints complexes  
✅ **Performance optimisée** avec Vite et lazy loading  
✅ **Code propre** sans émojis hardcodés  

##  Améliorations Futures

- [ ] Intégration Stripe/PayPal pour paiement
- [ ] Système d'authentification utilisateur
- [ ] Historique des commandes
- [ ] Avis et notations des produits
- [ ] Recommandations personnalisées
- [ ] API backend Node.js/Express
- [ ] Base de données (MongoDB/PostgreSQL)

##  Auteur

Projet développé dans le cadre du cours **R506 - Développement Front Avancé**  
Année : 2024-2025

##  License

Ce projet est fourni à titre éducatif. Tous droits réservés.

---

**Visitez SushiFast et dégustez les meilleurs sushis en ligne ! 🍱**

