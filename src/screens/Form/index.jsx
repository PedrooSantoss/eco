import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para o servidor ou fazer outras operações necessárias
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Phone:", phone);
  };

  return (
    <View style={styles.container}>
      <Title title="Form" />

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={setAge}
        value={age}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={setAddress}
        value={address}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={setCity}
        value={city}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <TouchButton route="Profile" title="Go to Profile" />
    </View>
  );
}