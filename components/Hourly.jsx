import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Row from "./Row";

const Hourly = ({ data }) => {
  const uniqueKey = () => Math.random() * Math.random() * Math.random();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const { time, temp_c, condition } = item;
          return <Row hour={time} degree={temp_c} image={condition.icon} />;
        }}
        horizontal
        keyExtractor={uniqueKey}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: '#130f0f80',
    borderRadius: 10,
    paddingVertical: 10,
  },
});

export default Hourly;
