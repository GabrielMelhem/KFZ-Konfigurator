import React, { useContext, useEffect, useState } from "react";
import { BestellungContext } from "../context/BestellungContext";
import SonderausstattungCard from "./SonderausstattungCard";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Sonderausstattungen = ({ selectedFahrzeug }) => {
  const [sonderausstattungen, setSonderausstattungen] = useState([]);
  const { bestellung, updateBestellung } = useContext(BestellungContext);

  useEffect(() => {
    fetch(`${apiUrl}/sonderausstattungen`)
      .then((response) => response.json())
      .then((data) => {
        const mappedSonderausstattungen = data.map((sonderausstattung) => ({
          id: sonderausstattung.id,
          sonderausstattung_name: sonderausstattung.sonderausstattung_name,
          preis: sonderausstattung.preis,
        }));
        setSonderausstattungen(mappedSonderausstattungen);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Sonderausstattungen:", error)
      );
  }, [selectedFahrzeug]);

  console.log("bestellung",{bestellung} )

  const handleSelectSonderausstattung = (selectedItem) => {
    let newSelection;
    if (bestellung.sonderausstattung.includes(selectedItem)) {
      newSelection = bestellung.sonderausstattung.filter(
        (item) => item.id !== selectedItem.id
      );
    } else {
      newSelection = [...bestellung.sonderausstattung, selectedItem];
    }
    updateBestellung("sonderausstattung", newSelection);
  };

  return (
    <div>
      sonderausstattungen für {selectedFahrzeug.marke}
      <div className="text-2xl font-bold  mb-4">{selectedFahrzeug.modell}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {sonderausstattungen.map((sonderausstattung) => (
          <SonderausstattungCard
            key={sonderausstattung.id}
            sonderausstattung={sonderausstattung}
            onSelect={handleSelectSonderausstattung}
            isSelected={bestellung.sonderausstattung.some(
              (s) => s.id === sonderausstattung.id
            )}
          />
        ))}
      </div>
      <div>
        <h2 className=" mt-7">
          Ihr aktueller Gesamtbetrag ist: {bestellung.gesamtpreis} EUR
        </h2>
      </div>
    </div>
  );
};

export default Sonderausstattungen;
