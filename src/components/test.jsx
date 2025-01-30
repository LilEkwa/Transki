import { useState } from 'react';

const Test = () => {
  const [progress, setProgress] = useState(0); // État pour suivre la progression
  const [isUploading, setIsUploading] = useState(false); // État pour vérifier si l'upload est en cours

  // Fonction pour simuler l'upload d'un fichier
  const simulateFileUpload = async () => {
    setIsUploading(true);
    setProgress(0);

    // Simulation d'un téléchargement avec un délai
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prevProgress + 10; // Augmente la progression de 10% à chaque intervalle
      });
    }, 500); // Intervalle de 500ms
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Upload de fichier</h2>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={simulateFileUpload}
          disabled={isUploading}
          style={{
            padding: '10px 20px',
            backgroundColor: isUploading ? '#ccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: isUploading ? 'not-allowed' : 'pointer',
          }}
        >
          {isUploading ? 'Upload en cours...' : 'Téléverser un fichier'}
        </button>
      </div>

      {/* Barre de progression */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#e9ecef',
          borderRadius: '5px',
          overflow: 'hidden',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '20px',
            backgroundColor: '#007bff',
            transition: 'width 0.3s ease',
          }}
        ></div>
      </div>

      {/* Affichage du pourcentage de progression */}
      <div style={{ textAlign: 'center', color: '#666' }}>
        {progress}% complété
      </div>
    </div>
  );
};

export default Test;