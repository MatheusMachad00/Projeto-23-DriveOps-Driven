import dotenv from 'dotenv';
import app from './app.js';
dotenv.config();
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Servidor funfando na porta: ".concat(PORT));
});
