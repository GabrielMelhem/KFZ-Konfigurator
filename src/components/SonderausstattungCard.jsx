import { useState } from "react";

const SonderausstattungCard = ({ sonderausstattung }) => {
  const [selectedSonderausstattung, setSelectedSonderausstattung] = useState(false);

  const toggleSelected = () => setSelectedSonderausstattung(!selectedSonderausstattung);
  return (
    <div
      className={`p-4 border-2 rounded-lg shadow-md transition-colors ${
        selectedSonderausstattung
          ? "border-green-500 hover:border-green-600"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">{sonderausstattung.sonderausstattung_name}</h3>
          <div className="mt-2">
            <span className="text-lg font-bold">{sonderausstattung.preis} €</span>
          </div>
        </div>
        <div>
          <div
            className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                selectedSonderausstattung ? "border-green-500 bg-green-500" : "border-gray-300"
            }`}
            onClick={toggleSelected}
          >
            {selectedSonderausstattung && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SonderausstattungCard;
