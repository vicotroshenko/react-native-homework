import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import CameraIcon from "../images/camera-white.png";
import TrashIcon from "../images/trash.png";
import MapIcon from "../images/mapPin.png";
import ImageForest from "../images/image-1.jpg";
import { TextInput } from "react-native-gesture-handler";
import ButtonPrimery from "../components/ButtonPrimery";
import ButtonSecondary from "../components/ButtonSecondary";
import { useState } from "react";
import ImageContainer from "../components/ImageContainer";

const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  return (
   <View style={styles.container}>
     <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.box}
    >
      <ImageContainer photo={ImageForest}>
        <View style={styles.btnContainer}>
          <ButtonSecondary stylesBtn={btnAddPhotoStyles}>
            <Image source={CameraIcon} />
          </ButtonSecondary>
        </View>
      </ImageContainer>
      <ButtonSecondary stylesBtn={btnEditPhotoStyles}>
        <Text style={styles.editPhotoText}>Завантажте фото</Text>
      </ButtonSecondary>
      <View style={styles.labelInputName}>
        <TextInput
          placeholder="Назва..."
          style={styles.inputName}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.labelInputLocation}>
        <Image source={MapIcon} style={styles.inputLocationIcon} />
        <TextInput
          placeholder="Місцевість..."
          style={styles.inputLocation}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>
      <View style={styles.btnDelete}>
      <ButtonPrimery text={"Опублікувати"} />




        <ButtonSecondary stylesBtn={btnDeleteStyles}>
          <Image source={TrashIcon} />
        </ButtonSecondary>
      </View>
    </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  scrollContainer: {
    height: "20%",
  },
  box:{
    minHeight: "100%",
  },
  btnContainer: {
    position: "absolute",
    verticalAlign: "center",
    align: "center",
    zIndex: 3,
  },
  labelInputName: {
    width: "100%",
    marginTop: 32,
  },
  inputName: {
    height: 50,
    width: "100%",
    fontSize: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  labelInputLocation: {
    position: "relative",
    width: "100%",
    marginTop: 16,
    marginBottom: 32,
  },
  inputLocation: {
    height: 50,
    fontSize: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingLeft: 28,
  },
  inputLocationIcon: {
    position: "absolute",
    top: 13,
    left: 0,
    width: 24,
    height: 24,
  },
  editPhotoText: {
    color: "#BDBDBD",
  },
  btnBox: {
    height: 211,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "yellow"

  }
});

const btnDeleteStyles = {
  button: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
};

const btnEditPhotoStyles = {
  button: {
    backgroundColor: "transparent",
  },
};

const btnAddPhotoStyles = {
  button: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default CreatePostsScreen;
