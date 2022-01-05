import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Explorer() {
  return (
    <View style={styles.container}>
      <Text> Explorer Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Explorer;
