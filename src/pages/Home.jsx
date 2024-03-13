import React, { useState } from "react";
import Fahrzeuge from "../components/Fahrzeuge";
import Felgen from "../components/Felgen";
import Footer from "../components/Footer";
import Lackierungen from "../components/Lackierungen";
import Motorleistungen from "../components/Motorleistungen";
import Navbar from "../components/Navbar";
import Sonderausstattungen from "../components/Sonderausstattungen";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Marke");
  const [nextButtonVisible, setNextButtonVisible] = useState(true);
  const [selectedModel, setSelectedModel] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case "Marke":
        return <Fahrzeuge onModelSelect={handleModelSelect} />;
      case "Motoren":
        return <Motorleistungen selectedModel={selectedModel} />;
      case "Farben":
        return <Lackierungen selectedModel={selectedModel} />;
      case "Räder":
        return <Felgen selectedModel={selectedModel} />;
      case "Sonderausstattung":
        return <Sonderausstattungen />;
      default:
        return null;
    }
  };

  const handleModelSelect = (modell) => {
    setSelectedModel(modell);

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
