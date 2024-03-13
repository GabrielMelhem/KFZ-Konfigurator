import React, { useEffect, useState } from "react";
import MotorleistungCard from "./MotorleistungCard";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Motorleistungen = ({ selectedModel }) => {
  const [motorleistungen, setMotorleistungen] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/motorleistungen/${selectedModel}`)
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

  // const motorleistungenList = motorleistungen.map((motorleistung) => {
  //   return (
  //     <div key={motorleistung.id}>
  //       <p>{motorleistung.motor_name}</p>
  //       <p>{motorleistung.leistung}</p>
  //       <p>{motorleistung.preis}</p>
  //     </div>
  //   );
  // });

  return (
    <div>
      Motorleistungen
      <div className="text-2xl font-bold  mb-4">{selectedModel}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {motorleistungen.map((motorleistung) => (
          <MotorleistungCard
            key={motorleistung.id}
            motorleistung={motorleistung}
          />
        ))}
      </div>
    </div>
  );
};

export default Motorleistungen;
