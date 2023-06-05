import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = ({ props }) => {

  const handleCityChange = useCallback((city) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?${{ city }}&lon={lon}&appid={9c70c6eb0daf4a63afd3834b7049aab5}`)
      .then(res => res.json())
      .then(data => {
        const weatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main
        };
        console.log(weatherData);
      });
  });
  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;