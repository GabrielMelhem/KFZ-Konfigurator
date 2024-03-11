import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";

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

  return (
    <div>
      Fahrzeuge
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fahrzeuge.map((fahrzeug) => (
          <CarCard fahrzeug={fahrzeug} />
        ))}
      </div>
    </div>
  );
};

export default Fahrzeuge;
