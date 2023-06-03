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

import background from "./background";

export default function App() {
  const [latlon, setLatlon] = useState("tbilisi");

  if (latlon) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${APP_ENV_API_KEY}&q=${latlon}&days=3&aqi=yes`;
    const [data, error, loading] = useFetch(url);

    if (data.length !== 0) {
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
  bg: {
    width: "100%",
    height: "100%",
  },
});
