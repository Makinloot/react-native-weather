import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import { useFetch } from "./useFetch/useFetch";
import { APP_ENV_API_KEY } from '@env'
import Hourly from "./components/Hourly";

export default function App() {
  const [latlon, setLatlon] = useState("paris");
  // navigator.geolocation.getCurrentPosition(position => {
  //   const {latitude, longitude} = position.coords
  //   const stringifyCoords = `${latitude},${longitude}`
  //   setLatlon(stringifyCoords)
  // })

  if (latlon) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${APP_ENV_API_KEY}&q=${latlon}&days=3&aqi=yes`;
    const [data, error, loading] = useFetch(url);

    if(data.length !== 0){

      const { location, current, forecast } = data;

      return (
        <SafeAreaView style={styles.container}>
          <Header
            name={location.name}
            temp={Math.round(current.temp_c)}
            minTemp={Math.round(forecast.forecastday[0].day.mintemp_c)}
            maxTemp={Math.round(forecast.forecastday[0].day.maxtemp_c)}
            condition={current.condition.text}
          />
          <Hourly data={forecast.forecastday[0].hour} />
        </SafeAreaView>
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>No data</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
});
