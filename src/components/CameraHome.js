import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Loader } from "./Loader";
import CameraIcon from "../images/camera-white.png";
import { useIsFocused } from "@react-navigation/native";

const CameraHome = ({ getPhoto }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [creatingPhoto, setCreatingPhoto] = useState(false);

  const isFocused = useIsFocused()

  useEffect(() => {
      (async () => {
        await MediaLibrary.requestPermissionsAsync();
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
      return () => {
        setHasPermission(null);
      }
  }, [isFocused]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let handleTakePhoto = async () => {
    setCreatingPhoto(true);
    if (cameraRef) {
      try {
        let { uri } = await cameraRef.current.takePictureAsync();
        console.log("uri", uri);
        getPhoto(uri);
      } catch (error) {
        console.log(error);
      }
    }
    setCreatingPhoto(false);
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={cameraRef}
        autoFocus={true}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>

          {/* this button takes a photo */}
          {creatingPhoto ? (
            <Loader />
          ) : (
            <Pressable
              style={styles.btnAddPhotoStyles}
              onPress={handleTakePhoto}
            >
              <Image source={CameraIcon} />
            </Pressable>
          )}
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%",
  },
  photoView: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  flipContainer: {
    position: "absolute",
    flex: 0.1,
    alignSelf: "flex-end",
    bottom: 0,
  },
  btnAddPhotoStyles: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 3,
  },
});

export default CameraHome;
