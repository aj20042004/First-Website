document.getElementById("userForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;

    try {
        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, age }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'An unknown error occurred');
        }

        const result = await response.json();
        document.getElementById("output").textContent = result.message || 'User data saved successfully!';
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("output").textContent = `Error: ${error.message}`;
    }
});