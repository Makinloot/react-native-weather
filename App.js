import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
} from "react-native";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch/useFetch";
import { APP_ENV_API_KEY } from "@env";
import Hourly from "./components/Hourly";
import Forecast from "./components/Forecast";
import Other from "./components/Other";
import * as Location from 'expo-location'
import background from "./background";
import Error from "./components/Error";
import Loading from "./components/Loading";

export default function App() {
  const [data, error, loading] = useFetch();

    if(error) return <Error />
    else if(loading) return <Loading />
    else if(data.current){
      const { location, current, forecast } = data;
      const iconId = data.current.condition.icon.split("/")[6].split(".")[0];
      const dayTime = data.current.condition.icon.split("/")[5];

      return (
        <ImageBackground source={background(iconId, dayTime)} style={styles.bg}>
          <SafeAreaView style={styles.container}>
            <Header
              name={location.name}
              temp={Math.round(current.temp_c)}
              minTemp={Math.round(forecast.forecastday[0].day.mintemp_c)}
              maxTemp={Math.round(forecast.forecastday[0].day.maxtemp_c)}
              condition={current.condition.text}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentInsetAdjustmentBehavior="automatic"
            >
              <Hourly data={forecast.forecastday[0].hour} />
              <Forecast data={forecast.forecastday} />
              <Other current={current} forecast={forecast} />
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: '#000000'
  },
});
