import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import { useFetch } from "./useFetch/useFetch";
import { APP_ENV_API_KEY } from "@env";
import Hourly from "./components/Hourly";
import Forecast from "./components/Forecast";
import Card from "./components/Card";

export default function App() {
  const [latlon, setLatlon] = useState("washington");

  if (latlon) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${APP_ENV_API_KEY}&q=${latlon}&days=3&aqi=yes`;
    const [data, error, loading] = useFetch(url);

    if (data.length !== 0) {
      const { location, current, forecast } = data;
      // console.log(current, forecast)
      return (
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor: 'grey'}}
        >
          <SafeAreaView style={styles.container}>
            <Header
              name={location.name}
              temp={Math.round(current.temp_c)}
              minTemp={Math.round(forecast.forecastday[0].day.mintemp_c)}
              maxTemp={Math.round(forecast.forecastday[0].day.maxtemp_c)}
              condition={current.condition.text}
            />
            <Hourly data={forecast.forecastday[0].hour} />
            <Forecast data={forecast.forecastday} />
            <View style={styles.containerDetails}>
              {current.is_day ? (
                <Card
                  icon="moon"
                  title="sunset"
                  primary={forecast.forecastday[0].astro.sunset}
                  secondary={`Sunrise: ${forecast.forecastday[0].astro.sunrise}`}
                />
              ) : (
                <Card
                  icon="sun"
                  title="sunrise"
                  primary={forecast.forecastday[0].astro.sunrise}
                  secondary={`Sunset: ${forecast.forecastday[0].astro.sunset}`}
                />
              )}
              <Card
                icon="thermometer"
                title="feels like"
                primary={`${Math.floor(current.temp_c)}°`}
                secondary={`Wind ${current.wind_kph} k/ph`}
              />
            </View>
          </SafeAreaView>
        </ScrollView>
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
  containerDetails: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
