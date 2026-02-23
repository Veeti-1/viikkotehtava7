import React, { use, useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Button, Pressable, ScrollView } from 'react-native';
import { getWeather } from "../api/getData";

export interface Weather{
    country:String;
    name:String;
    temp:string;
    windSpeed:String;
    highestTemp:String;
    lowestTemp:String;
    
}

export type WeatherResponse={
      name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    speed: number;
  };

}

export default function weatherScreen(){


  const [city,setCity] = useState("")
  const [weather,setWeather] = useState<Weather>()
  const [temp,setTemp]=useState("")
  const [windSpeed,setWindSpeed]=useState("")
  const [country,setCountry]=useState("")
  const[maxTemp,setmaxTemp] = useState("")
  const[minTemp,setminTemp] = useState("")


  const weatherApiCall=async(city:string)=>{
      const response = await getWeather(city)
      if(response != null){
        setTemp(response.main.temp.toString())
        setWindSpeed(response.wind.speed.toString())
        setCountry(response.sys.country)
        setmaxTemp(response.main.temp_max.toString())
        setminTemp(response.main.temp_min.toString())
      }

    }
    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder='search weather by country'>
                </TextInput>
            </View>
            <View>
                <Button
                title="search"
                onPress={()=>{
                  console.log('sss')
                    weatherApiCall(city)
                }}
                >
                    
                </Button>
            </View>
            <View style={styles.weatherContainer}>
                <Text style={styles.text}>Maa/kaupunki: {country}/{city}</Text>
                <Text style={styles.text}>Lämpötila:{temp}C</Text>
                <Text style={styles.text}>tuuli: {windSpeed}m/s</Text>
                <Text style={styles.text}>Max/Min: {maxTemp}C/{minTemp}C</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#fff',
  },
  input:{
    margin:5,
    width:200,
    height:50,
    borderColor:'#000000',
    borderWidth:1,
  },
  text:{
    margin:3,
    fontSize:20,

  },weatherContainer:{
    
    marginTop:10,
    backgroundColor:'#0000002f',
   borderRadius:2,

  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center'
  }
});