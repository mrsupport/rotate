document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before attaching the event listener

    // Find the "Rotate IP" button by its ID
    const rotateIpButton = document.getElementById("rotate-ip-button");

    if (rotateIpButton) {
        // If the button exists, attach a click event listener
        rotateIpButton.addEventListener("click", function () {
            // Make a POST request to your Heroku server's endpoint
            fetch("https://rotatepk-a750b8a2f3fb.herokuapp.com/rotate-ip", {
                method: "POST",
            })
                .then((response) => {
                    if (response.ok) {
                        console.log("ADB commands triggered successfully");
                    } else {
                        console.error("Failed to trigger ADB commands");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    } else {
        console.error('Button with id "rotate-ip-button" not found');
    }
});
