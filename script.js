/* =========================================
   FORMULAIRE D'ADHÉSION → WHATSAPP
========================================= */

function envoyerAdhesion(event) {

    // Empêche le formulaire de recharger la page
    event.preventDefault();

    // Récupération des informations
    const nom = document.getElementById("nom").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const village = document.getElementById("village").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const sexe = document.getElementById("sexe").value;
    const age = document.getElementById("age").value;
    const domaine = document.getElementById("domaine").value;
    const message = document.getElementById("message").value.trim();

    // Activités de terrain
    const terrainElement =
        document.querySelector('input[name="terrain"]:checked');

    const terrain = terrainElement
        ? terrainElement.value
        : "Non précisé";

    // Bénévole
    const benevoleElement =
        document.querySelector('input[name="benevole"]:checked');

    const benevole = benevoleElement
        ? benevoleElement.value
        : "Non précisé";


    // Numéro WhatsApp qui reçoit les adhésions
    const numero = "221773189802";


    // Message WhatsApp
    const texte =
        "📝 NOUVELLE ADHÉSION\n\n" +

        "👤 Nom et prénom : " + nom + "\n" +

        "📞 Téléphone : " + telephone + "\n" +

        "📍 Village / Quartier : " + village + "\n" +

        "💼 Profession : " + profession + "\n" +

        "⚧ Sexe : " + sexe + "\n" +

        "🎂 Tranche d'âge : " + age + "\n" +

        "🤝 Domaine : " + domaine + "\n" +

        "🚶 Activités de terrain : " + terrain + "\n" +

        "🙋 Bénévole : " + benevole + "\n" +

        "💬 Message : " + message;


    // Création du lien WhatsApp
    const url =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(texte);


    // Ouvre WhatsApp
    window.open(url, "_blank");

}


/* =========================================
   BOUTON RETOUR EN HAUT
========================================= */

function remonter() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   MODE SOMBRE
========================================= */

function modeSombre() {

    document.body.classList.toggle("sombre");

}


/* =========================================
   COMPTEUR
========================================= */

// On vérifie d'abord que le compteur existe
const compteur = document.getElementById("nombre");

if (compteur) {

    let nombre = 0;

    const objectif = 500;

    const intervalle = setInterval(function () {

        if (nombre < objectif) {

            nombre++;

            compteur.textContent = nombre;

        } else {

            clearInterval(intervalle);

        }

    }, 20);

}
