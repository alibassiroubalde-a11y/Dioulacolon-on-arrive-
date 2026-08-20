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

    const donnees = {
        nom: document.getElementById("nom").value.trim(),
        telephone: document.getElementById("telephone").value.trim(),
        village: document.getElementById("village").value.trim(),
        profession: document.getElementById("profession").value.trim(),
        sexe: document.getElementById("sexe").value,
        age: document.getElementById("age").value,
        domaine: document.getElementById("domaine").value,
        terrain: document.querySelector('input[name="terrain"]:checked')?.value || "",
        benevole: document.querySelector('input[name="benevole"]:checked')?.value || "",
        message: document.getElementById("message").value.trim()
    };

    const url = "https://script.google.com/macros/s/AKfycbxVQ47BzkCHn0FgN4L20BFaTue1ihh-nZq2ZmKO6c9kDFp1DC7Fl4arTEXSVZHfMNj8KQ/exec";

    fetch(url, {
        method: "POST",
        body: JSON.stringify(donnees)
    })
    .then(function() {

        alert("✅ Adhésion envoyée avec succès !");

        document.getElementById("formAdhesion").reset();

    })
    .catch(function(erreur) {

        console.error(erreur);

        alert("❌ Impossible d'envoyer l'adhésion.");

    });

}

   
    

   
       


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
