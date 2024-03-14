import React, { useContext, useEffect, useState } from "react";
import { BestellungContext } from "../context/BestellungContext";
import FelgenCard from './FelgenCard';

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
    updateBestellung('felgen', selectedFelgen);
  };


  return (
    <div>
      Felgen für {selectedFahrzeug.marke} 
      <div className="text-2xl font-bold  mb-4">{selectedFahrzeug.modell}</div>
      <div>
        {felgen.map((felge) => (
          <FelgenCard 
          felge={felge} 
          key={felge.id} 
          onSelectFelgen={handleSelectFelgen}
          isSelected={bestellung.felgen?.id === felge.id}
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

export default Felgen;
