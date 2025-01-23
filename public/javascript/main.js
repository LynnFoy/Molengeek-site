//Sélection des éléments du carrousel
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const totalItems = carouselItems.length;

//Fonction pour afficher l'élément actif du carrousel
function showCarouselItem(index) {

    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {

        currentIndex = 0;
    }

    //Calcul du décalage horizontal en pourcentage
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

//Défilement automatique toutes les 3 secondes
setInterval(() => {
    currentIndex++;
    showCarouselItem(currentIndex);
}, 3000);  

//Section partenaires 
let isMouseDown = false;  
const inner = document.querySelector(".inner");
let startX, startY;
let initialRotateX = -25; 
let initialRotateY = 0;    

//Lorsque la souris est pressée , on initialise les valeurs de rotation
document.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
  // Récupérer les rotations actuelles
  initialRotateY = getRotateY();
  initialRotateX = getRotateX();
  document.body.style.cursor = "grabbing";  
});

//Lorsque la souris se déplace , on ajuste les rotations
document.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;  

  //Calcul des différences de position de la souris
  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  //Calcul des nouvelles rotations en fonction du mouvement de la souris
  const newRotateY = initialRotateY + deltaX * 0.3;
  const newRotateX = initialRotateX - deltaY * 0.3;

  //Applique la transformation 3D à l'élément .inner
  inner.style.transform = `perspective(1000px) rotateX(${newRotateX}deg) rotateY(${newRotateY}deg)`;
});

//Lorsque la souris est relâchée, on désactive l'interaction
document.addEventListener("mouseup", () => {
  isMouseDown = false;
  document.body.style.cursor = "default";  
});

//Fonction pour récupérer la rotation actuelle sur l'axe Y
function getRotateY() {
  const transform = getComputedStyle(inner).transform;
  const values = transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];
  return Math.round(Math.atan2(b, a) * (180 / Math.PI));  
}

//Fonction pour récupérer la rotation actuelle sur l'axe X
function getRotateX() {
  const transform = getComputedStyle(inner).transform;
  const values = transform.split("(")[1].split(")")[0].split(",");
  if (values.length > 5) {
    return -25; 
  }
  return -25;  
}

//Fonction pour basculer le burger menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

    









