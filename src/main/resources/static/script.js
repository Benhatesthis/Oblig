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
    if (epost==0){
        alert("Oppgi eposten din.")
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
}