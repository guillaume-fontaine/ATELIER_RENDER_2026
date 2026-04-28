import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Remplacer l'URL ci-dessous par l'URL de votre service web Flask sur Render
    // Exemple : 'https://flask-render-iac-guillaume.onrender.com/data'
    fetch('https://flask-render-iac-guillaume-fontaine.onrender.com/data')
      .then(res => {
        if (!res.ok) {
          throw new Error('Erreur réseau');
        }
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Données de la base de données</h1>
      {error && <p style={{ color: 'red' }}>Erreur: {error}</p>}
      <ul>
        {data.map((item, index) => (
           // On suppose ici que la table test_table a au moins une colonne (par exemple, "id" et "name")
           // Vous devrez adapter cette partie en fonction du schéma de votre table
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
