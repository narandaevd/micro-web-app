const express = require('express');
const path =  require('path');
const cors = require('cors');
const favicon = require('express-favicon');

const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
const distDir = path.resolve(__dirname, 'dist');

const app = express();

app.use(favicon(path.resolve(distDir, 'img', 'favicon.png')));
app.use(express.json({extended: true}));
app.use(express.static(distDir));
app.use(cors({ origin: '*', methods: ['GET'], credentials: true }));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(distDir, 'index.html'));
})

app.listen(PORT, LOCAL_ADDRESS, () => {
    console.log("Server listening on port " + PORT)
});