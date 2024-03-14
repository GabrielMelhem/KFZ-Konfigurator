
const MotorleistungCard = ({ motorleistung, onSelectMotorleistung, isSelected  }) => {

  const handleClick = () => {
    if (!isSelected) {
      onSelectMotorleistung(motorleistung);
    }
  };
  

  return (
    <div
      className={`p-4 border-2 rounded-lg shadow-md transition-colors ${
        isSelected
          ? "border-green-500 hover:border-green-600"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={handleClick}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold">{motorleistung.motor_name}</h3>
          <p className="text-sm text-gray-600">{motorleistung.leistung}</p>
          <div className="mt-2">
            <span className="text-lg font-bold">{motorleistung.preis} €</span>
          </div>
        </div>
        <div>
          <div
            className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${
              isSelected ? "border-green-500 bg-green-500" : "border-gray-300"
            }`}
          >
            {isSelected && (
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

export default MotorleistungCard;
