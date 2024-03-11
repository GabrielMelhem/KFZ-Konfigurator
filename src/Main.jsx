import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from "./pages/Home";

const Main = () => {
  const [activeTab, setActiveTab] = useState("Marke");
  const [nextButtonVisible, setNextButtonVisible] = useState(true);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setNextButtonVisible(true);
  };

  const handleNextClick = () => {
    // Define the order of tabs
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
    }else {
      // If no next tab, hide the "Next" button
      setNextButtonVisible(false);
    }
  };
  return (
    <div>
      <Navbar activeTab={activeTab} onTabClick={handleTabClick} />
      <Home activeTab={activeTab} onNextClick={handleNextClick} />
    </div>
  );
};

export default Main;
