import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import { logo } from "../../assets";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import LinearGradient from "react-native-linear-gradient";

export default function HomeScreen({ navigation }) {
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

        <Text style={styles.paragraph}>
          Discover upcoming events {"\n"}near you
        </Text>

        <View style={styles.buttonContainer}>
          <View style={styles.actionButtonsContainer}>
            <Button
              onPress={() => navigation.navigate("SignUp")}
              containerStyle={{marginBottom: 5}}
              title="Sign Up"
              buttonStyle={{backgroundColor: "#3D67F2"}}
              
            />
            <Button
              onPress={() => navigation.navigate("Login")}
              containerStyle={styles.button}
              type="outline"
              title="Log in"
            />
          </View>
          <View style={styles.skipButtonContainer}>
            <Button
              onPress={() => navigation.navigate("#")}
              containerStyle={styles.button}
              type="clear"
              title="Skip for now"
            />
          </View>
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
  paragraph: {
    marginTop: 62,
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 140,
    width: "80%",
    flex: 1,
  },
  actionButtonsContainer: {
    paddingBottom: 30,
  },
  button: {
    height: 48,
    marginTop: 10,
  },
});
