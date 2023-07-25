import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "./src/Screens/PostsScreen";
import { useFonts } from "expo-font";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen";
import CommentScreen from "./src/Screens/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import Home from "./src/Screens/Home";
import { Button } from "react-native";

const MainStack = createStackNavigator();
const headerHide =(route)=> route.name === "Profile" ? true : false;

export default function App() {
  const [fontsloaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Black.ttf"),
  });

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen 
        name="Registration" 
        component={RegistrationScreen} 
        options={{
          headerShown: false,
        }}
        />
        <MainStack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{
          headerShown: false,
        }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            title: "Публікації",
            headerStyle: {
              backgroundColor: "white",
              borderBottomColor: "rgba(0, 0, 0, 0.3)",
              borderBottomWidth: 1,
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontWeight: 500,
              fontSize: 17,
              lineHeight: 22,
            },
            headerTitleAlign: "center",
            headerShown: false,
            headerLeft: () => null,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
                color="#fff"
              />
            ),
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
