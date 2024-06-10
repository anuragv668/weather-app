import './style.css';

const key = "adcbf45248bf42e6a43140624240306";
const locations = 'mumbai';


let fetcher = async (locations) => {
  const fetched = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${locations}`, {mode: 'cors'})
  const response = await fetched.json();
  const place = `${response.location.name}, ${response.location.country}`;
  console.log(response);
  console.log(place);
}

fetcher(locations);
