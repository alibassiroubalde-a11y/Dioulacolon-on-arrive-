/* =========================================
   SITE DIOULACOLON
   Ali Bassirou Baldé
========================================= */


/* =========================================
   GOOGLE SHEETS
========================================= */

const URL_GOOGLE_SHEETS =
"https://script.google.com/macros/s/AKfycbxVQ47BzkCHn0FgN4L20BFaTue1ihh-nZq2ZmKO6c9kDFp1DC7Fl4arTEXSVZHfMNj8KQ/exec";


/* =========================================
   FORMULAIRE D'ADHÉSION
   GOOGLE SHEETS + WHATSAPP
========================================= */

function envoyerAdhesion(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const village = document.getElementById("village").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const sexe = document.getElementById("sexe").value;
    const age = document.getElementById("age").value;
    const domaine = document.getElementById("domaine").value;
    const message = document.getElementById("message").value.trim();

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


    // =========================================
    // ENVOI VERS GOOGLE SHEETS
    // =========================================

    const googleScriptURL =
        "https://script.google.com/macros/s/AKfycbxVQ47BzkCHn0FgN4L20BFaTue1ihh-nZq2ZmKO6c9kDFp1DC7Fl4arTEXSVZHfMNj8KQ/exec";


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


    // =========================================
    // ENVOI VERS WHATSAPP
    // =========================================

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


    const url =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(texte);


    window.open(url, "_blank");


    // Message de confirmation

    setTimeout(function() {

        alert(
            "✅ Votre adhésion a été enregistrée.\n\n" +
            "Merci pour votre participation."
        );

    }, 1000);

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

const compteur =
    document.getElementById("nombre");


if (compteur) {

    let nombre = 0;

    const objectif = 500;


    const intervalle =
        setInterval(function() {

            nombre++;

            compteur.textContent =
                nombre;


            if (nombre >= objectif) {

                clearInterval(
                    intervalle
                );

            }

        }, 20);

}


/* =========================================
   GALERIE INTERACTIVE
========================================= */

let photosGalerie = [];

let photoActuelle = 0;


/* Récupération des photos */

const imagesGalerie =
    document.querySelectorAll(
        ".galerie img"
    );


imagesGalerie.forEach(
    function(image, index) {

        photosGalerie.push(
            image.src
        );


        image.addEventListener(
            "click",
            function() {

                ouvrirGalerie(index);

            }
        );

    }
);


/* =========================================
   OUVRIR UNE PHOTO
========================================= */

function ouvrirGalerie(index) {

    if (
        photosGalerie.length === 0
    ) {

        return;

    }


    photoActuelle = index;


    const imageGrande =
        document.getElementById(
            "imageGrande"
        );


    const lightbox =
        document.getElementById(
            "lightbox"
        );


    if (
        imageGrande &&
        lightbox
    ) {

        imageGrande.src =
            photosGalerie[
                photoActuelle
            ];


        lightbox.style.display =
            "flex";


        document.body.style.overflow =
            "hidden";

    }

}


/* =========================================
   FERMER LA GALERIE
========================================= */

function fermerGalerie() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    if (lightbox) {

        lightbox.style.display =
            "none";


        document.body.style.overflow =
            "auto";

    }

}


/* =========================================
   PHOTO SUIVANTE
========================================= */

function photoSuivante() {

    if (
        photosGalerie.length === 0
    ) {

        return;

    }


    photoActuelle++;


    if (
        photoActuelle >=
        photosGalerie.length
    ) {

        photoActuelle = 0;

    }


    const imageGrande =
        document.getElementById(
            "imageGrande"
        );


    if (imageGrande) {

        imageGrande.src =
            photosGalerie[
                photoActuelle
            ];

    }

}


/* =========================================
   PHOTO PRÉCÉDENTE
========================================= */

function photoPrecedente() {

    if (
        photosGalerie.length === 0
    ) {

        return;

    }


    photoActuelle--;


    if (photoActuelle < 0) {

        photoActuelle =
            photosGalerie.length - 1;

    }


    const imageGrande =
        document.getElementById(
            "imageGrande"
        );


    if (imageGrande) {

        imageGrande.src =
            photosGalerie[
                photoActuelle
            ];

    }

}


/* =========================================
   TOUCHE ÉCHAP
========================================= */

document.addEventListener(
    "keydown",
    function(event) {


        if (event.key === "Escape") {

            fermerGalerie();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            photoSuivante();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            photoPrecedente();

        }

    }
);
