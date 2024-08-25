


# Weather Forecast Dashboard

## Overview

The Weather Forecast Dashboard is a web application that provides real-time weather information for any city worldwide. It is built using React and styled with Tailwind CSS. The application allows users to search for weather data by entering a city name and displays current temperature, humidity, wind speed, and an icon representing the weather conditions.

## Features

- **Real-time Weather Data:** Get up-to-date weather information for any city worldwide.
- **Search Functionality:** Enter a city name to view its weather conditions.
- **Weather Icons:** Display weather-specific icons based on the current conditions (clear, cloudy, rainy, etc.).
- **Responsive Design:** The dashboard is responsive and adjusts to various screen sizes.
- **Error Handling:** Provides feedback if the city name is invalid or if there's an issue retrieving data.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Developer-Abhi-stack/Weather_App.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Weather-App
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the root of the project.
   - Add your OpenWeatherMap API key:
     ```
     VITE_APP_ID="0e85d3ef1acdd29c790ea6fcd817ee3d"
     ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open the application:**
   - The application should be running at `http://localhost:3000` by default.

## Usage

1. **Search for a City:**
   - Use the search bar at the top of the page to enter a city name and press the search icon.

2. **View Weather Data:**
   - The dashboard will display the current temperature, location, weather icon, humidity, and wind speed.

3. **Default City:**
   - On initial load, the application fetches weather data for "Patna" as a default city.

## Project Structure

```
.
├── public
│   ├── assets
│   │   ├── search.png
│   │   ├── clear.png
│   │   ├── cloud.png
│   │   ├── drizzle.png
│   │   ├── rain.png
│   │   ├── snow.png
│   │   └── wind.png
│   └── index.html
├── src
│   ├── components
│   │   └── Weather.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **OpenWeatherMap API:** Provides weather data used in the application.

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
```

Replace `"Developer-Abhi-stack/Weather_App.git"` with the actual URL of your repository if you have one, and `"your_openweathermap_api_key"` with instructions specific to acquiring an API key from OpenWeatherMap. This `README.md` provides a comprehensive overview and guide for your project.

