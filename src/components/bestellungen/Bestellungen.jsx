import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { BestellungContext } from "../../context/BestellungContext";
import BestellungenCard from './BestellungenCard';

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Bestellungen = () => {
  const { bestellung, updateBestellung } = useContext(BestellungContext);
  const {bestellungUrl}= useParams();

  useEffect(() => {
    fetch(`${apiUrl}/bestellungen/${bestellungUrl}`)
      .then((response) => response.json())
      .then((data) => {
        updateBestellung({
          fahrzeug: data.fahrzeug,
          motorleistung: data.motorleistung,
          lackierung: data.lackierung,
          felgen: data.felgen,
          sonderausstattung: data.sonderausstattung,
          gesamtpreis: data.gesamtpreis,
          date: data.date,
          url: data.urlSlug,
          isFinalized: data.isFinalized,
        });
        <BestellungenCard bestellung={bestellung}/>
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Bestellungen:", error)
      );
  }, []);
  return <div>Bestellungen</div>;
};

export default Bestellungen;
