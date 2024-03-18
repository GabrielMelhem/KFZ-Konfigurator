import React, { useContext, useEffect, useState } from "react";
import { BestellungContext } from "../../context/BestellungContext";
import BilderCarousel from "../BilderCarousel";
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

  console.log("bestellung", { bestellung });

  const handleSelectSonderausstattung = (selectedItem) => {
    let newSelection;
    if (bestellung.sonderausstattung.includes(selectedItem)) {
      newSelection = bestellung.sonderausstattung.filter(
        (item) => item.id !== selectedItem.id
      );
    } else {
      newSelection = [...bestellung.sonderausstattung, selectedItem];
    }
    updateBestellung({ sonderausstattung: newSelection });
  };

  return (
    <div>
      sonderausstattungen für {selectedFahrzeug.marke}
      <div className="text-2xl font-bold  mb-4">{selectedFahrzeug.modell}</div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/3">
          <BilderCarousel />
        </div>
        <div className="w-full lg:w-2/3 flex flex-wrap">
          {sonderausstattungen.map((sonderausstattung) => (
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
              <SonderausstattungCard
                key={sonderausstattung.id}
                sonderausstattung={sonderausstattung}
                onSelect={handleSelectSonderausstattung}
                isSelected={bestellung.sonderausstattung.some(
                  (s) => s.id === sonderausstattung.id
                )}
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

export default Sonderausstattungen;
