//import * as React from 'react';
//import logo from "./assets/react.svg";
import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({Info}){
    const INIT_URL = 
    "https://images.unsplash.com/photo-1594652010347-788d009508c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAINY_URL=
    "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const SUNNY_URL=
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SE9UJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL=
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    return (
        <div>
        <div className='CardContainer'>
            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 100 }}
                    image={Info.humidity>80?RAINY_URL:Info.temp>16?SUNNY_URL:COLD_URL} // Change to 'logo' for local image
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Weather Info
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div>
                            <p>Temperature is {Info.temp}°C</p>
                            <p>City is {Info.city}</p>
                            <p>The Weather Feels Like {Info.feels_like}°C</p>
                            <p>Humidity is {Info.humidity}%</p>
                            <p>Min Temperature is {Info.temp_min}°C</p>
                            <p>Max Temperature is {Info.temp_max}°C</p>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}