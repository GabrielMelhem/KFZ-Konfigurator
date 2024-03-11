import React from "react";
import Fahrzeuge from "../components/Fahrzeuge";
import Felgen from "../components/Felgen";
import Footer from "../components/Footer";
import Lackierung from "../components/Lackierung";
import Motorleistung from "../components/Motorleistung";
import Sonderausstattungen from "../components/Sonderausstattungen";

const Home = ({ activeTab, onNextClick }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "Marke":
        return <Fahrzeuge />;
      case "Motoren":
        return <Motorleistung />;
      case "Farben":
        return <Lackierung />;
      case "Räder":
        return <Felgen />;
      case "Sonderausstattung":
        return <Sonderausstattungen />;
      default:
        return null;
    }
  };
  return (
    <>
      <div>
        <h1 className="flex flex-col items-center mt-8 text-3xl mb-4">
          Konfigurieren Sie Ihren Fahrzeuge
        </h1>
        <div>
          <div>{renderContent()}</div>

          {activeTab !== "Zusammenfassung" && (
            <button
              onClick={onNextClick}
              className="bg-blue-800 text-white px-4 py-2 rounded focus:outline-none m-5 "
            >
              Nächste Schritte
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
