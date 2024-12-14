// Form validation and thank you message
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    document.getElementById("contactForm").reset();
    document.getElementById("thankYouMessage").classList.remove("hidden");
});

// Optional: Store form data temporarily in localStorage
window.onload = () => {
    const name = localStorage.getItem("name") || "";
    const email = localStorage.getItem("email") || "";
    const message = localStorage.getItem("message") || "";

    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("message").value = message;
};
