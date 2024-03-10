import React, { useEffect, useState } from "react";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Lackierung = () => {
  const [lackierung, setLackierung] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/lackierungen`)
      .then((response) => response.json())
      .then((data) => {
        const mappedLackierung = data.map((lackierung) => ({
          id: lackierung.id,
          farbe: lackierung.farbe,
          preis: lackierung.preis,
        }));
        setLackierung(mappedLackierung);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Lackierung:", error)
      );
  }, []);

  const lackierungList = lackierung.map((lackierung) => {
    return (
      <div key={lackierung.id}>
        <p>{lackierung.farbe}</p>
        <p>{lackierung.preis}</p>
      </div>
    );
  });

  return (
    <div>
      Lackierung
      {lackierungList}
    </div>
  );
};

export default Lackierung;
