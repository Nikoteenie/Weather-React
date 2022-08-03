import "./App.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Source from "./Source";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="weather-app-wrapper">
            <div class="weather-app">
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
