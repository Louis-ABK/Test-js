//Le preventdefaut me permet d'empecher le rechargement de mon formulaire lors de son envois
//C’est une methode qui empeche le comportement par defaut d’un evenement
let formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulaire soumis sans rechargement !");
});

//setTimeout me permet d'execute une fonction apres un delais bien specifique
let timeoutBtn = document.getElementById("timeoutBtn");
timeoutBtn.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Je m'execute apres 4 secondes !!!");
    }, 4000);
});

// le localStorage permet de stoquer de facon persistante les informations
let stockageBtn = document.querySelector("#stockageBtn");
let input = document.querySelector("input");
stockageBtn.addEventListener("click", () => {
    localStorage.setItem("saisie", input.value);
    console.log("L'element saise est "+localStorage.getItem("saisie")+" et il est stoque. (localStorage)");
});
//le sessionStorage permet de stoquer les informations de facon temporaire
let stockageBtn1 = document.querySelector("#stockageBtn1");
stockageBtn1.addEventListener("click", () => {
    let input = document.querySelector("input");
    localStorage.setItem("saisie", input.value);
    console.log("L'element saise est "+localStorage.getItem("saisie")+" et il est stoque. (sessionStorage)");
});

//objet est une collection de paires cle-valeur
let objetBtn = document.getElementById("objetBtn");
objetBtn.addEventListener("click", () => {
    let personne = {
        nom : "Bitegue",
        prenom : "Hans",
        age : 23,
        fonction : "Developpeur",
        description : "Apporter des solutions numeriques conqretes et rendre fier mes formateurs. Signe :"+this.nom+this.prenom+"."
    } 
    console.log("Presentation de "+personne.nom+" dont le but est d'"+personne.description);
});

//la promesse représente une valeur pouvant-etre disponible maintenant, plus tard ou jamais.
let promesseBtn = document.getElementById("promesseBtn");
promesseBtn.addEventListener("click", () => {
    let promesse = new Promise((resolve, reject) => {
        let succes = true;
        if(succes) {
          resolve("Succès !");
        } else {
          reject("Échec !");
        }
    });
      
    promesse.then((message) => {
    console.log(message);
    }).catch((erreur) => {
    console.error(erreur);
    });
})

//fetch nous permet de faire des requetes HTTP asynchrones
let fetchBtn = document.getElementById("fetchBtn")
fetchBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => console.log("Titre : " + data.title))
      .catch(error => console.log("Erreur : " + error));
});

//La programmation asynchrone permet d'exécuter des tâches sans bloquer le reste du programme.
// JSON pour JavaScript Object Notation est un format leger d’echange de donnees, base sur la syntaxe des objets JS.