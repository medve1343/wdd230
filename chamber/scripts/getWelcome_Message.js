// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Get the last visit date from localStorage
    const lastVisit = localStorage.getItem("lastVisit");

    // Get the current date
    const currentDate = new Date();

    if (lastVisit) {
        // Calculate the difference in milliseconds
        const timeDifference = currentDate - new Date(lastVisit);

        // Convert milliseconds to days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        const messageElement = document.querySelector('.welcome-message');
        
        if (daysDifference === 0) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else {
            const pluralize = daysDifference === 1 ? "" : "s";
            messageElement.textContent = "You last visited " + daysDifference + " day" + pluralize + " ago.";
        }
    } else {
        document.querySelector('.welcome-message').textContent = "Welcome! Let us know if you have any questions.";
    }

    // Store the current date in localStorage
    localStorage.setItem("lastVisit", currentDate);
} else {
    // localStorage is not supported
    document.querySelector('.welcome-message').textContent = "Sorry, your browser does not support localStorage.";
}