const TemperatureDisplay = ({ minTemp, maxTemp, targetTemp }) => {
  const calculateRotation = (temp) => {
    const range = maxTemp - minTemp;
    const percentage = (temp - minTemp) / range;
    return percentage * 270 - 135; // Mapping to the 90-degree span
  };

  const targetRotation = calculateRotation(targetTemp);

  return (
    <div className="temperature-display">
      <div className="circle">
        <div
          className="indicator"
          style={{ transform: `rotate(${targetRotation}deg)` }}
        />
        <div className="min-line" />
        <div className="max-line" />
      </div>
      <div className="temperature-text">{targetTemp}°C</div>
    </div>
  );
};

export default TemperatureDisplay;
