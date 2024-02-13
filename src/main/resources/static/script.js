let bilettliste=[]

function kjop() {
    let film=document.getElementById("film").value;

    let fornavn=document.getElementById("fornavn").value;
    let etternavn=document.getElementById("etternavn").value;
    let telefon=document.getElementById("telefon").value;
    let epost=document.getElementById("epost").value;

    if (!fornavn){
        alert("Du må fylle inn fornavn boksen.");
    }
    if (!etternavn){
        alert("Du må fylle inn etternavn boksen.");
    }
    if (!telefon){
        alert("Du må fylle inn telefon boksen.");
    }
    if (!epost){
        alert("Du må fylle inn epost boksen.");
        return;
    }
    if (!validateEmail(epost)) {
        alert("Oppgi en gyldig epostadresse.");
        return;
    }
    const tall=(document.getElementById("antall").value);
    if (isNaN(tall)){
        alert("Du må skrive inn antall biletter.")
    }

    const bilett = {
        film: film,
        antall: tall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };
    let ut="";

    bilettliste.push(bilett);

    for (let i of bilettliste){
        ut+="Film : "+i.film+"<br>"+"Antall : "+i.antall+"<br>"+"Fornavn : "+i.fornavn+"<br>"+
            "Etternavn : "+i.etternavn+"<br>"+"Telefonnr : "+i.telefon+"<br>"+"Epost : "+i.epost+"<br>"
    }

    document.getElementById("utFelt").innerHTML=ut;
}
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