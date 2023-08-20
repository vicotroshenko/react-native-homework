import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import UserPic from "../images/user.jpg";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataInFirestore,
  getDataFromFirestore,
} from "../redux/storage/operations";
import { useEffect } from "react";
import PostView from "../components/PostView";

const PostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user.login) {
      dispatch(getDataFromFirestore(user.login));
    }
  }, [user.login]);

  const { posts, loadId } = useSelector((state) => state.storage);

  useEffect(() => {}, [posts]);


  const removePost = (deletedItem) => {
    Alert.alert(`Do you want to delete - ${deletedItem.name}?`, "",  [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        dispatch(deleteDataInFirestore(user.login, loadId, deletedItem));
      }},
    ]);
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.userPrifile}>
        <Image
          source={UserPic}
          style={{ width: 60, height: 60, borderRadius: 16 }}
        />
        <View style={styles.userContacts}>
          <Text style={styles.textName}>{user.login}</Text>
          <Text style={styles.textEmail}>{user.email}</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ rowGap: 32 }}
        style={{ marginBottom: 100 }}
      >
        {posts.map((postD, index) => (
          <View key={index}>
            <PostView
              postDetails={postD}
              navigation={navigation}
              showLikes={false}
            />
            <TouchableOpacity
              onPress={() =>
                removePost(postD)
              }
              style={styles.btnDelete}
            >
              <AntDesign name="delete" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
  userPrifile: {
    flexDirection: "row",
    marginBottom: 32,
    columnGap: 8,
  },
  userContacts: {
    justifyContent: "center",
  },
  textName: {
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
  },
  textEmail: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  btnDelete: {
    position: "absolute",
    top: 35,
    right: 5,
    zIndex: 3,
  },
});

export default PostsScreen;
