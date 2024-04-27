import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./styles";

import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    // Simulação de autenticação básica
    if (email === "user@example.com" && password === "password") {
      setError("");
      console.log("Login successful!");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <Title title="Sign In" />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>

      <TouchButton route="Home" title="Go to Home" />
    </View>
  );
}