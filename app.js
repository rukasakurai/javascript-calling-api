document.getElementById('helloButton').addEventListener('click', function() {
    fetch('/api/helloFunction')
        .then(response => response.text())
        .then(text => document.getElementById('helloMessage').innerText = text)
        .catch(err => console.error('Error calling the Azure Function:', err));
});
