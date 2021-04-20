import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { logo } from "../../assets";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";

export default function LoginScreen() {
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>No fonts Loaded</Text>; ///should be Apploading
  } else {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoHeader}>EVON</Text>

        <Text style={styles.paragraph}>Discover upcoming events {"\n"}near you</Text>

        <View style={styles.buttonContainer}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "white",
  },
  logo: {
    marginTop: "28.43%",
    width: 80,
    height: 80,
  },
  logoHeader: {
    marginTop: 15,
    fontFamily: "Comfortaa_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 33,

    textAlign: "center",
    letterSpacing: 0.48,
    color: "#3E476A",
  },
  paragraph:{
    marginTop: 62,
    fontSize: 18,
    textAlign:"center",

  }
});
