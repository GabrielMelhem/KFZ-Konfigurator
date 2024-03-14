import React, { useEffect, useState } from "react";
import SonderausstattungCard from './SonderausstattungCard';


const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Sonderausstattungen = ({selectedModel}) => {
  const [sonderausstattungen, setSonderausstattungen] = useState([]);

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
  }, []);

  // const sonderausstattungenList = sonderausstattungen.map((sonderausstattung) => {
  //   return (
  //     <div key={sonderausstattung.id}>
  //       <p>{sonderausstattung.sonderausstattung_name}</p>
  //       <p>{sonderausstattung.preis}</p>
  //     </div>
  //   );
  // });

  return (
    <div>
      sonderausstattungen
      <div className="text-2xl font-bold  mb-4">{selectedModel}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {sonderausstattungen.map((sonderausstattung) => (
          <SonderausstattungCard key={sonderausstattung.id} sonderausstattung={sonderausstattung}/>
        ))}
      </div>
    </div>
  );
};

export default Sonderausstattungen;
