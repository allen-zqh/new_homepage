function loadContent(file) {
    console.log('Loading content:', file);
    // Load the content from the file.
    if (file != '#') {
        fetch('html/' + file + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-main').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
    }
    // Hide the trace plugin.
    try {
        document.getElementById('trace').style.display = 'none';
    } catch (error) {
        console.log('Trace plugin haven\'t been loaded yet.');
    }
}

function hideTrace() {
    console.log('Hiding trace.');
    // Hide the trace plugin.
    document.getElementById('trace').style.display = 'none';
}

// function showTrace() {
//     console.log('Showing trace.');
//     // Clear the content and toggle display of the trace.
//     loadContent('trace');
//     document.getElementById('trace').style.display = 'flex';
// }

loadContent('home');
