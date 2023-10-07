document.getElementById('rotate-ip-button').addEventListener('click', () => {
    // Make a POST request to your Heroku server's endpoint
    fetch('https://rotatepk-a750b8a2f3fb.herokuapp.com/rotate-ip', {
        method: 'POST',
    })
    .then(response => {
        if (response.ok) {
            console.log('ADB commands triggered successfully');
        } else {
            console.error('Failed to trigger ADB commands');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
