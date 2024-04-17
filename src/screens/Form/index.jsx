import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Form() {
  return (
    <View style={styles.container}>
      <Title title="Form" />

      <TouchButton route="Form" title="Go to Form" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}
