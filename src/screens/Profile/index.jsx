import React from "react";
import { View, Text, ImageBase, Image} from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";


export default function Profile({ route }) {
  const { data } = route.params;
  console.log(`dados do objeto`,data);
  const {image, nickname, email, date, phone, arroba} = data

  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <View style={styles.user}>
          <View style={styles.userInfo}>
            <Image 
              style={styles.img}
              source={{
                uri: `${image}`
              }}
          />
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.name}>{nickname}</Text>
          </View>
        </View>
          <View style={styles.userData}>
            <View style={styles.coluna}>
              <View style={styles.userInfo}>
                <Text style={styles.info}>{email}</Text>
              </View>
        
              <View style={styles.userInfo}>
                <Text style={styles.info}>{phone}</Text>
              </View>
            </View>
            <View style={styles.coluna2}>
              <View style={styles.userInfo}>
                <Text style={styles.info}>{date}</Text>
              </View> 

              <View style={styles.userInfo}>
                <Text style={styles.info}>{arroba}</Text>
              </View>
            </View>
            
          </View>
      </View>
    </View>
  );
}