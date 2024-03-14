import React from 'react';

const LackierungenCard = ({lackierung}) => {
  const borderStyle = lackierung.farbe === 'White' ? 'border-gray-300 border-2' : '';
  const shadowStyle = lackierung.farbe === '#ffffff' ? 'shadow-md' : '';

  return (
    <div className="flex items-center space-x-2 mb-2">
      <div
        className={`w-10 h-10 rounded-full cursor-pointer ${borderStyle}`}
        style={{ backgroundColor: lackierung.farbe }}
        aria-label={`Color swatch for ${lackierung.farbe}`}
      />
      <span>{lackierung.preis} €</span>
    </div>
  )
}

export default LackierungenCard