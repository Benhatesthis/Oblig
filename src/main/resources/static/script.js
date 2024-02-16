let bilettliste=[]

function kjop() {
    let film=document.getElementById("film").value;
    let antall=document.getElementById("antall").value;
    let fornavn=document.getElementById("fornavn").value;
    let etternavn=document.getElementById("etternavn").value;
    let telefon=document.getElementById("telefon").value;
    let epost=document.getElementById("epost").value;

    //Fjerner tidligere error meldinger.
    document.querySelectorAll('.error').forEach((element) => {
        element.innerHTML ='';
    });

    let errors = [];

    if (!fornavn){
        errors.push("Du må fylle inn fornavn i boksen.")
       document.getElementById("fornavnError").innerHTML= errors[errors.length -1];
    }
    if (!etternavn){
        errors.push("Du må fylle inn etternavn boksen.")
        document.getElementById("etternavnError").innerHTML = errors[errors.length -1];
    }
    if (!telefon){
        errors.push("Du må fylle inn telefon boksen.")
        document.getElementById("telefonError").innerHTML = errors[errors.length -1];
    }
    if (!epost){
        alert("Du må fylle inn epost boksen.");
        return;
    }
    if (!validateEmail(epost)) {
        alert("Oppgi en gyldig epostadresse.");
        return;
    }
    if (isNaN(antall)){
        alert("Du må skrive inn antall biletter.")
    }
    if (!film){
        document.getElementById("film").innerHTML="Du må velge en film"
    }

    let bilett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };
    bilettliste.push(bilett);

    let ut="";


    for (let i of bilettliste){
        ut+="Film : "+i.film+"<br>"+"Antall : "+i.antall+"<br>"+"Fornavn : "+i.fornavn+"<br>"+
            "Etternavn : "+i.etternavn+"<br>"+"Telefonnr : "+i.telefon+"<br>"+"Epost : "+i.epost+"<br>"
    }

    document.getElementById("utFelt").innerHTML=ut;
}
// gjør feltene blanke.
document.getElementById('film').value="";
document.getElementById('fornavn').value="";
document.getElementById('etternavn').value="";
document.getElementById('telefon').value="";
document.getElementById('epost').value="";
document.getElementById('antall').value="";


function slett() {
    // Sletter informasjonen i arrayet.
    document.getElementById("utFelt").innerHTML="";
    bilettliste.length=0;
}
function validateEmail(email) {
    // vanlig epost utrykk sjekk.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}