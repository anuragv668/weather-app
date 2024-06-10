import './style.css';

const key = "adcbf45248bf42e6a43140624240306";
const place = 'mumbai';
let unit = 'celsius';

const datetime = document.querySelector('.datetime');
const location = document.querySelector('.location');
const temperature = document.querySelector('.temperature');


let fetcher = async (unit, locations) => {
  const fetched = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${locations}`, {mode: 'cors'})
  const response = await fetched.json();
  const place = `${response.location.name}, ${response.location.country}`;
  const tempc = `${response.current.temp_c}`;
  const tempf = `${response.current.temp_c}`;
  const time = `${response.current.last_updated}`;

  datetime.textContent = time;
  location.textContent = place;
  if (unit === 'celsius') {
    temperature.textContent = `${tempc}°C`;
  } else {
  temperature.textContent = `${tempc}°F`
  }
}

fetcher(unit, place);
