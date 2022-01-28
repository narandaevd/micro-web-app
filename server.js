const express = require('express');
const path =  require('path');
const cors = require('cors');

const PORT = process.env.PORT | 3000;
const distDir = path.resolve(__dirname, 'dist');

const app = express();

app.use(express.json({extended: true}));
app.use(express.static(distDir));
app.use(cors({
    origin: '*',
    methods: ['GET'],
    credentials: true,
}));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(distDir, 'index.html'));
})

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT)
});