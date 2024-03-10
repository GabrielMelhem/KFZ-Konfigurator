import React, { useEffect, useState } from "react";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Sonderausstattungen = () => {
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

  const sonderausstattungenList = sonderausstattungen.map((sonderausstattung) => {
    return (
      <div key={sonderausstattung.id}>
        <p>{sonderausstattung.sonderausstattung_name}</p>
        <p>{sonderausstattung.preis}</p>
      </div>
    );
  });

  return (
    <div>
      sonderausstattungen
      {sonderausstattungenList}
    </div>
  );
};

export default Sonderausstattungen;
