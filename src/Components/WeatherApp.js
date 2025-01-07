import React, { useState } from 'react'
import  summer from "../images/Summer.jpg"
import winter from "../images/Winter.jpg"

const WeatherApp = () => {

    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [hemisphere, setHemisphere] = useState("");
    const [month, setMonth] = useState(()=> {return (new Date().getMonth()+1) })


    function fetchLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    setLongitude(position.coords.longitude)
                    setLatitude(position.coords.latitude)

                    if(position.coords.latitude>0){
                        setHemisphere("Northern Hemisphere")
                    }else if(position.coords.latitude<0){
                        setHemisphere("Southern Hemisphere")
                    }else{
                        setHemisphere("Equator")
                    }
                }
            )
        }
    }
  return (
    <div>
        <button onClick={fetchLocation}>fetch Location</button>
        <p>latitude: {latitude}</p>
        <p>longitude: {longitude}</p>
        <p>hemisphere: {hemisphere}</p>
        <p>Month: {month}</p>

        {
            hemisphere && (
                (hemisphere=="Northern Hemisphere" && (month>=4 && month<=10)) || 
                (hemisphere=="Southern Hemisphere" && (month<4 || month>10))
                ) 
                && 
            (
                <div>
                    <p>Summer Season</p>
                    <img src={summer} alt='summer season'/>
                </div>
            )
        }

        {
            hemisphere && (hemisphere=="Southern Hemisphere" && (month<4 || month>10)) && (
                <div>
                    <p>Winter Season</p>
                    <img src={winter} alt='winter season'/>
                </div>
            )
        }
      
    </div>
  )
}

export default WeatherApp
