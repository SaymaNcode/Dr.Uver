document.addEventListener('DOMContentLoaded', function() {
    function showForm(formClass) {
        const forms = ['pozicka_zamestnanec', 'pozicka_zivnostnik', 'pozicka_dochodca'];
        forms.forEach(function(className) {
            const elements = document.getElementsByClassName(className);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = (className === formClass) ? 'block' : 'none';
            }
        });
    }

    document.getElementById('zamestnanec_pozicka_button').addEventListener('click', function () {
        showForm('pozicka_zamestnanec');
    });

    document.getElementById('zivnostnik_pozicka_button').addEventListener('click', function () {
        showForm('pozicka_zivnostnik');
    });

    document.getElementById('dochodca_pozicka_button').addEventListener('click', function () {
        showForm('pozicka_dochodca');
    });
});