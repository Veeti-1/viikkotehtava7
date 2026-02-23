import { useState } from "react"
import {Weather, WeatherResponse} from '../components/displayData'
export const getWeather=async(city:String)=>{
    const[weather,setWeather] = useState<Weather>()
    const URL = process.env.EXPO_PUBLIC_URL
    const apiKey=process.env.EXPO_PUBLIC_API_KEY
    
    try{
        const res = await fetch(`${URL}?=${city}&appid=${apiKey}&units=metric`)
        if(!res.ok){
            console.error(`network response error: ${res.status} ${res.statusText}`)
            return;
        }
        const data:WeatherResponse = await res.json()
        setWeather({
            country: data.sys.country,
            name: data.name,
            temp:data.main.temp.toString(),
            windSpeed: data.wind.speed.toString(),
            highestTemp: data.main.temp_max.toString(),
            lowestTemp: data.main.temp_min.toString(),


            
        })
       
       
    }catch(error){
        console.error("something went wrong: ",error)
    }

}