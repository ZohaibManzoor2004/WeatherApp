import TextField from '@mui/material/TextField';
//import * as React from 'react';
import Stack from '@mui/material/Stack';
import "./SearchBox.css";
import {useState} from "react";
import Button from '@mui/material/Button';
export default function SearchBox({UpdateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState(false);
    let handleChange = (event) => {
        setCity(event.target.value);
    };
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_Key="c895f6d05cfc9e4224191757216d6199";
    let complete_URL="http://api.openweathermap.org/data/2.5/weather?q=Dehli&appidc895f6d05cfc9e4224191757216d6199"
    let getWeatherInfo=async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
            let jsonResponse=await response.json()
            console.log(jsonResponse);
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                temp_max: jsonResponse.main.temp_max,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            return result;
        }catch(error){
            throw error; 
        }
    }
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log("Input city name: ", city);
            let newInfo=await getWeatherInfo();
            //console.log("newInfo ",newInfo)
            UpdateInfo(newInfo);
            setCity("");
            setError(false)
        }
        catch(err){
            setError(true)
        }
    };
    return (
        <div>
            <div className='SearchBox'>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                        id="outlined-basic"
                        label="Enter City"
                        variant="outlined"
                        required
                        value={city}
                        onChange={handleChange}
                        />
                        <Button type="submit" variant="contained">Search</Button>
                        {error && <p style={{color:"red"}}>Location doesn't exists in The API</p>}
                    </Stack>    
                </form>
            </div>
        </div>
    );
}