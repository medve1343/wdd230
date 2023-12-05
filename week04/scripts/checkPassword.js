function checkPasswordMatch() {
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("passwordConfirmation").value;
    
    if (password !== confirmPassword) {
        document.getElementById("passwordConfirmation").setCustomValidity("Passwords do not match");
    } else {
        document.getElementById("passwordConfirmation").setCustomValidity("");
    }
}