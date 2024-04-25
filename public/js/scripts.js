document.getElementById('runButton').addEventListener('click', function() {
    fetch('/runcode')
        .then(response => response.text())
        .then(message => alert(message))
        .catch(error => console.error('Error:', error));
    // fetch('/runcode').requestPictureInPicture().catch(err => {
    //     console.log(err);
    // }
});
document.getElementById('runButton').addEventListener('click', () => {
    fetch('/runcode').requestPictureInPicture().catch(err => {
        console.log(err);
    }
});
