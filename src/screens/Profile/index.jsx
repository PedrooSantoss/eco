import React from "react";
import { View, Text} from "react-native";
import styles from "./styles";

import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;
  const { name, email, age, address, city, phone } = data;

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <View style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>{name}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{email}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>{age}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>{address}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>City:</Text>
        <Text style={styles.info}>{city}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>{phone}</Text>
      </View>
    </View>
  );
}