import { useState } from "react"
import {Weather, WeatherResponse} from '../components/displayData'
export const getWeather=async(city:String)=>{
    
    const URL = process.env.EXPO_PUBLIC_URL
    const apiKey=process.env.EXPO_PUBLIC_API_KEY
    
    try{
        const res = await fetch(`${URL}?q=${city}&appid=${apiKey}&units=metric`)
        if(!res.ok){
            console.error(`network response error: ${res.status} ${res.statusText}`)
            return;
        }
        const data:WeatherResponse = await res.json()
        return data       
       
    }catch(error){
        console.error("something went wrong: ",error)
    }

}