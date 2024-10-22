document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', function() {
        var fileName = this.files[0] ? this.files[0].name : '';
        var fileNameElement = document.getElementById('file-name-' + this.id);
        if (fileName) {
            fileNameElement.textContent = fileName;
            fileNameElement.style.display = 'inline';
        } else {
            fileNameElement.style.display = 'none'; 
        }
    });
});

document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', function() {
        var file = this.files[0];
        var fileLinkElement = document.getElementById('file-link-' + this.id);

        if (file) {
            // Create an object URL for the file
            var fileURL = URL.createObjectURL(file);

            // Update the anchor tag with the file name and the object URL
            fileLinkElement.textContent = file.name;
            fileLinkElement.href = fileURL;
            fileLinkElement.style.display = 'inline'; // Show the anchor element
        } else {
            // Hide the anchor tag if no file is selected
            fileLinkElement.style.display = 'none';
        }
    });
});