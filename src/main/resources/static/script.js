//Oppretter array bilettliste
let bilettliste=[]

//Oppretter fungsjonen kjop og definerer og henter verdier.
function kjop() {
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefon = document.getElementById("telefon").value;
    let epost = document.getElementById("epost").value;

    //Fjerner tidligere error meldinger.
    document.querySelectorAll('.error').forEach((element) => {
        element.innerHTML = '';
    });

    //Oppretter et array for å logføre errorer
    let errors = [];

    /*Sjekker om innput feltene har fått innput og ikke er tomme.
    Om det er positivt anntall biletter, godkjennt nummer med 8 tall eller om det er
    godkjennt innput som riktig oppsett på mail.
    */
    if (!film) {
        errors.push("Du må velge en film.")
        document.getElementById("filmError").innerHTML = errors[errors.length - 1];
    }

    if (antall <= 0) {
        errors.push("Du må fylle inn antall biletter.")
        document.getElementById("antallError").innerHTML = errors[errors.length - 1];
    } else if (!/^\d+$/.test(antall)) {
        errors.push("Antallet må være heltall.")
        document.getElementById("antallError").innerHTML = errors[errors.length - 1];

    }

    if (!fornavn) {
        errors.push("Du må fylle inn fornavn.")
        document.getElementById("fornavnError").innerHTML = errors[errors.length - 1];
    } else if (!/^[a-zA-Z]+$/.test(fornavn)) {
        errors.push("Fornavnet kan bare inneholde bokstaver");
        document.getElementById("fornavnError").innerHTML = errors[errors.length - 1];
    }

    if (!etternavn) {
        errors.push("Du må fylle inn etternavn.")
        document.getElementById("etternavnError").innerHTML = errors[errors.length - 1];
    } else if (!/^[a-zA-Z]+$/.test(etternavn)) {
        errors.push("Etternavn kan bare inneholde bokstaver");
        document.getElementById("etternavnError").innerHTML = errors[errors.length - 1];
    }

    if (!telefon) {
        errors.push("Du må fylle inn telefon nummer.")
        document.getElementById("telefonError").innerHTML = errors[errors.length - 1];
    } else if (!/^\d{8}$/.test(telefon)) {
        errors.push("Telefonnr må bestå av 8 siffer.");
        document.getElementById("telefonError").innerHTML = errors[errors.length - 1];
    }

    if (!epost) {
        errors.push("Du må fylle inn eposten din.");
        document.getElementById("epostError").innerHTML = errors[errors.length - 1];
        return;
        // sjekker om eposten har riktige innput ved hjelp av en metode
    } else if (!validateEmail(epost)) {
        errors.push("Oppgi en gyldig epostadresse.");
        document.getElementById("epostError").innerHTML = errors[errors.length - 1];
    }
    function validateEmail(email) {
        // metode for å sjekke om eposten har riktige innput
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /*
    Sjekker om alle "errors" er borte.
    hvis det er flere errorer returnerer den til start
    og vil ikke skrive ut bilett informasjonen
    */
    if (errors.length > 0) {
        return;
    }
    // oppretter og fyller inn verdiene i bilett
    let bilett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

    //Pusher bilett verdien inn i bilettliste
    bilettliste.push(bilett);

    //Oppretter stringen ut og definerer verdien til blankt.
    let ut = "";

    //Går gjennom bilettliste, legger til verdiene i ut strinngen med passende tekst.
    for (let i of bilettliste) {
        ut += "Film : " + i.film + "<br>" + "Antall : " + i.antall + "<br>" + "Fornavn : " + i.fornavn + "<br>" +
            "Etternavn : " + i.etternavn + "<br>" + "Telefonnr : " + i.telefon + "<br>" + "Epost : " + i.epost + "<br>"+"<br>"
    }
    //Skriver ut verdiene i "ut"
    document.getElementById("utFelt").innerHTML = ut;

    //Tømmer verdiene.
    document.getElementById('film').value="";
    document.getElementById('fornavn').value="";
    document.getElementById('etternavn').value="";
    document.getElementById('telefon').value="";
    document.getElementById('epost').value="";
    document.getElementById('antall').value="";
}

function slett() {
    // Sletter informasjonen i arrayet.
    document.getElementById("utFelt").innerHTML="";
    bilettliste.length=0;
}