import express from 'express';
import path from 'path';

const PORT = process.env.PORT | 3000;
const distDir = path.resolve(__dirname, 'dist');

const app = express();

app.use(express.json({extended: true}));
app.use(express.static(distDir));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(distDir, 'index.html'));
})

app.listen(PORT, () => console.log("Server listening on port " + PORT));