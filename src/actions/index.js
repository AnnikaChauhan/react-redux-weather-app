import openWeather from "../apis/openWeather";

const city = 'London';
const apiKey = '9b54ffa13641d002a298819da9bc60a9';

export const fetchWeather = () => async dispatch => {
    const response = await openWeather.get(`/forecast?q=${city}&appid=${apiKey}`);
    dispatch({ type: 'FETCH_WEATHER', payload: response.data })
};