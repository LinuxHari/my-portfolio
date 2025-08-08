import Weather from './Weather';
import getWeather from '../../../../utils/getWeather';

async function FetchWeather() {
  const weatherData = await getWeather()

  if (!weatherData)
    return <></>

  return (
    <Weather
      temp={weatherData.temp} 
      weather={weatherData.weather} 
      weatherCode={weatherData.weatherCode} 
    />
  );
}

export default FetchWeather;