import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Row = ({ hour, degree, image }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{hour.split(" ")[1].split(":")[0]}</Text>
      <Image source={{ uri: `https:${image}` }} style={styles.image} />
      <View style={styles.degreeContainer}>
        <Text style={styles.text}>{Math.floor(degree)}</Text>
        <Text style={[styles.text, styles.degreeContainer.degree]}>&deg;</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    marginVertical: 10,
    width: 44,
    height: 44,
  },
  degreeContainer: {
    position: "relative",
    degree: {
      position: "absolute",
      right: -7,
      top: -3,
    },
  },
});

export default Row;
