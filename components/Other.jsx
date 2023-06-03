import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";

const Other = ({ current, forecast }) => {

  const { astro, day } = forecast.forecastday[0];
  // air quality based on us-epa-index
  const airQuality = () => {
    let quality;
    const airIndex = current.air_quality['us-epa-index']
    if(airIndex < 101) quality = 'Good'
    else if(airIndex > 101 && airIndex < 201) quality = 'Moderate'
    else if(airIndex > 201 && airIndex < 301) quality = 'Unhealthy'
    else if(airIndex > 301 && airIndex < 401) quality = 'Very unhealthy'
    else quality = 'Hazardous'

    return quality
  }

  return (
    <>
      <View style={styles.container}>
        {current.is_day ? (
          <Card
            icon="moon"
            title="sunset"
            primary={astro.sunset}
            secondary={`Sunrise: ${astro.sunrise}`}
          />
        ) : (
          <Card
            icon="sun"
            title="sunrise"
            primary={astro.sunrise}
            secondary={`Sunset: ${astro.sunset}`}
          />
        )}
        <Card
          icon="thermometer"
          title="feels like"
          primary={`${Math.floor(current.temp_c)}°`}
          secondary={`Wind ${current.wind_kph} k/ph`}
        />
      </View>
      <View style={styles.container}>
        <Card
          title="rain"
          icon="cloud-rain"
          primary={`${day.daily_chance_of_rain}%`}
          secondary={`Snow ${day.daily_chance_of_snow}%`}
        />
        <Card
          title="visibility"
          icon="eye"
          primary={`${day.avgvis_km} km`}
          secondary={`Air: ${airQuality()}`}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
})

export default Other;
