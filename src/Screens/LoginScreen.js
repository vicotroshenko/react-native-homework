import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground
} from "react-native";
import ButtonPrimery from "../components/ButtonPrimery";
import PhotoBg from "../images/PhotoBg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loginDB } from "../redux/auth/operation";
import { Loader } from "../components/Loader";



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
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

  const onLogin = () => {
    dispatch(loginDB(email, password));
  };


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
              <Text style={styles.title}>Увійти</Text>
            </View>
            <View style={styles.form}>
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
              <ButtonPrimery text={"Увійти"} onText={onLogin} />
              <View>
                <Text 
                  style={styles.linkText}
                  onPress={() => navigation.navigate("Registration")}
                  >
                  Немає акаунту? Зареєструватися
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
    height: 489,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 132,
    paddingTop: 32,
    fontFamily: "Roboto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  keyBoardWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleBox: {
    position: "relative",
    paddingBottom: 32,
    textAlign: "center",
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

export default LoginScreen;
