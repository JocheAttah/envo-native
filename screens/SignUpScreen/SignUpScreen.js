import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";
import { logo } from "../../assets";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full name"
          autoFocus
          type="name"
          value={name}
          onChangeText={(text) => setName(text)}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          inputStyle={styles.input}
          //   onSubmitEditing={signIn}
        />
        <View style={styles.actionButtonsContainer}>
          <Button
            onPress={() => navigation.navigate("SignUp")}
            containerStyle={{ marginBottom: 5 }}
            title="Sign Up"
            buttonStyle={{ backgroundColor: "#3D67F2", paddingVertical: 15}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    marginTop: 90,
    width: 80,
    height: 80,
  },
  inputContainer: {
    width: "85%",
    marginTop: 50,
  },
  input: {
    backgroundColor: "#F2F5FA",
    paddingLeft: 16,
    paddingVertical: 15,
    borderWidth: 0,
  },
  actionButtonsContainer: {
    marginTop: 16,
  },
});
