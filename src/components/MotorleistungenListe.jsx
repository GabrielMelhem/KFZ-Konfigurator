import React, { useEffect, useState } from "react";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const MotorleistungenListe = () => {
  const [motorleistungen, setMotorleistungen] = useState([]);

useEffect(() => {
    fetch(`${apiUrl}/motorleistungen`)
        .then(response => response.json())
        .then(data => {
            const mappedMotorleistungen = data.map(motorleistung => ({
                id: motorleistung.id,
                motor_name:motorleistung.motor_name,
                leistung: motorleistung.leistung,
                preis: motorleistung.preis
            }));
            setMotorleistungen(mappedMotorleistungen);
        })
        .catch(error => console.error('Fehler beim Abrufen von Motorleistungen:', error));
}, []);

  const motorleistungenList = motorleistungen.map((motorleistung) => {
    return (
      <div key={motorleistung.id}>
        <p>{motorleistung.motor_name}</p>
        <p>{motorleistung.leistung}</p>
        <p>{motorleistung.preis}</p>
      </div>
    );
  });

  return (
    <div>
      MotorleistungenListe
      {motorleistungenList}
    </div>
  );
};

export default MotorleistungenListe;
