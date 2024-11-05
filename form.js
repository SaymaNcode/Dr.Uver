function form_function() {
document.getElementById('zamestnanec_pozicka_button').addEventListener('click', function () {
    // Hide Form 2 and show Form 1
    document.getElementsByClassName('poz_zivnostnik').style.display = 'none';
    document.getElementsByClassName('poz_zamestnanec').style.display = 'block';
});

document.getElementById('zivnostnik_pozicka_button').addEventListener('click', function () {
    // Hide Form 1 and show Form 2
    document.getElementsByClassName('poz_zamestnanec').style.display = 'none';
    document.getElementsByClassName('poz_zivnostnik').style.display = 'block';
});
} 