import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [raccoonImage, setRaccoonImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch raccoon image from API
  useEffect(() => {
    const fetchRaccoonImage = async () => {
      try {
        const response = await fetch('https://api.racc.lol/v1/raccoon', {
          method: 'GET', // Explicitly specifying GET method
        });

        // Check if the response is OK (status 200)
        if (!response.ok) {
          throw new Error('Error fetching the raccoon image');
        }

        // The API might return a byte array or a binary image data
        const arrayBuffer = await response.arrayBuffer();
        const base64Image = arrayBufferToBase64(arrayBuffer);
        setRaccoonImage(`data:image/png;base64,${base64Image}`);
        setIsLoading(false);  // Stop loading once we have the image
      } catch (error: any) {
        setError(error.message); // Handle the error
        setIsLoading(false);
      }
    };

    fetchRaccoonImage();
  }, []);

  // Function to convert arrayBuffer to Base64
  const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    const binary = String.fromCharCode(...new Uint8Array(buffer));
    return window.btoa(binary);
  };

  return (
    <div className="App">
      <div className="construction-container">
        <h1>🚧 Página en construcción 🚧</h1>
        <p>Estamos trabajando arduamente para poner esta página en funcionamiento. ¡Pronto estará lista!</p>

        {isLoading || raccoonImage == null ? (
          <p>Cargando imagen...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <img
            src={raccoonImage}
            alt="Mapache en construcción"
            className="construction-img"
          />
        )}

        <p>Si necesitas ayuda, puedes <a href="mailto:ranford@raulgarcia.dev">contactarnos</a>.</p>
      </div>
    </div>
  );
}

export default App;

