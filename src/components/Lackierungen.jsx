import React, { useEffect, useState } from "react";
import LackierungenCard from "./LackierungenCard";

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

const Lackierungen = ({selectedModel}) => {
  const [lackierungen, setLackierungen] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/lackierungen/${selectedModel}`)
      .then((response) => response.json())
      .then((data) => {
        const mappedLackierung = data.map((lackierung) => ({
          id: lackierung.id,
          farbe: lackierung.farbe,
          preis: lackierung.preis,
        }));
        setLackierungen(mappedLackierung);
      })
      .catch((error) =>
        console.error("Fehler beim Abrufen von Lackierung:", error)
      );
  }, []);

  // const lackierungList = lackierung.map((lackierung) => {
  //   return (
  //     <div key={lackierung.id}>
  //       <p>{lackierung.farbe}</p>
  //       <p>{lackierung.preis}</p>
  //     </div>
  //   );
  // });

  return (
    <div>
      Lackierung 
      <div className="text-2xl font-bold  mb-4">{selectedModel}</div>
      {lackierungen.map((lackierung)=> (
        <LackierungenCard lackierung={lackierung} key={lackierung.id}/>
      ))}
      {/* {lackierungList} */}
    </div>
  );
};

export default Lackierungen;
