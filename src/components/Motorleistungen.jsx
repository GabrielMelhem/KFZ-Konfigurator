import React, { useContext, useEffect, useState } from "react";
import { BestellungContext } from '../context/BestellungContext';
import MotorleistungCard from "./MotorleistungCard";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Motorleistungen = ({ selectedFahrzeug }) => {

  const [motorleistungen, setMotorleistungen] = useState([]);
  const { bestellung, updateBestellung } = useContext(BestellungContext);

  useEffect(() => {
    updateBestellung('fahrzeug',selectedFahrzeug );
  }, []);

  // console.log("bestellung",{bestellung} )

  useEffect(() => {
    fetch(`${apiUrl}/motorleistungen/${selectedFahrzeug.modell}`)
      .then((response) => response.json())
      .then((data) => {
        const mappedMotorleistungen = data.map((motorleistung) => ({
          id: motorleistung.id,
          motor_name: motorleistung.motor_name,
          leistung: motorleistung.leistung,
          preis: motorleistung.preis,
        }));
        setMotorleistungen(mappedMotorleistungen);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Motorleistungen:", error)
      );
  }, []);

  const handleSelectMotorleistung = (selectedMotorleistung) => {
     updateBestellung('motorleistung', selectedMotorleistung);
  };

  return (
    <div>
      Motorleistungen für {selectedFahrzeug.marke} 
      <div className="text-2xl font-bold  mb-4">{selectedFahrzeug.modell}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {motorleistungen.map((motorleistung) => (
          <MotorleistungCard
            key={motorleistung.id}
            motorleistung={motorleistung}
            onSelectMotorleistung={handleSelectMotorleistung}
            isSelected={bestellung.motorleistung?.id === motorleistung.id}
          />
        ))}
      </div>
      <div>
        <h2 className=" mt-7">Ihr aktueller Gesamtbetrag ist:  {bestellung.gesamtpreis} EUR</h2>
      </div>
    </div>
  );
};

export default Motorleistungen;
