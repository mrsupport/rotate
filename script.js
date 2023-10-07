document.getElementById('rotateIpButton').addEventListener('click', () => {
    fetch('https://rotatepk-a750b8a2f3fb.herokuapp.com/rotate-ip', {
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
