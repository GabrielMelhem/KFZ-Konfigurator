import React, { useEffect, useState } from "react";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Fahrzeuge = () => {
  const [fahrzeuge, setFahrzeuge] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/fahrzeuge`)
      .then((response) => response.json())
      .then((data) => {
        const mappedFahrzeuge = data.map((fahrzeug) => ({
          id: fahrzeug.id,
          modell: fahrzeug.modell,
          marke: fahrzeug.marke,
          preis: fahrzeug.preis,
        }));
        setFahrzeuge(mappedFahrzeuge);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Fahrzeuge:", error)
      );
  }, []);

  const fahrzeugeList = fahrzeuge.map((fahrzeug) => {
    return (
      <div className="card">
         <div >
                  <img
                    className="w-72 h-72 rounded-xl"
                    src={''}
                    alt="Car"
                  />
                  <div key={fahrzeug.id} className="py-1">
                    <h1 className="font-semibold">{fahrzeug.marke}</h1>
                    <p className="text-gray-700 text-sm">{fahrzeug.modell}</p>
                    <h1 className="font-semibold">
                      <span className=" font-normal">
                        "€"
                      </span>{" "}
                      {fahrzeug.preis}
                    </h1>
                  </div>
                </div>
      </div>
    );
  });

  return (
    <div>
      Fahrzeuge
      {fahrzeugeList}
    </div>
  );
};

export default Fahrzeuge;
