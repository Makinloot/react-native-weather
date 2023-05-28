import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const Forecast = ({ data }) => {
  const handleWeekDay = (i) => {
    let fullDate = new Date();
    fullDate.setDate(fullDate.getDate() + i);
    const currDay = fullDate.toLocaleString("en-us", { weekday: "long" });
    return currDay;
  };

  return (
    <View style={styles.container}>
      {data.map((item, i) => {
        return (
          <View style={styles.row}>
            <Text style={styles.dayText}>{handleWeekDay(i).split(",")[0]}</Text>
            <Image
              source={{
                uri: `https:${item.day.condition.icon}`,
              }}
              style={styles.image}
            />
            <View style={styles.tempRange}>
              <View style={{ position: "relative" }}>
                <Text style={styles.tempRange.text}>
                  L: {Math.floor(item.day.mintemp_c)}
                </Text>
                <Text style={styles.tempRange.degree}>&deg;</Text>
              </View>
              <View style={{ position: "relative" }}>
                <Text style={styles.tempRange.text}>
                  H: {Math.floor(item.day.maxtemp_c)}
                </Text>
                <Text style={styles.tempRange.degree}>&deg;</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    minWidth: 80,
    maxWidth: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 44,
    height: 44,
  },
  tempRange: {
    flexDirection: "row",
    gap: 10,
    minWidth: 80,
    maxWidth: 100,
    text: {
      fontWeight: "bold",
    },
    degree: {
      position: "absolute",
      right: -5,
    },
  },
});

export default Forecast;
