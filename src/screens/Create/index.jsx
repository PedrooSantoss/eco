import { View } from "react-native";

import styles from "./style";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Create() {
  return (
    <View style={styles.container}>
      <Title title="Create" />

      <TouchButton route="Create" title="Go to Create" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}