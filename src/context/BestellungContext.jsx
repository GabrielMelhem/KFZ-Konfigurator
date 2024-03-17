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

  // useEffect(() => {
  //   fetch(`${apiUrl}/bestellungen/${bestellungUrl}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       updateBestellung({
  //         fahrzeug: data.fahrzeug,
  //         motorleistung: data.motorleistung,
  //         lackierung: data.lackierung,
  //         felgen: data.felgen,
  //         sonderausstattung: data.sonderausstattung,
  //         gesamtpreis: data.gesamtpreis,
  //         date: data.date,
  //         url: data.urlSlug,
  //         isFinalized: data.isFinalized,
  //       });
  //     })
  //     .catch((error) =>
  //       console.error("Fehler beim Abrufen von Bestellungen:", error)
  //     );
  // },[])

  return (
    <BestellungContext.Provider value={{ bestellung, updateBestellung }}>
      {children}
    </BestellungContext.Provider>
  );
};
