import TemperatureDisplay from "./components/TemperatureDisplay";
import "./App.css";
import { useState } from "react";
import TemperatureInput from "./components/TemperatureInput";

function App() {
  const [minTemp, setMinTemp] = useState(10);
  const [maxTemp, setMaxTemp] = useState(30);
  const [targetTemp, setTargetTemp] = useState(20);

  const handleMinTempChange = (value) => {
    setMinTemp(value);
    if (value > targetTemp) {
      setTargetTemp(value);
    }
  };

  const handleMaxTempChange = (value) => {
    setMaxTemp(value);
    if (value < targetTemp) {
      setTargetTemp(value);
    }
  };

  const handleTargetTempChange = (value) => {
    setTargetTemp(value);
  };

  return (
    <div className="App">
      <h1>Temperature Display</h1>
      <TemperatureInput
        type="min"
        value={minTemp}
        onChange={handleMinTempChange}
      />
      <TemperatureInput
        type="max"
        value={maxTemp}
        onChange={handleMaxTempChange}
      />
      <TemperatureInput
        type="target"
        min={minTemp}
        max={maxTemp}
        value={targetTemp}
        onChange={handleTargetTempChange}
      />
      <TemperatureDisplay
        minTemp={minTemp}
        maxTemp={maxTemp}
        targetTemp={targetTemp}
      />
    </div>
  );
}

export default App;
