import React, { useContext, useEffect, useState } from "react";
import { BestellungContext } from "../../context/BestellungContext";
import BilderCarousel from "../BilderCarousel";
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

  console.log("bestellung", { bestellung });

  const handleSelectLackierung = (selectedLackierung) => {
    updateBestellung({ lackierung: selectedLackierung });
  };

  return (
    <div>
      Lackierung für {selectedFahrzeug.marke}
      <div className="text-2xl font-bold  mb-4">{selectedFahrzeug.modell}</div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/3">
          <BilderCarousel />
        </div>
        <div className="w-full lg:w-2/3 flex flex-wrap">
          {lackierungen.map((lackierung) => (
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
              <LackierungenCard
                lackierung={lackierung}
                key={lackierung.id}
                onSelectLackierung={handleSelectLackierung}
                isSelected={bestellung.lackierung?.id === lackierung.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/3 w-full mt-7 p-4 border-2 rounded-lg shadow-md">
        <h2>
          Ihr aktueller Gesamtbetrag ist:
          <span className="font-bold p-2 border-2 rounded-lg mx-1">
            {bestellung.gesamtpreis}
          </span>
          €
        </h2>
      </div>
    </div>
  );
};

export default Lackierungen;
