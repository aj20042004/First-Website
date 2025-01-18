document.getElementById("submitButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const output = document.getElementById("output");
    
    if (username) {
        output.textContent = `Hello, ${username}! Welcome!`;
    } else {
        output.textContent = "Please enter your name.";
    }
});