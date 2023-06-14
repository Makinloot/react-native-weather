import { useState, useEffect } from "react";
import * as Location from 'expo-location'
import { APP_ENV_API_KEY } from "@env";
export function useFetch() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      (async () => {
        setError(false);
        setLoading(true);
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let { latitude, longitude } = (await Location.getCurrentPositionAsync({})).coords;
        const userCoords = `${latitude},${longitude}`

        
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${APP_ENV_API_KEY}&q=${userCoords}&days=3&aqi=yes`;
        const res = await fetch(url);
        const jsonData = await res.json();
        if (res.ok) setData(jsonData);
        else setError(true);
        
        setLoading(false);
      })();
    }, []);
  
    return [data, error, loading];
}