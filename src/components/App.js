import React, { useEffect, useState } from "react";
import "./../styles/App.css";

let weatherInput = { temperature: 25, conditions: "Sunny" };

const WeatherDisplay = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <>
      <p
        style={
          weatherData.temperature > 20 ? { color: "red" } : { color: "blue" }
        }
      >
        Temperature: {weatherData.temperature}
      </p>
      <p>Conditions: {weatherData.conditions}</p>
      <span>K</span>
    </>
  );
};

const App = () => {
  const [data, setData] = useState(weatherInput);
  console.log("line25", data);
  useEffect(() => {
    setData(weatherInput);
  }, []);
  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay weatherData={data} />
    </div>
  );
};

export default App;
