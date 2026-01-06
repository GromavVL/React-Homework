import { useEffect, useState } from 'react';
import { PiThermometer } from 'react-icons/pi';
import { LuWind } from 'react-icons/lu';
import styles from './CurrentWeather.module.scss';
import { getCurrentWeather } from '../../api/index';
import { tempSymbols, speedSymbols } from '../../constants/index';

function CurrentWeather () {
  const [speedUnit, setSpeedUnit] = useState('ms');
  const [tempUnit, setTempUnit] = useState('celsius');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather({ speedUnit, tempUnit })
      .then(({ data }) => {
        console.log('data :>> ', data);
        setWeather(data.current_weather);
      })
      .catch(err => console.log('err :>> ', err));
  }, [speedUnit, tempUnit]);

  return (
    <main className={styles.weatherHome}>
      <section className={styles.weatherSection}>
        <div className={styles.wrapperTemperetur}>
          <h3>Wind speed unit: </h3>
          <select
            value={speedUnit}
            onChange={e => setSpeedUnit(e.target.value)}
          >
            <option value='ms'>M/s</option>
            <option value='kmh'>Kmh</option>
          </select>

          <h3>Tempereture unit: </h3>
          <select value={tempUnit} onChange={e => setTempUnit(e.target.value)}>
            <option value='celsius'>Celsius °C</option>
            <option value='fahrenheit'>Fahrenheit °F</option>
          </select>
        </div>
        <div className={styles.wrapperTemperetur}>
          <h3 className={styles.titleWeather}>Current Weather</h3>
          {weather && (
            <>
              <p>
                <PiThermometer /> {weather.temperature}
                {tempSymbols[tempUnit]}
              </p>
              <p>
                <LuWind /> {weather.windspeed}
                {speedSymbols[speedUnit]}
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default CurrentWeather;
