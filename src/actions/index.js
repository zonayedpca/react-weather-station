import axios from 'axios';

const API_KEY = '45b52714817a2a57145a20af5407037e';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},in`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
