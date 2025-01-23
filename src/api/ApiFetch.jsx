import { useState, useEffect } from "react";
import "./loader.scss";

export default function ApiFetch({ children }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAPOD = async () => {
            try {
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=Sq4YGPqNKZiwGmgTKO44XZ63PLFvDgKCgc96b0SJ&count=20`);
                // Sq4YGPqNKZiwGmgTKO44XZ63PLFvDgKCgc96b0SJ&count=20
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const jsonData = await response.json();
                setData(jsonData);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000); // Attendre au moins 2 secondes avant de masquer le loader
            }
        };

        fetchAPOD();
    }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return <>{data && children(data)}</>;
}