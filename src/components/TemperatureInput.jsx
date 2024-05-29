function TemperatureInput({ type, value, onChange, min, max }) {
  if (type === "target") {
    return (
      <div>
        <label>
          Target Temperature:
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value, 10))}
          />
          {value}°C
        </label>
      </div>
    );
  }

  return (
    <div>
      <label>
        {type === "min" ? "Min Temperature:" : "Max Temperature:"}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
        />
      </label>
    </div>
  );
}

export default TemperatureInput;
