
function envoyerWhatsApp(){

let nom = document.getElementById("nom").value;

let telephone = document.getElementById("telephone").value;

let village = document.getElementById("village").value;

let message = document.getElementById("message").value;


let texte = 
"Nouvelle adhésion%0A%0A" +
"Nom : " + nom + "%0A" +
"Téléphone : " + telephone + "%0A" +
"Village : " + village + "%0A" +
"Message : " + message;


let numero = "221773189802";


let lien = 
"https://wa.me/" + numero + "?text=" + texte;


window.open(lien, "_blank");

}
function envoyerAdhesion(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const telephone = document.getElementById("telephone").value;
    const village = document.getElementById("village").value;
    const profession = document.getElementById("profession").value;
    const sexe = document.getElementById("sexe").value;
    const age = document.getElementById("age").value;
    const domaine = document.getElementById("domaine").value;
    const message = document.getElementById("message").value;

    const terrain =
        document.querySelector('input[name="terrain"]:checked')?.value
        || "Non précisé";

    const benevole =
        document.querySelector('input[name="benevole"]:checked')?.value
        || "Non précisé";

    const texte =
        "📝 NOUVELLE ADHÉSION\n\n" +
        "👤 Nom : " + nom + "\n" +
        "📞 Téléphone : " + telephone + "\n" +
        "📍 Village/Quartier : " + village + "\n" +
        "💼 Profession : " + profession + "\n" +
        "⚧ Sexe : " + sexe + "\n" +
        "🎂 Âge : " + age + "\n" +
        "🤝 Domaine : " + domaine + "\n" +
        "🚶 Activités terrain : " + terrain + "\n" +
        "🙋 Bénévole : " + benevole + "\n" +
        "💬 Message : " + message;

    const numero = "221773189802";

    const url =
        "https://wa.me/" + numero +
        "?text=" + encodeURIComponent(texte);

    window.open(url, "_blank");
}
    let nombre = 0;

let compteur = document.getElementById("nombre");

setInterval(function(){

if(nombre < 500){

nombre++;

compteur.innerHTML = nombre;

}

},20);
    function remonter(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}


function modeSombre(){

document.body.classList.toggle("sombre");

}