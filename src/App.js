import { useEffect, useState } from 'react';
import Weather from './components/weatherPage/Weather';

function App() {

  const [city, setcity] = useState('');
  // const [temp, setTemp] = useState('');
  // const [location, setLocation] = useState('');
  // const [des, setDes] = useState('');
  const [data,setData] = useState();
  const [flag, setFlag] = useState(true);


  // const drawWeather = (d) => {
  //   var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  //   setTemp(`${celcius} deg`);
  //   setLocation(d.name);
  //   setDes(d.weather[0].description);
  // }
  const weatherHandler = async () => {
    
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4e20ff0822954a77ab94b3fcb66528b2`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setFlag(false);
      })
  }
  const reset = () => {
    setcity('');
    setFlag(true);
  }
  return (
    <div className="App">
      {   flag? 
        <>
          <input className="input" placeholder="Enter City Name" onChange={e => setcity(e.target.value)}></input>
          <button className="btn" onClick={weatherHandler} disabled = {city.trim()===''}>Check Weather</button>
        </> :
       <Weather data={data} reset={reset}/>
      }

    </div>
  );
}

export default App;
