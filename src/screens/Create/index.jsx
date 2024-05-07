import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';


const CreatePost = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    const newPost = { content, image, hashtag };
    setPosts(prevPosts => [...prevPosts, newPost]);
    setContent('');
    setImage('');
    setHashtag('');
    console.log('Post criado:', newPost);
    console.log('Todos os posts:', posts);
  };

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
      onPress={handlePost}
    >
      <Text style={styles.buttonText}>Post</Text>
    </TouchableOpacity>
  </View>
</View>
  );
}

export default CreatePost;