const CarCard = ({ fahrzeug }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
      <img className="w-full" src={""} alt={""} />
      <div className="px-6 py-4">
        {/* <div className="text-xl mb-2">{fahrzeug.marke}</div> */}
        <div className="font-bold text-xl mb-2">{fahrzeug.modell}</div>
        <p className="text-gray-700 text-base">
          Ab {fahrzeug.preis} € inkl. MwSt
        </p>
        {fahrzeug.marke && (
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2">
            Neu
          </span>
        )}
      </div>
    </div>
  );
};

export default CarCard;
