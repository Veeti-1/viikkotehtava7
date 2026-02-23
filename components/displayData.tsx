import React, { useState } from "react"
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
 
    return(
        <View>
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
                    getWeather
                }}
                >
                    
                </Button>
            </View>
            <View>
                <Text>Maa/kaupunki: {weather?.country}/{weather?.name}</Text>
                <Text>Lämpötila:{weather?.temp}</Text>
                <Text>tuuli m/s:{weather?.windSpeed}</Text>
                <Text>Max/Min C{weather?.highestTemp}/{weather?.lowestTemp}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#fff',
  },
  list:{
    backgroundColor: '#ffffffff',
    borderBottomWidth: 1,
    borderColor: '#ffffffff',
    padding: 16,
  },
  rowBack: {
    backgroundColor: '#ffffffff',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  input:{
    margin:5,
    width:200,
    height:50,
    borderColor:'#000000',
    borderWidth:1,
  },
  text:{

  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center'
  }
});