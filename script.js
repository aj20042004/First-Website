document.getElementById("userForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;

    const response = await fetch('http://localhost:3000/saveUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, age }),
    });

    const result = await response.json();
    document.getElementById("output").textContent = result.message || result.error;
});