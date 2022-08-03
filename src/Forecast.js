import SunImage from "./images/sun.gif";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>Monday</h5>
            <img
              src={SunImage}
              alt=""
              className="forecastEmoji"
              width="100px"
            />
            <p>31°C | 18°C</p>
          </div>
          <div className="col-sm">
            <h5>Tuesday</h5>
            <img
              src={SunImage}
              alt=""
              className="forecastEmoji"
              width="100px"
            />
            <p>31°C | 18°C</p>
          </div>
          <div className="col-sm">
            <h5>Wednesday</h5>
            <img
              src={SunImage}
              alt=""
              className="forecastEmoji"
              width="100px"
            />
            <p>31°C | 18°C</p>
          </div>
          <div className="col-sm">
            <h5>Thursday</h5>
            <img
              src={SunImage}
              alt=""
              className="forecastEmoji"
              width="100px"
            />
            <p>31°C | 18°C</p>
          </div>
          <div className="col-sm">
            <h5>Friday</h5>
            <img
              src={SunImage}
              alt=""
              className="forecastEmoji"
              width="100px"
            />
            <p>31°C | 18°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
