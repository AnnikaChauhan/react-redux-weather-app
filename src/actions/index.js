import openWeather from "../apis/openWeather";

export const fetchWeather = () => async dispatch => {
    const response = await openWeather.get('/forecast?q=london&appid=9b54ffa13641d002a298819da9bc60a9');
    dispatch({ 
        type: 'FETCH_WEATHER', 
        payload: response.data.list.filter((item) => {
            return response.data.list.indexOf(item)%8 === 0;
        })
    })
};