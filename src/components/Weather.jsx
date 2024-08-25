import "./Weather.css"; // Import the CSS file for styling the Weather component
import search_icon from "../assets/search.png"; // Import the search icon image
import clear_icon from "../assets/clear.png"; // Import the clear weather icon image
import cloud_icon from "../assets/cloud.png"; // Import the cloud weather icon image
import drizzle_icon from "../assets/drizzle.png"; // Import the drizzle weather icon image
import rain_icon from "../assets/rain.png"; // Import the rain weather icon image
import snow_icon from "../assets/snow.png"; // Import the snow weather icon image
import wind_icon from "../assets/wind.png"; // Import the wind icon image
import humidity_icon from "../assets/humidity.png"; // Import the humidity icon image
import { useEffect, useRef, useState } from "react"; // Import hooks from React

const Weather = () => {
  const inputRef = useRef(); // Create a ref for the search input field

  const [weatherData, setWeatherData] = useState(false); // Initialize state to hold weather data

  // Object mapping weather condition codes to corresponding icons
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  // Function to search for weather data based on city name
  const search = async (city) => {
    if (city === "") { // If the city name is empty, show an alert
      alert("Enter City Name.");
      return;
    }
    try {
      // Construct the API URL with the city name and API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url); // Fetch weather data from the API
      const data = await response.json(); // Parse the response as JSON

      if (!response.ok) { // If the response is not OK, show an error message
        alert(data.message);
        return;
      }

      console.log(data); // Log the weather data for debugging

      // Determine the appropriate icon based on the weather condition code
      const icon = allIcons[data.weather[0].icon] || clear_icon;

      // Set the weather data state with the relevant information
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) { // Handle any errors that occur during the fetch
      setWeatherData(false);
      console.error("Error in fetching weather data");
    }
  };

  // useEffect hook to perform a search for the default city ("patna") when the component mounts
  useEffect(() => {
    search("patna");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        {/* Search input field */}
        <input ref={inputRef} type="text" name="search" placeholder="Search" />
        {/* Search icon button to trigger the search */}
        <img
          src={search_icon}
          alt="search_icon"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          {/* Weather icon based on the current weather */}
          <img
            src={weatherData.icon}
            className="weather-icon"
            alt="clear_icon"
          />
          {/* Display the temperature */}
          <p className="temperature">{weatherData.temperature}°C</p>
          {/* Display the location */}
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              {/* Humidity icon and value */}
              <img src={humidity_icon} alt="humidity_icon" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              {/* Wind speed icon and value */}
              <img src={wind_icon} alt="wind_icon" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></> // Render nothing if weatherData is not available
      )}
    </div>
  );
};

export default Weather; // Export the Weather component as default
