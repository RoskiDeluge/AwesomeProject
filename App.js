import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";

export default function ButtonPress() {
  return (
    <View style={styles.container}>
      <View style={styles.take}>
        <Button
          onPress={() => {
            alert("You pressed the Take button!");
          }}
          title="Take"
        />
      </View>
      <View style={styles.give}>
        <Button
          onPress={() => {
            alert("You pressed the Give button!");
          }}
          title="Give"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfd96",
    alignItems: "center",
    justifyContent: "center",
  },
  take: {
    backgroundColor: "#fff",
  },
  give: {
    backgroundColor: "lightgray",
  },
});
