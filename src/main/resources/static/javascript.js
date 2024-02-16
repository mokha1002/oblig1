let billettArray = [];

function billettLagring() {
    film = document.getElementById("bestilling").value;
    antall = document.getElementById("antall").value;
    fornavn = document.getElementById("fornavn").value;
    etternavn = document.getElementById("etternavn").value;
    telefonnr = document.getElementById("telefonnr").value;
    epost = document.getElementById("epost").value;

    nullstillFeilmeldinger();

    let antallValidering = antall !== "" && !isNaN(antall) && antall > 0;
    let fornavnValidering = fornavn !== "";
    let etternavnValidering = etternavn !== "";
    let telefonnrValidering = telefonnr !== "" && !isNaN(telefonnr) && telefonnr.length === 8;
    let epostpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let epostValidering = epostpattern.test(epost);


    if (antallValidering && fornavnValidering && etternavnValidering && telefonnrValidering && epostValidering) {
        leggTilIArrayet();
        skrivUtBilletter();
        tommeInputfelt();
    } else {
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

    function nullstillFeilmeldinger() {
        document.getElementById("feilAntall").innerText = "";
        document.getElementById("feilAntall").style.color = "red";
        document.getElementById("feilFornavn").innerText = "";
        document.getElementById("feilFornavn").style.color = "red";
        document.getElementById("feilEtternavn").innerText = "";
        document.getElementById("feilEtternavn").style.color = "red";
        document.getElementById("feilTlf").innerText = "";
        document.getElementById("feilTlf").style.color = "red";
        document.getElementById("feilEpost").innerText = "";
        document.getElementById("feilEpost").style.color = "red";
    }


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

    function tommeInputfelt() {
        document.getElementById("bestilling").val;
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
    }

    function skrivUtBilletter() {
        let utskrift = "";
        for (let i = 0; i < billettArray.length; i++) {
            let billett = billettArray[i];
            utskrift += `Film: ${billett.film}, Antall: ${billett.antall}, Fornavn: ${billett.fornavn}, Etternavn: ${billett.etternavn}, Telefonnr: ${billett.telefonnr}, Epost: ${billett.epost}<br>`;
        }
        document.getElementById("utskriftFilmArray").innerHTML = utskrift;
        console.log(utskrift)
    }
}

function slettArray() {
    billettArray.splice(0, billettArray.length);

    function slettBilletter() {
        let utskrif = "";
        for (let i = 0; i < billettArray.length; i++) {
            let billett = billettArray[i];
            utskrif += `Film: ${billett.film}, Antall: ${billett.antall}, Fornavn: ${billett.fornavn}, Etternavn: ${billett.etternavn}, Telefonnr: ${billett.telefonnr}, Epost: ${billett.epost}<br>`;
        }
        document.getElementById("utskriftFilmArray").innerHTML = utskrif;
        console.log(utskrif)
    }
    slettBilletter();
}