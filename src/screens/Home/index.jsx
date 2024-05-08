import { View, Text, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";




export default function Home() {
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
            <Image
        style={styles.stretch}
        source={require('../../../assets/logo.png')}
      />
      <Text style={styles.text}>Recommended to you</Text>

      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/profile.png')}
      />

    </View>
  );
}