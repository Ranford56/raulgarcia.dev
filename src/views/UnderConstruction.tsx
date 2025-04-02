import { useEffect, useState } from 'react';

const UnderConstruction = () => {
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

	return(
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🚧 Página en construcción 🚧</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Estamos trabajando arduamente para poner esta página en funcionamiento. ¡Pronto estará lista!
        </p>

        <div className="mb-6">
          {isLoading || raccoonImage == null ? (
            <p className="text-gray-500 dark:text-gray-400">Cargando imagen...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <img
              src={raccoonImage}
              alt="Mapache en construcción"
              className="h-64 w-64 mx-auto rounded-lg object-cover"
            />
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          Si necesitas ayuda, puedes{' '}
          <a
            href="mailto:ranford@raulgarcia.dev"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            contactarnos
          </a>.
        </p>
      </div>
    </div>
	)
}

export default UnderConstruction;
