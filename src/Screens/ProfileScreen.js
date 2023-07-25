import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PhotoBg from "../images/PhotoBg.jpg";
import Add from "../images/add.png";
import MessageIcon from "../images/message-circle.png";
import ThumbsUpIcon from "../images/thumbs-up.png";
import MapIcon from "../images/mapPin.png";
import ForestPic from "../images/image-1.jpg";
import SunsetPic from "../images/content-1.jpg";
import HousePic from "../images/house.jpg";
import { Feather } from '@expo/vector-icons'; 
import UserPic from "../images/user.jpg"
const ProfileScreen = () => {
  return (
    <ImageBackground
      source={PhotoBg}
      style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
      imageStyle={{ flex: 1 }}
    >
      <View style={styles.profileContainer}>
        <View style={styles.titleBox}>
          <View style={styles.userPicContainer}>
            <Image source={UserPic} style={{ borderRadius:16, }}/>
            <TouchableOpacity style={styles.addUserPic}>
              <View>
                <Image source={Add} style={{ width: 25, height: 25 }} />
              </View>
            </TouchableOpacity>
          </View>
          <Feather style={{position: "absolute", right: 16, top: 22,}} name="log-out" size={24} color="#BDBDBD" />
          <Text style={styles.title}>Natali Romanova</Text>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.postBlock}>
            <Image source={ForestPic} style={styles.mainPostImage} />
            <Text style={styles.textUnder}>Ліс</Text>
            <View style={styles.infoContainer}>
              <View style={styles.statistic}>
                <View style={styles.iconBar}>
                  <Image
                    source={MessageIcon}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>8</Text>
                </View>
                <View style={styles.iconBar}>
                  <Image
                    source={ThumbsUpIcon}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>153</Text>
                </View>
              </View>
              <View style={styles.iconBar}>
                <Image source={MapIcon} style={{ width: 24, height: 24 }} />
                <Text style={styles.textLocation}>Ukraine</Text>
              </View>
            </View>
          </View>

          <View style={styles.postBlock}>
            <Image source={SunsetPic} style={styles.mainPostImage} />
            <Text style={styles.textUnder}>Захід на Чорному морі</Text>
            <View style={styles.infoContainer}>
              <View style={styles.statistic}>
                <View style={styles.iconBar}>
                  <Image
                    source={MessageIcon}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>3</Text>
                </View>
                <View style={styles.iconBar}>
                  <Image
                    source={ThumbsUpIcon}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>200</Text>
                </View>
              </View>
              <View style={styles.iconBar}>
                <Image source={MapIcon} style={{ width: 24, height: 24 }} />
                <Text style={styles.textLocation}>Ukraine</Text>
              </View>
            </View>
          </View>

          <View style={styles.postBlock}>
            <Image source={HousePic} style={styles.mainPostImage} />
            <Text style={styles.textUnder}>Старий будиночок у Венеції</Text>
            <View style={styles.infoContainer}>
              <View style={styles.statistic}>
                <View style={styles.iconBar}>
                  <Image
                    source={MessageIcon}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>50</Text>
                </View>
                <View style={styles.iconBar}>
                  <Image
                    source={ThumbsUpIcon}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>200</Text>
                </View>
              </View>
              <View style={styles.iconBar}>
                <Image source={MapIcon} style={{ width: 24, height: 24 }} />
                <Text style={styles.textLocation}>Italy</Text>
              </View>
            </View>
          </View>

          <View style={styles.postBlock}>
            <Image source={ForestPic} style={styles.mainPostImage} />
            <Text style={styles.textUnder}>Ліс</Text>
            <View style={styles.infoContainer}>
              <View style={styles.statistic}>
                <View style={styles.iconBar}>
                  <Image
                    source={MessageIcon}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>8</Text>
                </View>
                <View style={styles.iconBar}>
                  <Image
                    source={ThumbsUpIcon}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>153</Text>
                </View>
              </View>
              <View style={styles.iconBar}>
                <Image source={MapIcon} style={{ width: 24, height: 24 }} />
                <Text style={styles.textLocation}>Ukraine</Text>
              </View>
            </View>
          </View>
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
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  postBlock: {
    width: "100%",
    marginTop: 32,
  },
  mainPostImage: {
    width: "100%",
    maxHeight: 240,
    borderRadius: 8,
  },
  textUnder: {
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statistic: {
    flexDirection: "row",
    columnGap: 24,
  },
  iconBar: {
    flexDirection: "row",
    verticalAlign: "center",
  },
  textLocation: {
    textDecorationLine: "underline",
  },
});

export default ProfileScreen;
