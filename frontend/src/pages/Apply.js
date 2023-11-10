import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const Apply = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C5C2D",
  },
});

export default Apply;
