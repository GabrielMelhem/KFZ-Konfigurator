import React, { useEffect, useState } from "react";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Fahrzeuge = () => {
  const [fahrzeuge, setFahrzeuge] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/fahrzeuge`)
      .then((response) => response.json())
      .then((data) => {
        const mappedFahrzeuge = data.map((fahrzeug) => ({
          id: fahrzeug.id,
          modell: fahrzeug.modell,
          marke: fahrzeug.marke,
          preis: fahrzeug.preis,
        }));
        setFahrzeuge(mappedFahrzeuge);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Fahrzeuge:", error)
      );
  }, []);

  const fahrzeugeList = fahrzeuge.map((fahrzeug) => {
    return (
      <div key={fahrzeug.id}>
        <p>{fahrzeug.modell}</p>
        <p>{fahrzeug.marke}</p>
        <p>{fahrzeug.preis}</p>
      </div>
    );
  });

  return (
    <div>
      Fahrzeuge
      {fahrzeugeList}
    </div>
  );
};

export default Fahrzeuge;
