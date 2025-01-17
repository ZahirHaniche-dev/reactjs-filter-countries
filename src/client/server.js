const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint pour servir les données JSON
app.get('/api/countries', (req, res) => {
  const filePath = path.join(__dirname, 'data.json'); // Assurez-vous que le fichier `data.json` est dans le même dossier
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error retrieving data');
    }
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
