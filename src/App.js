import axios from "axios";
import { Rings } from "react-loader-spinner";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nikoteenie</h1>
        <Rings
          height="180"
          width="180"
          color="#ff84f4"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        <Weather />
      </header>
    </div>
  );
}

export default App;
