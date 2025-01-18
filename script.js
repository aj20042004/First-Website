document.getElementById("submitButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const output = document.getElementById("output");
    
    if (username && age) {
        output.textContent = `Hello, ${username}! You are ${age} years old.`;
    } else {
        output.textContent = "Please enter your name and age.";
    }
});