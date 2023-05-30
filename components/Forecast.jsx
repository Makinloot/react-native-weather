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
          <View style={styles.row} key={i}>
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
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#130f0f80',
    borderRadius: 10,
  },
  dayText: {
    flex: .4,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: 'white'
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    flex: .12,
    width: 44,
    height: 44,
  },
  tempRange: {
    flex: .4,
    marginRight: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    text: {
      fontWeight: "bold",
      color: 'white'
    },
    degree: {
      position: "absolute",
      right: -6,
      top: -2,
      color: 'white'
    },
  },
});

export default Forecast;
