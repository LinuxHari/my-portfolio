interface WeatherProps {
  temp: number;
  weather: string;
  weatherCode: number;
}

type WeatherCodes = {
  [key: number]: string;
};

const getWeatherDescription = (code: number): string => {
  const weatherCodes: WeatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return weatherCodes[code] || "Unknown";
};

const getWeather = async (): Promise<WeatherProps | null> => {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=10.7905&longitude=78.7047&current=temperature_2m,weather_code&timezone=Asia%2FKolkata`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data =    await  res.json();
    const current = data.current;
    const temp = Math.round(current.temperature_2m);
    const weatherCode = current.weather_code;

    return {
      temp,
      weather: getWeatherDescription(weatherCode),
      weatherCode
    };
  } catch (err) {
    console.error("Weather fetch error:", err);
    return null;
  }
};
export default getWeather;
