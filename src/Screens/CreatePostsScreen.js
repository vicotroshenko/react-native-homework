import TrashIcon from "../images/trash.png";
import MapIcon from "../images/mapPin.png";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";
import uuid from "react-native-uuid";
import { TextInput } from "react-native-gesture-handler";
import ButtonPrimery from "../components/ButtonPrimery";
import { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { updateDataInFirestore } from "../redux/storage/operations";
import CameraHome from "../components/CameraHome";
import { useIsFocused } from "@react-navigation/native";


const CreatePostsScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);

  const isFocused = useIsFocused();
  

  const user = useSelector((state) => state.auth.user);
  const { loadId } = useSelector((state) => state.storage);

  const dispatch = useDispatch();


  useEffect(() => {
   
      (async () => {
        
        let location = await Location.getCurrentPositionAsync({});
        const [{ city, country, subregion }] = await Location.reverseGeocodeAsync(
          location.coords
        );
        const loc = `${city}, ${subregion}, ${country}`;
        setLocation(loc);
      })();
    

  }, [isFocused]);

  const handlePhoto = (uriPhoto) => {
    setPhoto(uriPhoto);
  };

  const savePhoto = async () => {
    try {
      await MediaLibrary.createAssetAsync(photo);
      Alert.alert("Picture saved in the library!");
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = () => {
    if (photo.length === 0 || photo === null) return;
    const postInfo = {
      id: uuid.v4(),
      photo,
      name,
      adress,
      location,
      comments: [],
    };
    dispatch(updateDataInFirestore(user.login, loadId, postInfo));
    navigation.navigate("Posts");
    setName("");
    setAdress("");
    setPhoto(null);
  };

  const deletePic = () => {
    setPhoto(null);
    setName("");
    setAdress("");
  };

  const showLocation = () => {
    navigation.navigate("Map", { adress });
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.box}
      >
        <View style={styles.photoContainer}>
          {photo ? (
            <Image
              source={{ uri: photo }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <CameraHome getPhoto={handlePhoto} />
          )}
        </View>
        <Text style={styles.editPhotoText} onPress={savePhoto}>
          Завантажте фото
        </Text>
        <View style={styles.labelInputName}>
          <TextInput
            placeholder="Назва..."
            style={styles.inputName}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.labelInputLocation}>
          <TouchableOpacity
            onPress={showLocation}
            style={styles.inputLocationIcon}
          >
            <Image source={MapIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder="Місцевість..."
            style={styles.inputLocation}
            value={adress}
            onChangeText={(text) => setAdress(text)}
          />
        </View>

        <ButtonPrimery
          text={"Опублікувати"}
          onText={createPost}
          disable={photo ? false : true}
        />
        <TouchableOpacity style={styles.btnDeleteStyles} onPress={deletePic}>
          <Image source={TrashIcon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  scrollContainer: {
    height: "100%",
  },
  box: {
    alignItems: "center",
    height: "160%",
    paddingTop: 32,
    marginBottom: 22,
  },
  photoContainer: {
    height: "50%",
    width: "100%",
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    border: "1px solid #E8E8E8",
    overflow: "hidden",
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
    zIndex: 3,
  },
  editPhotoText: {
    color: "#BDBDBD",
  },
  btnDeleteStyles: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 120,
  },
  btnEditPhotoStyles: {
    backgroundColor: "transparent",
  },
});

export default CreatePostsScreen;
