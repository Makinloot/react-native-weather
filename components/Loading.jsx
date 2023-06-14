import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={{ color: "red" }}>Loading</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    backgroundColor: '#000000'
  },
});

export default Loading;