import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground
} from "react-native";
import Add from "../images/add.png";
import ButtonPrimery from "../components/ButtonPrimery";
import PhotoBg from "../images/PhotoBg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { writeDataToFirestore } from "../redux/storage/operations";
import { registerDB } from "../redux/auth/operation";
import { Loader } from "../components/Loader"

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading)
  
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const handelSumbit = () => {
    dispatch(registerDB(email, password, login));
    dispatch(writeDataToFirestore(login, email));
  }

  return (
    <ImageBackground
      source={PhotoBg}
      style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
      imageStyle={{ flex: 1 }}
    >
      {isLoading ? <Loader/> : <></>}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.registrationContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.keyBoardWrapper}
          >
            <View style={styles.titleBox}>
              <View style={styles.userPicContainer}>
                <TouchableOpacity style={styles.addUserPic}>
                  <View>
                    <Image source={Add} style={{ width: 25, height: 25 }} />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
            </View>

            <View style={styles.form}>
              <TextInput
                placeholder="Логін"
                style={styles.input}
                value={login}
                onChangeText={(text) => setLogin(text)}
              />
              <TextInput
                placeholder="Адреса електронної пошти"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <View>
                <TextInput
                  placeholder="Пароль"
                  style={styles.input}
                  value={password}
                  secureTextEntry={passwordVisibility}
                  onChangeText={(text) => setPassword(text)}
                />
                <Pressable
                  onPress={handlePasswordVisibility}
                  style={styles.showPassword}
                >
                  <Text style={styles.showPasswordText}>Показати</Text>
                </Pressable>
              </View>
              <ButtonPrimery text={"Зареєструватися"} onText={handelSumbit} />
              <View>
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate("Login")}
                >
                  Вже є акаунт? Увійти
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  registrationContainer: {
    height: 549,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: "Roboto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  keyBoardWrapper: {
    width: "100%",
    alignItems: "center",
  },

  titleBox: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 33,
    textAlign: "center",
  },
  userPicContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    bottom: 100,
    left: 120 - 50,
    transform: [{ translateX: -50 }],
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
  },
  form: {
    width: "100%",
    rowGap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  showPassword: {
    position: "absolute",
    right: 15,
    top: 20,
  },
  showPasswordText: {
    color: "#0000FF",
  },
  linkText: {
    textAlign: "center",
    color: "#0000FF",
  },
});

export default RegistrationScreen;
