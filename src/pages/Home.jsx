import React, { useState } from "react";
import Fahrzeuge from "../components/Fahrzeuge";
import Felgen from "../components/Felgen";
import Footer from "../components/Footer";
import Lackierung from "../components/Lackierung";
import Motorleistung from "../components/Motorleistung";
import Navbar from "../components/Navbar";
import Sonderausstattungen from "../components/Sonderausstattungen";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Marke");
  const [nextButtonVisible, setNextButtonVisible] = useState(true);

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
      <Navbar activeTab={activeTab} onTabClick={handleTabClick} />
      <div>
        <div className="flex flex-col items-center mt-8 text-3xl mb-4">
          <h1 className="text-3xl mb-4">Konfigurieren Sie Ihren Fahrzeuge</h1>
        </div>
        <div>{renderContent()}</div>
        <div>
          {activeTab !== "Zusammenfassung" && nextButtonVisible && (
            <button
              onClick={handleNextClick}
              className="bg-blue-800 text-white px-4 py-2 rounded focus:outline-none m-5"
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
