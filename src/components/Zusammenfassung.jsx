import React, { useContext } from "react";
import { BestellungContext } from "../context/BestellungContext";
import { useSubmitBestellung } from "../hooks/useSubmitBestellung";
import ShareableLink from './ShareableLink';



const Zusammenfassung = () => {
  const { bestellung } = useContext(BestellungContext);

  const { submitBestellung, submitStatus } = useSubmitBestellung();

  const handleSubmit = async () => {
    try {
      const savedBestellung = await submitBestellung();
      console.log("Bestellung saved successfully", savedBestellung);
    } catch (error) {
      console.error("Failed to save bestellung", error);
    }
  };

  return (
    <div className="mx-auto max-w-4xl w-full p-5 border rounded shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
        Zusammenfassung Ihrer Konfiguration
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bestellung.fahrzeug && (
          <div className="mb-3">
            <h3 className="text-xl font-semibold">Fahrzeug:</h3>
            <p>
              {bestellung.fahrzeug.marke} {bestellung.fahrzeug.modell}
            </p>
            <p>Preis: {bestellung.fahrzeug.preis} €</p>
          </div>
        )}

        {bestellung.motorleistung && (
          <div className="mb-3">
            <h3 className="text-xl font-semibold">Motorleistung:</h3>
            <p>
              {bestellung.motorleistung.motor_name} -{" "}
              {bestellung.motorleistung.leistung} PS
            </p>
            <p>Preis: {bestellung.motorleistung.preis} €</p>
          </div>
        )}

        {bestellung.lackierung && (
          <div className="mb-3">
            <h3 className="text-xl font-semibold">Lackierung:</h3>
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full mr-2"
                style={{ backgroundColor: bestellung.lackierung.farbe }}
              ></div>
              <span>{bestellung.lackierung.farbe}</span>
            </div>
            <p>Preis: {bestellung.lackierung.preis} €</p>
          </div>
        )}

        {bestellung.felgen && (
          <div className="mb-3">
            <h3 className="text-xl font-semibold">Felgen:</h3>
            <p>{bestellung.felgen.felgen_typ}</p>
            <p>Preis: {bestellung.felgen.preis} €</p>
          </div>
        )}

        {bestellung.sonderausstattung &&
          bestellung.sonderausstattung.length > 0 && (
            <div className="mb-3">
              <h3 className="text-xl font-semibold">Sonderausstattungen:</h3>
              <ul>
                {bestellung.sonderausstattung.map((ausstattung, index) => (
                  <li key={index}>
                    {ausstattung.sonderausstattung_name} - Preis:{" "}
                    {ausstattung.preis} €
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>

      <div className="mt-5 border-t pt-3">
        <h3 className="text-2xl font-bold text-center md:text-left">
          Gesamtpreis: {bestellung.gesamtpreis} €
        </h3>
      </div>

      <div className="mt-6">
        <p>Bestellung Datum: {bestellung.date}</p>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-green-400"
        >
          Senden
        </button>
        {submitStatus.message && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: submitStatus.success
                ? "lightgreen"
                : "lightcoral",
              color: "darkslategray",
            }}
          >
            {submitStatus.message}
          </div>
        )}
      </div>

      <div>
      {bestellung.bestellungUrl && <ShareableLink url={bestellung.bestellungUrl}/>}
    </div>
    </div>
  );
};

export default Zusammenfassung;
