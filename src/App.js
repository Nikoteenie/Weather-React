import "./App.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Source from "./Source";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <CurrentWeather />
              <Forecast />
            </div>
            <Source />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
