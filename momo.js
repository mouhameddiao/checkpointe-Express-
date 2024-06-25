// app.js
const express = require('express');
const path = require('path');
const workingHours = require('./middleware/workingHours');

const app = express();

// Définir le moteur de modèles
app.set('view engine', 'ejs');

// Définir le dossier des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Utiliser le middleware pour vérifier les heures de travail
app.use(workingHours);

// Définir les routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
