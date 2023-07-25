import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PhotoComment from "../images/content-1.jpg";
import Arrow from "../images/arrowTop.png";
import GuestIcon from "../images/userGuest.png";
import UserIcon from "../images/user.jpg";
import { TextInput } from "react-native-gesture-handler";
import ButtonSecondary from "../components/ButtonSecondary";
import UserGuestComment from "../components/UserGuestComment";
import UserOwnerContainer from "../components/UserOwnerComment";

const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.comentContainer}>
        <View style={styles.imageContainer}>
          <Image source={PhotoComment} style={styles.mainImage} />
        </View>
        <View>
          <UserGuestComment
            photo={GuestIcon}
            text={
              "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
            }
            date={"09 червня, 2020 | 08:40"}
          />
        </View>
        <View>
          <UserOwnerContainer
            photo={UserIcon}
            text={
              "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
            }
            date={"09 червня, 2020 | 09:14"}
          />
        </View>
        <View>
          <UserGuestComment
            photo={GuestIcon}
            text={"Thank you! That was very helpful!"}
            date={"09 червня, 2020 | 09:20"}
          />
        </View>
      </ScrollView>
      <View style={styles.lable}>
        <TextInput placeholder="Коментувати..." style={styles.input} />
        <View style={styles.sendBtnContainer}>
          <ButtonSecondary stylesBtn={sendComentIcon}>
            <Image source={Arrow} />
          </ButtonSecondary>
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
  },
  lable: {
    position: "relative",
    width: "100%",
    height: 66,
    paddingLeft: 16,
    paddingRight: 16,
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
});

const sendComentIcon = {
  button: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
};

export default CommentScreen;
