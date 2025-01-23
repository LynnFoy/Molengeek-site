# Site-MolenGeek

Créé par: Lynn F
Heure de création: 23 janvier 2025 16:03
Étiquettes: Guides

# Introduction

> Ce projet consiste à une page d'accueil pour le site de MolenGeek, un accélérateur de talents numériques. Le code HTML et CSS fourni gère la structure de la page, l'interface utilisateur, les animations et le design responsif.
> 

---

# Structure du Code

1. HTML - Structure de la page

> Le fichier HTML est divisé en plusieurs sections principales :
> 
> - **En-tête (Header)** : Contient le logo et la barre de navigation principale.
> - **Carrousel** : Un diaporama d'images pour afficher des visuels.
> - **Section "À propos"** : Une présentation de l'organisation.
> - **Formations à venir** : Un menu déroulant avec les dates de formations proposées.
> - **Section "Cefa-X-MolenGeek"** : Une section promotionnelle pour une collaboration spécifique.
> - **Contact** : Un formulaire de contact et une carte Google Maps pour localiser l'organisation.
> - **Partenaires** : Affiche les logos des partenaires de MolenGeek.
> - **Footer** : Contient des informations légales et des liens vers les réseaux sociaux.

---

2. CSS - Styles et mises en forme

### **Réinitialisation et mise en page générale**

- **Global Reset** : On commence par réinitialiser les marges et les paddings à `0` pour éviter les problèmes de style par défaut entre les navigateurs.

### **Header (En-tête)**

- Le header utilise un display : flex pour bien espacer le logo et la navigation.
- Les éléments de la navigation sont disposés en ligne, avec un espace entre chaque élément.

### **Carrousel**

- Le carrousel d'images est conçu avec flex pour disposer les images en ligne et permet de les faire défiler avec une transition fluide.

### **Sections de contenu**

- Chaque section (comme la section "À propos" ou "Formations à venir") a des styles de base comme le padding, l'alignement du texte, et un design propre.

### **Responsivité**

- Le CSS contient des media queries pour rendre le site mobile-friendly. Sur des écrans plus petits, les éléments comme la navigation et les images sont redimensionnés et réorganisés.

### **Fonctionnalités supplémentaires**

### **Menu Hamburger**

- Un bouton de menu mobile (hamburger menu) est utilisé pour afficher la barre de navigation sur les petits écrans ( <768px).

### **Conclusion**

Ce code structure et met en forme une page d'accueil moderne et réactive pour MolenGeek, en combinant des éléments de navigation, des sections informatives, des fonctionnalités interactives (comme le carrousel) et des options de contact, tout en assurant une bonne adaptabilité sur différents appareils.