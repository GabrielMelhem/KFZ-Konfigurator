import React from "react";

const Home = ({ activeTab,onNextClick  }) => {
  return (
    <div className="flex flex-col items-center mt-8">
    <h1 className="text-3xl mb-4">Konfigurieren Sie Ihren Volkswagen</h1>
    <div>
        <h2>Content for {activeTab} Tab</h2>
         {activeTab !== 'Zusammenfassung' && (
          <button
            onClick={onNextClick}
            className="bg-blue-800 text-white px-4 py-2 rounded focus:outline-none"
          >
            Next
          </button>
        )} 
    </div>
  </div>
  );
};

export default Home;
