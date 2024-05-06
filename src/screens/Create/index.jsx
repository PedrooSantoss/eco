import React, { useEffect, useState } from 'react';
import { Button, TextInput, View, Text, Image } from 'react-native';
import styles from './styles';
import postList from '../../models/Postagem/PostsList';
import Post from '../../models/Postagem/Post';
import { useNavigation } from '@react-navigation/native';

export default function CreatePost ({route}) {
  let {post, edit} = route.params;

  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation;

  useEffect(() => {
    if(edit){
      setContent(post.content);
      setImage(post.image);
      setHashtag(post.hashtag);
      setIsUpdate(true);
    }else{
      clearInputs();
    }
  }, [post, edit] );

  const handlePostAction = () => {
    if(isUpdate) {
      postList.editPost(post.id, content, image, hashtag);
      clearInputs();
    }else{
      const newPost = new Post(content, image, hashtag);
      postList.addPost(newPost);
      clearInputs();
    }
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
;
}
