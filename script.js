// Function to simulate a loading process and then redirect to a new page
function discoverMe() {
    const button = document.getElementById("discoverBtn");
    const loadingOverlay = document.getElementById("loadingOverlay");

    // Change button text to 'Loading...' and show the spinner
    button.disabled = true; // Disable the button during loading

    // Show the loading overlay
    loadingOverlay.style.display = "flex";

    // Simulate a delay (e.g., 0.5 seconds) before redirecting
    setTimeout(() => {
        location.href = "http://127.0.0.1:5500/test2.html#main-content"; // Replace with your desired URL
    }, 3000); // Adjust the time as needed (3 seconds here)
}
