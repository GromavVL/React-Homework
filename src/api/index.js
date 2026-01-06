import axios from 'axios';

export const loading = async (page = 1) => {
  try {
    const response = await axios.get(`https://randomuser.me/api`, {
      params: {
        results: 14,
        seed: 'pe2025',
        page: page,
      },
    });
    return response.data.results;
  } catch (err) {
    console.log('err :>> ', err);
  }
};

const weatherAPI = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/forecast',
});

export const getCurrentWeather = ({ tempUnit, speedUnit }) => {
  return weatherAPI.get('', {
    params: {
      latitude: 52.52,
      longitude: 13.41,
      current_weather: true,       
      temperature: tempUnit,      
      windspeed: speedUnit, 
    },
  });
};

