import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      age,
      address,
      city,
      phone
    };

    fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.ok) {
        console.log("User created successfully!");
        // Aqui você pode adicionar qualquer lógica adicional após o sucesso
      } else {
        console.error("Failed to create user:", response.status);
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  return (
    <View style={styles.container}>
      <Title title="Create" />

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
        <Text>Create User</Text>
      </TouchableOpacity>
    </View>
  );
}