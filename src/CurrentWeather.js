import SunImage from "./images/sun.gif";

export default function CurrentWeather() {
  return (
    <div>
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1 id="city">Miami</h1>
        <ul>
          <li>
            Last updated: 08/02/2022<span id="date"></span>
          </li>
          <li id="description"> Clear Sky</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={SunImage}
              alt="Clear"
              id="icon"
              width="150"
              className="float-left"
            />
            <div className="float-left">
              <strong id="temperature"></strong>
              <span className="units">
                <a href="" id="celsius-link" className="active">
                  °C
                </a>{" "}
                |{" "}
                <a href="" id="fahrenheit-link">
                  °F{" "}
                </a>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">50</span>%
            </li>
            <li>
              Wind: <span id="wind">5</span>
              <a href="#" id="kmh-link" className="activate">
                {" "}
                km/h
              </a>{" "}
              |{" "}
              <a href="#" id="mph-link">
                mph
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
