import { View, Text, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const Card = ({ title, icon, primary, secondary }) => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.title}>
          <Feather name={icon} style={styles.title.text} />
          <Text style={styles.title.text}>{title}</Text>
        </View>
        <Text style={styles.text}>{primary}</Text>
      </View>
      <Text style={styles.textSecondary}>{secondary}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#130f0f80",
    flex: 1,
    height: 140,
    padding: 10,
    borderRadius: 10,
    position: "relative",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,

    text: {
      textTransform: "uppercase",
      fontSize: 12,
      color: "#ffffff80",
    },
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginVertical: 5,
  },
  textSecondary: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
  },
});

export default Card;
