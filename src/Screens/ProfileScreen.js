import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import PhotoBg from "../images/PhotoBg.jpg";
import Add from "../images/add.png";
import MessageIcon from "../images/message-circle.png";
import ThumbsUpIcon from "../images/thumbs-up.png";
import MapIcon from "../images/mapPin.png";
import { Feather } from "@expo/vector-icons";
import UserPic from "../images/user.jpg";
import { useDispatch, useSelector } from "react-redux";
import { FIRBASE_AUTH } from "../../config";
import { logOut } from "../redux/auth/authSlice";
import { logOutStore } from "../redux/storage/storageSlice";
import { useEffect } from "react";
import PostView from "../components/PostView";

const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.storage);
  const auth = FIRBASE_AUTH;
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [posts])
  


  const exit = () => {
    Alert.alert('Do you want to LogOut?', "",  [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        auth.signOut();
        dispatch(logOut());
        dispatch(logOutStore())
      }},
    ])
    ;
  }

  return (
    <ImageBackground
      source={PhotoBg}
      style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
      imageStyle={{ flex: 1 }}
    >
      <View style={styles.profileContainer}>
        <View style={styles.titleBox}>
          <View style={styles.userPicContainer}>
            <Image source={UserPic} style={{ borderRadius: 16 }} />
            <TouchableOpacity style={styles.addUserPic}>
              <View>
                <Image source={Add} style={{ width: 25, height: 25 }} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={exit} style={{ position: "absolute", right: 16, top: 22 }}>
          <Feather
            name="log-out"
            size={24}
            color="#BDBDBD"
          />
          </TouchableOpacity>

          <Text style={styles.title}>{user.login}</Text>
        </View>
        <ScrollView style={{ width: "100%" }}>
          {posts.map((postD, index) => (
            <View key={index}>
              <PostView 
                postDetails={postD}
                navigation={navigation}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    height: 449,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: "Roboto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleBox: {
    width: "100%",
    position: "relative",
    paddingTop: 92,
    justifyContent: "center",
  },
  userPicContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    bottom: 60,
    right: "50%",
    transform: [{ translateX: 60 }],
    backgroundColor: "#f6f6f6",
    borderRadius: 18,
  },
  addUserPic: {
    position: "absolute",
    bottom: 10,
    right: -15,
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 35,
    lineHeight: 35,
    textAlign: "center",
  },
});

export default ProfileScreen;
