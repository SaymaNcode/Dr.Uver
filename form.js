document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('zamestnanec_pozicka_button').addEventListener('click', function () {
        document.getElementsByClassName('pozicka_zamestnanec').style.display='none';
        document.getElementsByClassName('pozicka_zivnostnik').style.display='none';
        document.getElementsByClassName('pozicka_dochodca').style.display='none';
    });

    document.getElementById('zivnostnik_pozicka_button').addEventListener('click', function () {
        showForm('pozicka_zivnostnik');
    });

    document.getElementById('dochodca_pozicka_button').addEventListener('click', function () {
        showForm('pozicka_dochodca');
    });
});
