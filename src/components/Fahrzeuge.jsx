import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Fahrzeuge = () => {
  const [fahrzeugeByMarke, setFahrzeugeByMarke] = useState({});

  useEffect(() => {
    fetch(`${apiUrl}/fahrzeuge`)
      .then((response) => response.json())
      .then((data) => {
        // filter out duplicates based on modell, marke, and preis
        const uniqueFahrzeuge = data.reduce((unique, fahrzeug) => {
          const isDuplicate = unique.some(uniqueFahrzeug => 
            uniqueFahrzeug.modell === fahrzeug.modell &&
            uniqueFahrzeug.marke === fahrzeug.marke &&
            uniqueFahrzeug.preis === fahrzeug.preis
          );
          if (!isDuplicate) {
            unique.push(fahrzeug);
          }
          return unique;
        }, []);

        // unique fahrzeuge by marke
        const fahrzeugeOrganizedByMarke = uniqueFahrzeuge.reduce((acc, fahrzeug) => {
          acc[fahrzeug.marke] = acc[fahrzeug.marke] || [];
          acc[fahrzeug.marke].push(fahrzeug);
          return acc;
        }, {});

        setFahrzeugeByMarke(fahrzeugeOrganizedByMarke);
      })
      .catch((error) => console.error("Fehler beim Abrufen von Fahrzeuge:", error));
  }, []);

  return (
    <div>
      Fahrzeuge
      {Object.entries(fahrzeugeByMarke).map(([marke, fahrzeuge]) => (
        <div key={marke}>
          <h2 className="text-xl font-bold my-4 ml-4 text-blue-800">{marke}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {fahrzeuge.map((fahrzeug) => (
              <CarCard key={fahrzeug.id} fahrzeug={fahrzeug} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fahrzeuge;

