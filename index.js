const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, GitHub Actions!');
});

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
