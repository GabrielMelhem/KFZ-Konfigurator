import React from "react";

const LackierungenCard = ({ lackierung, onSelectLackierung, isSelected }) => {
  const handleClick = () => {
    if (!isSelected) {
      onSelectLackierung(lackierung);
    }
  };

  const borderStyle =
    lackierung.farbe === "White" ? "border-gray-300 border-2" : "";
  // Determine the border color based on selection
  const borderColor = isSelected ? "border-green-500" : "border-gray-300";

  return (
    <div className="flex items-center space-x-2 mb-2" onClick={handleClick}>
      <div
        className={`w-10 h-10 rounded-full cursor-pointer ${borderStyle} ${borderColor} ${
          isSelected ? "shadow-md" : ""
        }`}
        style={{ backgroundColor: lackierung.farbe }}
        aria-label={`Color swatch for ${lackierung.farbe}`}
      />
      <span>{lackierung.preis} €</span>
    </div>
  );
};

export default LackierungenCard;
