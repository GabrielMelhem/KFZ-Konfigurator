import React, { useContext, useEffect, useState } from "react";
import { BestellungContext } from "../../context/BestellungContext";
import BilderCarousel from "../BilderCarousel";
import FelgenCard from "./FelgenCard";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Felgen = ({ selectedFahrzeug }) => {
  const [felgen, setFelgen] = useState([]);
  const { bestellung, updateBestellung } = useContext(BestellungContext);

  useEffect(() => {
    fetch(`${apiUrl}/felgen/${selectedFahrzeug.modell}`)
      .then((response) => response.json())
      .then((data) => {
        const mappedFelgen = data.map((felge) => ({
          id: felge.id,
          felgen_typ: felge.felgen_typ,
          preis: felge.preis,
        }));
        setFelgen(mappedFelgen);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Felgen:", error)
      );
  }, [selectedFahrzeug]);

  const handleSelectFelgen = (selectedFelgen) => {
    updateBestellung({ felgen: selectedFelgen });
  };

  return (
    <div>
      Felgen für {selectedFahrzeug.marke}
      <div className="text-2xl font-bold  mb-4">{selectedFahrzeug.modell}</div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/3">
          <BilderCarousel />
        </div>
        <div className="w-full lg:w-2/3 flex flex-wrap">
          {felgen.map((felge) => (
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
              <FelgenCard
                felge={felge}
                key={felge.id}
                onSelectFelgen={handleSelectFelgen}
                isSelected={bestellung.felgen?.id === felge.id}
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

export default Felgen;
