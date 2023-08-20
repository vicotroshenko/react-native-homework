import { Image, ScrollView, StyleSheet, Pressable, View, TouchableOpacity, Alert } from "react-native";
import Arrow from "../images/arrowTop.png";
import UserIcon from "../images/user.jpg";
import { TextInput } from "react-native-gesture-handler";
import UserOwnerContainer from "../components/UserOwnerComment";
import { useEffect, useState } from "react";
import currentDate from "../helpers/currentDate";
import { useDispatch, useSelector } from "react-redux";
import uuid from 'react-native-uuid';
import { addComment } from "../redux/storage/operations";

const CommentScreen = ({ route }) => {
  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();
  const { id, photo } = route.params;
  const {login} = useSelector(state => state.auth.user)
  const {posts, loadId} = useSelector(state => state.storage);
  
  useEffect(() => {
    console.log(posts)
  }, [posts])


  const createComment = () => {
    if(commentText.length === 0) return;
    const index = posts.findIndex(post=> post.id === id);
    posts[index].comments = [...posts[index].comments, {login, comment: commentText, time: currentDate(), id: uuid.v4()}];
    dispatch(addComment(login, loadId, posts))
    setCommentText("")
    
  }
  const deleteComment = (idComment, text)=> {
    Alert.alert('Delete comment?', text,  [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        const index = posts.findIndex(post=> post.id === id);
        posts[index].comments.splice(index, 1)
        dispatch(addComment(login, loadId, posts));
      }},
    ])

  }

  const getPost = () => {
    return posts.find(post => post.id === id);
  }
  const c = getPost();
  console.log("ffffff", c)
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.comentContainer} style={{ width: "100%",
    height: "100%"}}>
        <View style={styles.imageContainer}>
          <Image source={{uri: photo}} style={styles.mainImage} />
        </View>

        {getPost().comments?.map((item, index)=> <Pressable key={index} onLongPress={()=>deleteComment(item.id, item.comment)}>
        <UserOwnerContainer
            photo={UserIcon}
            text={item.comment}
            date={item.time}
          /></Pressable>)}

      </ScrollView>
      <View style={styles.lable}>
        <TextInput 
          placeholder="Коментувати..." 
          style={styles.input} 
          value={commentText}
          onChangeText={(text) => setCommentText(text)}
        />
        <View style={styles.sendBtnContainer}>
          <TouchableOpacity style={styles.sendComentIcon} onPress={createComment}>
            <Image source={Arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  comentContainer: {
    rowGap: 24,
    paddingTop: 32,
    paddingBottom: 32,
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    maxHeight: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
  lable: {
    position: "relative",
    width: "100%",
    height: 66,
    paddingBottom: 16,
  },
  input: {
    height: "100%",
    width: "100%",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 16,
  },
  sendBtnContainer: {
    position: "absolute",
    top: 8,
    right: 24,
  },
  sendComentIcon:{
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  }
});


export default CommentScreen;
