document.getElementById('rotateIpButton').addEventListener('click', () => {
    fetch('/rotate-ip', {
        method: 'POST',
    })
    .then(response => {
        if (response.ok) {
            console.log('IP rotation successful');
        } else {
            console.error('IP rotation failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
