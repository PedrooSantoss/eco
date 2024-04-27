import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Login" />

      <TouchButton route="Home" title="Go to Home" />
      <View style={styles.user}>
        <Title title="User" />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.phone}</Text>
      </View>
    </View>
  );
}
