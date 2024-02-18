// En tom array for å lagre billettinformasjon
let billettArray = [];

// Funksjon for å lagre billettinformasjon når brukeren trykker på en "Kjøp billett" på nettsiden
function billettLagring() {
    // Henter verdier fra inputfeltene i HTML
    let film = document.getElementById("bestilling").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    // Nullstill feilmeldinger på siden, funksjon for nullstilling lages lenger ned i scriptet
    nullstillFeilmeldinger();

    // Valideringsregler for inputfeltene, av type boolean, som returnerer true eller false
    let antallValidering = antall !== "" && !isNaN(antall) && antall > 0;
    let fornavnValidering = fornavn !== "";
    let etternavnValidering = etternavn !== "";
    let telefonnrValidering = telefonnr !== "" && !isNaN(telefonnr) && telefonnr.length === 8;
    let epostpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // epostvalidering fra: https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
    let epostValidering = epostpattern.test(epost);

    // Hvis all input er gyldig, legg til i array, ellers vis feilmeldinger, vi kan gjøre dette på grunn av at de
    // forskjellige valideringene returnerer en boolean, vi vil dermed kun gå videre og legge til i array, skrive ut og
    // tømme inputfeltene hvis all input er riktig
    if (antallValidering && fornavnValidering && etternavnValidering && telefonnrValidering && epostValidering) {
        leggTilIArrayet();
        skrivUtBilletter();
        tommeInputfelt();
    } else {
        // Viser feilmeldinger for hver valideringsregel som ikke er oppfylt
        if (antall === "") {
            document.getElementById("feilAntall").innerText = "Skriv inn antallet billetter";
        } else if (antallValidering === false) {
            document.getElementById("feilAntall").innerText = "Dette er et ugyldig antall";
        } else {
            document.getElementById("feilAntall").innerText = "";
        }
        if (fornavn === "") {
            document.getElementById("feilFornavn").innerText = "Skriv inn fornavnet";
        } else {
            document.getElementById("feilFornavn").innerText = "";
        }
        if (etternavn === "") {
            document.getElementById("feilEtternavn").innerText = "Skriv inn etternavnet";
        } else {
            document.getElementById("feilEtternavn").innerText = "";
        }
        if (telefonnr === "") {
            document.getElementById("feilTlf").innerText = "Skriv inn telefonnummeret";
        } else if (telefonnrValidering === false) {
            document.getElementById("feilTlf").innerText = "Ugyldig telefonnummer, nummeret må ha 8 siffer";
        } else {
            document.getElementById("feilTlf").innerText = "";
        }
        if (epost === "") {
            document.getElementById("feilEpost").innerText = "Skriv inn eposten";
        } else if (!epostValidering) {
            document.getElementById("feilEpost").innerText = "Dette er en ugyldig epost";
        } else {
            document.getElementById("feilEpost").innerText = "";
        }
    }

    // Funksjon for å nullstille feilmeldinger på siden
    function nullstillFeilmeldinger() {
        document.getElementById("feilAntall").innerText = "";
        document.getElementById("feilFornavn").innerText = "";
        document.getElementById("feilEtternavn").innerText = "";
        document.getElementById("feilTlf").innerText = "";
        document.getElementById("feilEpost").innerText = "";
    }

    // Legger til bestilling i arrayet
    function leggTilIArrayet() {
        let nyBestilling = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
        }
        billettArray.push(nyBestilling)
    }

    // Tømmer inputfeltene etter lagring av billett
    function tommeInputfelt() {
        document.getElementById("bestilling").value  = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
    }

    // Skriver ut billetter basert på data i arrayet
    function skrivUtBilletter() {
        let utskrift = "";
        for (let i = 0; i < billettArray.length; i++) {
            let billett = billettArray[i];
            utskrift += "Film: " + billett.film + ", Antall: " + billett.antall + ", Fornavn: " + billett.fornavn + ", Etternavn: " + billett.etternavn + ", " + "Telefonnr: " + billett.telefonnr + ", Epost: " + billett.epost + "<br>";
        }
        document.getElementById("utskriftFilmArray").innerHTML = utskrift;
        console.log(utskrift)
    }
}

// Funksjon for å slette alle billettene fra arrayet, bruker splice for å slette innhold i arrayet
function slettArray() {
    // Tømmer hele arrayet
    billettArray.splice(0, billettArray.length);

    // Funksjon for å skrive ut at arrayet er tomt, vi kunne også bare gjort slik at utskriftFilmArray-listen i HTML
    // sin (document.getElementbyId(utskriftFilmarray).innerHTML = ""), slik at innholdet fjernes fra siden,
    // men velger å skrive ut arrayet i en for-løkke selvom det er tomt, for å vise at arrayet er tomt
    function slettBilletter() {
        let utskriftSlettaArray = "";
        for (let i = 0; i < billettArray.length; i++) {
            let billett = billettArray[i];
            // Legger til hver billetts informasjon til en streng
            utskriftSlettaArray += "Film: " + billett.film + ", Antall: " + billett.antall + ", Fornavn: " + billett.fornavn + ", Etternavn: " + billett.etternavn + ", Telefonnr: " + billett.telefonnr + ", Epost: " + billett.epost + "<br>";

        }
        // Skriver ut strengen på nettsiden
        document.getElementById("utskriftFilmArray").innerHTML = utskriftSlettaArray;
        console.log(utskriftSlettaArray)
    }
    // Kaller funksjonen for å skrive ut tomme billetter
    slettBilletter();
}
