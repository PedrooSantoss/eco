import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
import styles from "./styles";

import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Create() {
  const [Image, setImage] = useState("");
  const [Hashtag, setHastag] = useState("");


  const handleSubmit = () => {
    // Aqui você pode enviar os dados para o servidor ou fazer outras operações necessárias
    console.log("Image:", Image);
    console.log("Email:", Hashtag);

    // Lógica para salvar o usuário
  };

  return (
    <View style={styles.container}>
      <Title title="Create Post" />

      
      <TextInput
        style={styles.input}
        placeholder="Image"
        onChangeText={setImage}
        value={Image}
      />
      <TextInput
        style={styles.input}
        placeholder="Hashtag"
        onChangeText={setHastag}
        value={Hashtag}
      />

      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Post</Text>
      </TouchableOpacity>

      <TouchButton route="Profile" title="Go to Profile" />
    </View>
  );
}