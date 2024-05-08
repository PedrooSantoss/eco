
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import postList from '../../models/Postagem/PostsList';
import Post from '../../models/Postagem/Post';
import { useNavigation } from '@react-navigation/native';

export default function Create ({route}) {
  let {post} = route.params;

  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [hashtag, setHashtag] = useState("");

  const [sendConfirmation, setSendConfirmation] = useState(false);

  const navigation = useNavigation;

  

  const handlePostAction = () => {
    
      const newPost = new Post(content, image, hashtag);
      postList.addPost(newPost);
      clearInputs();
      setShowConfirmation(true);

  setTimeout(() => {
    setShowConfirmation(false);
  }, 3000);

      navigation.navigate('ProximaTela', { post: newPost });
  }

  const clearInputs = () => {
    setContent("");
    setImage("");
    setHashtag("");
  }

  return (
    <View style={styles.container}>
  <Image
    style={styles.image}
    source={require('../../../assets/egs.png')}
  />
  <Text style={styles.title}>Create Post:</Text>
  <View style={styles.subContainer}>
    <Text style={styles.label}>Content:</Text>
    <TextInput
      style={styles.largeInput}
      placeholder="Type..."
      value={content}
      onChangeText={text => setContent(text)}
    />
    <Text style={styles.label}>Image:</Text>
    <TextInput
      style={styles.input}
      placeholder="Image URL:"
      value={image}
      onChangeText={text => setImage(text)}
    />
    <Text style={styles.label}>Hashtag:</Text>
    <TextInput
      style={styles.input}
      placeholder="Hashtag"
      value={hashtag}
      onChangeText={text => setHashtag(text)}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={handlePostAction}
    >
      <Text style={styles.buttonText}>Post</Text>
    </TouchableOpacity>
  </View>
</View>
  );
}
