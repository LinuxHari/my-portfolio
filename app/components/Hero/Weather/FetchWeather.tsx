import Weather from "./Weather";

async function getData() {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=bulk`,
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ locations: [{ q: "Tiruchirappalli" }] }),
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    return null;
  }
}

async function FetchWeather() {
  const data = await getData();

  if(!data)
    return null

  const weather = data.bulk[0].query.current;
  const temp = weather.temp_c;
  const icon = weather.condition.icon;

  return <Weather temp={temp} weather={weather.condition.text} icon={icon} />;
}
export default FetchWeather;
