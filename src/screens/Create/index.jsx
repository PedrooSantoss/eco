import React, { useEffect, useState } from 'react';
import { Button, TextInput, View, Text, Image } from 'react-native';
import styles from './styles';
import postList from '../../models/Postagem/PostsList';
import Post from '../../models/Postagem/Post';
import { useNavigation } from '@react-navigation/native';

export default function Create ({route}) {
  let {post} = route.params;

  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [hashtag, setHashtag] = useState("");

  const navigation = useNavigation;

  

  const handlePostAction = () => {
    
      const newPost = new Post(content, image, hashtag);
      postList.addPost(newPost);
      clearInputs();
   
    navigation.navigate("Post");
  }

  const clearInputs = () => {
    setIsUpdate(false);
    setContent("");
    setImage("");
    setHashtag("");
  }



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Conteúdo"
        value={content}
        onChangeText={setContent}
      />
      <TextInput
        style={styles.input}
        placeholder="Imagem"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Hashtag"
        value={hashtag}
        onChangeText={setHashtag}
      />
      <Button title="Postar" onPress={handlePostAction} />

      {/* Renderizar os posts */}
      {/*{posts.map((post, index) => (
        <View key={index}>
          <Text>{post.content}</Text>
          <Image source={{ uri: post.image }} style={{width: 50, height: 50}} />
          <Text>{post.hashtag}</Text>
        </View>
      ))}*/}
    </View>
  );
;
}
