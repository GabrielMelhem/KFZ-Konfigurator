import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Fahrzeuge from "../components/fahrzeuge/Fahrzeuge";
import Felgen from "../components/felgen/Felgen";
import Lackierungen from "../components/lackierung/Lackierungen";
import Motorleistungen from "../components/motorleistung/Motorleistungen";
import Sonderausstattungen from "../components/sonderausstattung/Sonderausstattungen";
import Zusammenfassung from "../components/zusammenfassung/Zusammenfassung";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Marke");
  const [nextButtonVisible, setNextButtonVisible] = useState(true);
  const [selectedFahrzeug, setSelectedFahrzeug] = useState({marke: null, modell: null, preis: null});

  const renderContent = () => {
    switch (activeTab) {
      case "Marke":
        return <Fahrzeuge onFahrzeugSelect={handleFahrzeugSelect} />;
      case "Motoren":
        return <Motorleistungen selectedFahrzeug={selectedFahrzeug} />;
      case "Farben":
        return <Lackierungen selectedFahrzeug={selectedFahrzeug} />;
      case "Räder":
        return <Felgen selectedFahrzeug={selectedFahrzeug} />;
      case "Sonderausstattung":
        return <Sonderausstattungen selectedFahrzeug={selectedFahrzeug}/>;
      case "Zusammenfassung":
        return  <Zusammenfassung />
      default:
        return null;
    }
  };

  const handleFahrzeugSelect = (fahrzeug) => {
    setSelectedFahrzeug(fahrzeug);
    setActiveTab("Motoren");
  };


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setNextButtonVisible(true);
  };

  const handleNextClick = () => {
    const tabsOrder = [
      "Marke",
      "Motoren",
      "Farben",
      "Räder",
      "Sonderausstattung",
      "Zusammenfassung",
      "Bestellung"
    ];

    // Find the index of the current active tab
    const currentIndex = tabsOrder.indexOf(activeTab);
    // If there is a next tab, update the active tab
    if (currentIndex < tabsOrder.length - 1) {
      const nextTab = tabsOrder[currentIndex + 1];
      setActiveTab(nextTab);
      setNextButtonVisible(true);
    } else {
      setNextButtonVisible(false);
    }
  };

  return (
    <>
      <Navbar activeTab={activeTab} onTabClick={handleTabClick} />
      <div className=" mx-10">
        <div className="flex flex-col items-center mt-8 text-3xl mb-4">
          <h1 className="text-3xl mb-4">Konfigurieren Sie Ihren Fahrzeuge</h1>
        </div>

        <div className=" m-5">{renderContent()}</div>

        <div>
          {activeTab !== "Marke" &&
            activeTab !== "Zusammenfassung" &&
            nextButtonVisible && (
              <button
                onClick={handleNextClick}
                className="bg-blue-800 text-white px-4 py-2 rounded focus:outline-none m-5 cursor-pointer"
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
