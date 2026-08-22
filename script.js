/* =========================================
   SITE DIOULACOLON
   Ali Bassirou Baldé
========================================= */


/* =========================================
   FORMULAIRE D'ADHÉSION → WHATSAPP
========================================= */

function envoyerAdhesion(event) {

    event.preventDefault();

    // Récupération des informations
    const nom = document.getElementById("nom").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const village = document.getElementById("village").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const sexe = document.getElementById("sexe").value || "Non précisé";
    const age = document.getElementById("age").value || "Non précisé";
    const domaine = document.getElementById("domaine").value || "Non précisé";
    const message = document.getElementById("message").value.trim() || "Aucun message";

    const terrainElement =
        document.querySelector('input[name="terrain"]:checked');

    const terrain = terrainElement
        ? terrainElement.value
        : "Non précisé";

    const benevoleElement =
        document.querySelector('input[name="benevole"]:checked');

    const benevole = benevoleElement
        ? benevoleElement.value
        : "Non précisé";


    /* =========================================
       GOOGLE SHEETS
    ========================================= */

   const googleScriptURL =
    "https://script.google.com/macros/s/AKfycbzHLMGbin51gYuBhYG72K14rmA1GGsJOnMpTrKiqroaRzs80cr5qglbb3In-0lwtecPdw/exec";

    const donnees = {
        nom: nom,
        telephone: telephone,
        village: village,
        profession: profession,
        sexe: sexe,
        age: age,
        domaine: domaine,
        terrain: terrain,
        benevole: benevole,
        message: message
    };


    fetch(googleScriptURL, {

        method: "POST",

        mode: "no-cors",

        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify(donnees)

    });


    /* =========================================
       WHATSAPP
    ========================================= */

    const numero = "221773189802";

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


    const whatsappURL =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(texte);


    // Ouvre WhatsApp
    window.open(whatsappURL, "_blank");


    // Réinitialise le formulaire
    document.getElementById("formAdhesion").reset();

}


/* =========================================
   GALERIE PHOTOS
========================================= */

let photosGalerie = [];
let photoActuelle = 0;

const imagesGalerie =
    document.querySelectorAll(".galerie img");


imagesGalerie.forEach(function(image, index) {

    photosGalerie.push(image.src);

    image.addEventListener("click", function() {

        ouvrirGalerie(index);

    });

});


/* =========================================
   OUVRIR GALERIE
========================================= */

function ouvrirGalerie(index) {

    if (photosGalerie.length === 0) {
        return;
    }

    photoActuelle = index;

    const imageGrande =
        document.getElementById("imageGrande");

    const lightbox =
        document.getElementById("lightbox");

    if (imageGrande && lightbox) {

        imageGrande.src =
            photosGalerie[photoActuelle];

        lightbox.style.display = "flex";

        document.body.style.overflow = "hidden";
    }

}


/* =========================================
   FERMER GALERIE
========================================= */

function fermerGalerie() {

    const lightbox =
        document.getElementById("lightbox");

    if (lightbox) {

        lightbox.style.display = "none";

        document.body.style.overflow = "auto";
    }

}


/* =========================================
   PHOTO SUIVANTE
========================================= */

function photoSuivante() {

    if (photosGalerie.length === 0) {
        return;
    }

    photoActuelle++;

    if (photoActuelle >= photosGalerie.length) {
        photoActuelle = 0;
    }

    const imageGrande =
        document.getElementById("imageGrande");

    if (imageGrande) {

        imageGrande.src =
            photosGalerie[photoActuelle];
    }

}


/* =========================================
   PHOTO PRÉCÉDENTE
========================================= */

function photoPrecedente() {

    if (photosGalerie.length === 0) {
        return;
    }

    photoActuelle--;

    if (photoActuelle < 0) {

        photoActuelle =
            photosGalerie.length - 1;
    }

    const imageGrande =
        document.getElementById("imageGrande");

    if (imageGrande) {

        imageGrande.src =
            photosGalerie[photoActuelle];
    }

}


/* =========================================
   TOUCHE ÉCHAP
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fermerGalerie();
    }

    if (event.key === "ArrowRight") {

        photoSuivante();
    }

    if (event.key === "ArrowLeft") {

        photoPrecedente();
    }

});
