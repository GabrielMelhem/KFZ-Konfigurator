import { createContext, useState } from "react";

export const BestellungContext = createContext();

export const BestellungProvider = ({ children }) => {
  const [bestellung, setBestellung] = useState({
    fahrzeug: null,
    motorleistung: null,
    lackierung: null,
    felgen: null,
    sonderausstattung: [],
    gesamtpreis: 0,
    date: new Date().toDateString(),
    url: null,
    isFinalized: false
  });

  const updateBestellung = (updates) => {
    setBestellung((prevBestellung) => {
      let updatedBestellung = { ...prevBestellung, date: new Date().toDateString() };
      for (const key in updates) {
        updatedBestellung[key] = updates[key];
      }

      updatedBestellung.gesamtpreis = calculateTotalPrice(updatedBestellung);

      return updatedBestellung;
    });
  };

  const calculateTotalPrice = (bestellung) => {
    let totalPrice = 0;

    // Check if fahrzeug is selected and add its price
    if (bestellung.fahrzeug) {
      totalPrice += bestellung.fahrzeug.preis;
    }

    if (bestellung.motorleistung) {
      totalPrice += bestellung.motorleistung.preis;
    }

    if (bestellung.lackierung) {
      totalPrice += bestellung.lackierung.preis;
    }

    if (bestellung.felgen) {
      totalPrice += bestellung.felgen.preis;
    }

    if (
      bestellung.sonderausstattung &&
      bestellung.sonderausstattung.length > 0
    ) {
      bestellung.sonderausstattung.forEach((ausstattung) => {
        totalPrice += ausstattung.preis;
      });
    }

    return totalPrice;
  };

  return (
    <BestellungContext.Provider value={{ bestellung, updateBestellung }}>
      {children}
    </BestellungContext.Provider>
  );
};
