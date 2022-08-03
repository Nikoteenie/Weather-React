import SunImage from "./images/sun.gif";

export default function CurrentWeather() {
  return (
    <div>
      <form id="search-form" class="mb-3">
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              class="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <div class="overview">
        <h1 id="city">Miami</h1>
        <ul>
          <li>
            Last updated: 08/02/2022<span id="date"></span>
          </li>
          <li id="description"> Clear Sky</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="clearfix weather-temperature">
            <img
              src={SunImage}
              alt="Clear"
              id="icon"
              width="150"
              class="float-left"
            />
            <div class="float-left">
              <strong id="temperature"></strong>
              <span class="units">
                <a href="/" id="celsius-link" class="active">
                  °C
                </a>{" "}
                |{" "}
                <a href="/" id="fahrenheit-link">
                  °F{" "}
                </a>{" "}
              </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">50</span>%
            </li>
            <li>
              Wind: <span id="wind">5</span>
              <a href="#" id="kmh-link" class="activate">
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
