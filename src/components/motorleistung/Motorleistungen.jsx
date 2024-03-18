import React, { useContext, useEffect, useState } from "react";
import { BestellungContext } from "../../context/BestellungContext";
import BilderCarousel from "../BilderCarousel";
import MotorleistungCard from "./MotorleistungCard";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Motorleistungen = ({ selectedFahrzeug }) => {
  const [motorleistungen, setMotorleistungen] = useState([]);
  const { bestellung, updateBestellung } = useContext(BestellungContext);

  useEffect(() => {
    updateBestellung({ fahrzeug: selectedFahrzeug });
  }, [selectedFahrzeug]);

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
  }, [selectedFahrzeug.modell]);

  const handleSelectMotorleistung = (selectedMotorleistung) => {
    updateBestellung({ motorleistung: selectedMotorleistung });
  };

  return (
    <div>
      Motorleistungen für {selectedFahrzeug.marke}
      <div className="text-2xl font-bold  mb-4">{selectedFahrzeug.modell}</div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/3">
          <BilderCarousel />
        </div>
        <div className="w-full lg:w-2/3 flex flex-wrap">
          {motorleistungen.map((motorleistung) => (
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
              <MotorleistungCard
                key={motorleistung.id}
                motorleistung={motorleistung}
                onSelectMotorleistung={handleSelectMotorleistung}
                isSelected={bestellung.motorleistung?.id === motorleistung.id}
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

export default Motorleistungen;
