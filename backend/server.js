const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
})

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, './api/data.json'));
})

app.get('/src/main.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/main.js'));
})

app.listen(port, () => {
    console.log(`Success!, this web is available at port: ${port}`);
    console.log("\x1b[32m%s\x1b[0m", `http://localhost:${port}`); //in ra link màu xanh lá trên terminal
    
})