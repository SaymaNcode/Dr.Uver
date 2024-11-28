document.addEventListener('DOMContentLoaded', function() {
    function showForm(formClass, formName, labelType) {
        // Hide all forms
        document.querySelectorAll('.pozicka_zamestnanec, .pozicka_zivnostnik, .pozicka_dochodca, .leasing_zamestnanec, .leasing_zivnostnik, .hypoteka')
            .forEach(function(element) {
                element.style.display = 'none';
            });

        // Show the specific form
        document.querySelectorAll('.' + formClass).forEach(function(element) {
            element.style.display = 'block';
        });

        // Update the title
        document.querySelector('.form-title').textContent = `MÁM ZÁUJEM O ${formName}`;

        // Update the label
        document.getElementById('loanAmountLabel').textContent = `VÝŠKA ${labelType}`;
    }

    document.getElementById('zamestnanec_pozicka_button').addEventListener('click', function () {
        showForm('pozicka_zamestnanec', 'PÔŽIČKU PRE ZAMESTNANCOV', 'PÔŽIČKY');
    });

    document.getElementById('zivnostnik_pozicka_button').addEventListener('click', function () {
        showForm('pozicka_zivnostnik', 'PÔŽIČKU PRE ŽIVNOSTNÍKOV', 'PÔŽIČKY');
    });

    document.getElementById('dochodca_pozicka_button').addEventListener('click', function () {
        showForm('pozicka_dochodca', 'PÔŽIČKU PRE DÔCHODCOV', 'PÔŽIČKY');
    });

    document.getElementById('zamestnanec_leasing_button').addEventListener('click', function () {
        showForm('leasing_zamestnanec', 'LEASING PRE ZAMESTNANCOV', 'LEASINGU');
    });

    document.getElementById('zivnostnik_leasing_button').addEventListener('click', function () {
        showForm('leasing_zivnostnik', 'LEASING PRE ŽIVNOSTNÍKOV', 'LEASINGU');
    });

    document.getElementById('hypotek_but').addEventListener('click', function () {
        showForm('hypoteka', 'HYPOTÉKU', 'HYPOTÉKY');
    });
});