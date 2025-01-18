const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors()); // Enable CORS


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Azure SQL Database configuration
const config = {
    user: 'ajaishankar', // Replace with your Azure SQL username
    password: 'Welcome@ENT!', // Replace with your Azure SQL password
    server: 'first-wb-01.database.windows.net', // Replace with your Azure SQL server name
    database: 'First-Website-01', // Replace with your Azure SQL database name
    options: {
        encrypt: true, // Use encryption for Azure SQL
        trustServerCertificate: false, // Change to true for self-signed certificates
    },
};

// Connect to Azure SQL Database
sql.connect(config)
    .then(() => console.log("Connected to Azure SQL Database"))
    .catch((err) => console.error("Database connection failed: ", err));

    // Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

// API endpoint to save user data
app.post('/', async (req, res) => {
    const { username, age } = req.body;

    if (!username || !age) {
        return res.status(400).json({ error: 'Username and age are required' });
    }

    try {
        const request = new sql.Request();
        await request.query(
            `INSERT INTO Users (username, age) VALUES ('${username}', ${age})`
        );
        res.status(200).json({ message: 'User data saved successfully!' });
    } catch (error) {
        console.error("Error saving user data: ", error);
        res.status(500).json({ error: 'Failed to save user data' });
    }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
