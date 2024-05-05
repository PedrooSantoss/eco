import React, { useState } from 'react';
import { Button, TextInput, View, Text, Image } from 'react-native';
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
      <Button title="Postar" onPress={handlePost} />

      {/* Renderizar os posts */}
      {posts.map((post, index) => (
        <View key={index}>
          <Text>{post.content}</Text>
          <Image source={{ uri: post.image }} style={{width: 50, height: 50}} />
          <Text>{post.hashtag}</Text>
        </View>
      ))}
    </View>
  );
};

export default CreatePost;