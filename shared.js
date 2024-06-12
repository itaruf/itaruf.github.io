fetch('http://127.0.0.1:8080/index.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('shared-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching shared.html:', error);
    });
