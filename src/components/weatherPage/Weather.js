import React from 'react';

const Weather = ({ data }) => {
    var celcius = Math.round(parseFloat(data.main.temp) - 273.15);
    return (
        <div className="main-container">
        <div className='data-container'>
            {/* <div className='temp'>{`${celcius}°`}</div>
            <div className='description'>{data.weather[0].description}</div>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
            <div className='location'>{data.name}</div> */}
            <div className='fist-container'>
                <div className='temp'>{`${celcius}°`}</div>
                <div className='description'>{data.weather[0].description}</div>
                <div className="line"></div>
                <div className='location'>{data.name}</div>
            </div>
            <div className='second-container'>
            <img className="image" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
            </div>
        </div>
        </div>
    )
}

export default Weather;