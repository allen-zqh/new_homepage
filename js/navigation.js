function loadContent(file) {
    // Hide the trace plugin.
    document.getElementById('trace').style.display = 'none';
    // Load the content from the file.
    if (file != '#') {
        fetch('html/' + file + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-main').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
    }
}

function showTrace() {
    // Clear the content and toggle display of the trace.
    document.getElementById('content-main').innerHTML = '';
    document.getElementById('trace').style.display = 'flex';
}

loadContent('home');
