// Importation du module Express, qui est un framework pour construire des applications web avec Node.js
const express = require('express');

// Importation du module CORS pour gérer les requêtes cross-origin (entre différentes origines)
const cors = require('cors');

// Importation du module path, qui permet de travailler avec les chemins de fichiers et de dossiers
const path = require('path');

// Création de l'application Express
const app = express();

// Définition du port sur lequel le serveur écoutera les requêtes
const PORT = 5000;

// Ajout du middleware CORS pour permettre les requêtes cross-origin depuis n'importe quelle origine
app.use(cors());

// Ajout du middleware `express.json` pour permettre au serveur de comprendre les requêtes avec un corps JSON
app.use(express.json());

// Définition d'un endpoint API qui renverra le contenu du fichier JSON lorsqu'une requête GET est envoyée à '/api/countries'
app.get('/api/countries', (req, res) => {
  // Construction du chemin absolu vers le fichier 'data.json' dans le même dossier que ce script
  const filePath = path.join(__dirname, 'data.json');

  // Envoi du fichier JSON en réponse à la requête
  res.sendFile(filePath, (err) => {
    if (err) {
      // Gestion des erreurs lors de l'envoi du fichier
      console.error('Error sending file:', err);
      res.status(500).send('Error retrieving data'); // Renvoi d'une erreur 500 si le fichier ne peut pas être envoyé
    }
  });
});

// Démarrage du serveur Express sur le port spécifié
app.listen(PORT, () => {
  // Affichage d'un message dans la console pour indiquer que le serveur est en cours d'exécution
  console.log(`Server running on http://localhost:${PORT}`);
});
