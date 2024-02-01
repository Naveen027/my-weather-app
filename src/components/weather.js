import { useState} from 'react';
import './weather.css'

const api = {
    key: "1571ab5f6bfc6c0df25562d3108bd6e5",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  

function Weather() {

    const [input, setInput] = useState("");
    const [weather, setWeather] = useState({});
  
    const searchPressed = () => {
      fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
        });
    };
  
    return (
      <div className='app'>
      <div className="card">
        <header className="card-header">
       
          <h1>Weather App</h1>
  
          <div>
            <input
              type="text"
              placeholder="Enter your city"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
            
          </div>
  
          {/* If weather is not undefined display results from API */}
          {typeof weather.main !== "undefined" ? (
            <div>
              {/* Location  */}
              
              <p>City:{weather.name}</p>
  
              {/* Temperature Celsius  */}
              <p>Temp:{weather.main.temp}°C</p>
  
              {/* Condition (Sunny ) */}
              <p>Condition:{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          ) : (
            ""
          )}
        </header>
      </div>
      </div>
    );

}



export default Weather;