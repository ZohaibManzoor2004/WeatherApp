import SearchBox from "./SearchBox";
import { useState } from "react";
import InfoBox from "./InfoBox";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState(
        {
            city: "Naran",
            feels_like: 13.8,
            humidity: 60,
            pressure: 1018,
            temp: 13.9,
            temp_max: 13.9,
            temp_min: 13.9,
            weather: "Haze"
        }
    );
    
    let UpdateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
        //console.log("Updated newInfo", newInfo)
        //console.log("City is ",newInfo.city)
    }
    //console.log(weatherInfo);
    return(
        <div>
            <h1>The Weather Predictor App</h1>
            <SearchBox UpdateInfo={UpdateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}