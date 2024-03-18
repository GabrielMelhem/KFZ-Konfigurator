import { createContext, useEffect, useState } from "react";

export const BestellungContext = createContext();

const defaultState = {
  fahrzeug: null,
  motorleistung: null,
  lackierung: null,
  felgen: null,
  sonderausstattung: [],
  gesamtpreis: 0,
  date: new Date().toDateString(),
  url: null,
  isFinalized: false
};

export const BestellungProvider = ({ children }) => {
  const [bestellung, setBestellung] = useState(() => {
    const saved = localStorage.getItem("bestellung");
    return saved ? JSON.parse(saved) : defaultState;
  });


  useEffect(() => {
    if (!bestellung.isFinalized) {
      localStorage.setItem("bestellung", JSON.stringify(bestellung));
    }
  }, [bestellung]);


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

  const calculateTotalPrice = (currentBestellung) => {
    let totalPrice = 0;

    // Check if fahrzeug is selected and add its price
    if (currentBestellung.fahrzeug) totalPrice += currentBestellung.fahrzeug.preis;
    if (currentBestellung.motorleistung) totalPrice += currentBestellung.motorleistung.preis;
    if (currentBestellung.lackierung) totalPrice += currentBestellung.lackierung.preis;
    if (currentBestellung.felgen) totalPrice += currentBestellung.felgen.preis;
    currentBestellung.sonderausstattung.forEach(item => totalPrice += item.preis);

    return totalPrice;
  };

  const finalizBestellung = () => {
    setBestellung({ ...defaultState });
    localStorage.removeItem('bestellung');
  };

  const resetToDefaultState = () => {
    setBestellung(defaultState);
    localStorage.removeItem("bestellung"); 
  };


  return (
    <BestellungContext.Provider value={{ bestellung, updateBestellung,finalizBestellung,resetToDefaultState }}>
      {children}
    </BestellungContext.Provider>
  );
};
