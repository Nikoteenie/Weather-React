import SunImage from "./images/sun.gif";

export default function Forecast() {
  let forecastTemperatures= <div className="weather-forecast-temperatures">31°
            <div className="weather-forecast-temperature-min">18°</div></div>
  return (
    <div className="weather-forecast">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="weather-forecast-date">Mon</div>
            <img src={SunImage} alt="" width="70px" />
            {forecastTemperatures}
          </div>
          <div className="col-sm">
            <div className="weather-forecast-date">Tues</div>
            <img src={SunImage} alt="" width="70px" />
            {forecastTemperatures}
          </div>
          <div className="col-sm">
            <div className="weather-forecast-date">Wed</div>
            <img src={SunImage} alt="" width="70px" />
            {forecastTemperatures}
          </div>
          <div className="col-sm">
            <div className="weather-forecast-date">Thu</div>
            <img src={SunImage} alt="" width="70px" />
            {forecastTemperatures}
          </div>
          <div className="col-sm">
            <div className="weather-forecast-date">Fri</div>
            <img src={SunImage} alt="" className="forecastEmoji" width="70px" />
            {forecastTemperatures}
          </div>
        </div>
      </div>
    </div>
  );
}
