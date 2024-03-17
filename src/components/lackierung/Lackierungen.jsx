import React, { useContext, useEffect, useState } from "react";
import { BestellungContext } from '../../context/BestellungContext';
import LackierungenCard from "./LackierungenCard";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Lackierungen = ({ selectedFahrzeug }) => {
  const [lackierungen, setLackierungen] = useState([]);
  const { bestellung, updateBestellung } = useContext(BestellungContext);

  useEffect(() => {
    fetch(`${apiUrl}/lackierungen/${selectedFahrzeug.modell}`)
      .then((response) => response.json())
      .then((data) => {
        const mappedLackierung = data.map((lackierung) => ({
          id: lackierung.id,
          farbe: lackierung.farbe,
          preis: lackierung.preis,
        }));
        setLackierungen(mappedLackierung);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Lackierung:", error)
      );
  }, [selectedFahrzeug]);

  console.log("bestellung",{bestellung} )

  const handleSelectLackierung = (selectedLackierung) => {
    updateBestellung({lackierung:selectedLackierung});
  };

  return (
    <div>
      Lackierung für {selectedFahrzeug.marke} 
      <div className="text-2xl font-bold  mb-4">{selectedFahrzeug.modell}</div>
      <div>
        {lackierungen.map((lackierung) => (
          <LackierungenCard 
          lackierung={lackierung} 
          key={lackierung.id} 
          onSelectLackierung={handleSelectLackierung}
          isSelected={bestellung.lackierung?.id === lackierung.id}
        />
        ))}
      </div>
      <div>
        <h2 className=" mt-7">Ihr aktueller Gesamtbetrag ist:  {bestellung.gesamtpreis} EUR</h2>
      </div>
    </div>
  );
};

export default Lackierungen;
