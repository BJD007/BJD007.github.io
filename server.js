const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/chat', (req, res) => {
    const { message } = req.body;

    // Append the message to a file (or store it in a database)
    fs.appendFile('messages.txt', `${message}\n`, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json({ message: 'Message received' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
