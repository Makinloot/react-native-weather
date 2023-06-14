import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Error = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={{ color: "red" }}>Error</Text>
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

export default Error;
