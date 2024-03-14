import React, { useEffect, useState } from "react";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Felgen = ({selectedModel}) => {
  const [felgen, setFelgen] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/felgen/${selectedModel}`)
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
  }, []);

  const felgenList = felgen.map((felge) => {
    return (
      <div key={felge.id}>
        <p>{felge.felgen_typ}</p>
        <p>{felge.preis}</p>
      </div>
    );
  });

  return (
    <div>
      Felgen
      <div className="text-2xl font-bold  mb-4">{selectedModel}</div>
      <div>
      {felgenList}
      </div>
      
      <div>
        <h2>Your current total is: EUR</h2>
      </div>
      
    </div>
  );
};

export default Felgen;
