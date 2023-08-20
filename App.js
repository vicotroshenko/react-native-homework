import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import Home from "./src/Screens/Home";
import { Button } from "react-native";
import MapScreen from "./src/Screens/MapScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import { Provider } from "react-redux";
import dataStore from "./src/redux/store";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIRBASE_AUTH } from "./config";
import { PersistGate } from "redux-persist/integration/react";


const MainStack = createStackNavigator();
const headerHide = (route) => (route.name === "Profile" ? true : false);


const InsideStack = createStackNavigator();


const InsideLayout = () => {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen
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
            <InsideStack.Screen name="Map" component={MapScreen} />
            <InsideStack.Screen name="Comments" component={CommentsScreen} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(User || null)
 

  const [fontsloaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Black.ttf"),
  });

  useEffect(() => {
    onAuthStateChanged(FIRBASE_AUTH, (user) => {
      setUser(user);
  }, [])
  })

  return (
    <Provider store={dataStore.store}>
       <PersistGate loading={null} persistor={dataStore.persistor}>
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Login">
            {user ? <MainStack.Screen
              name="Indside"
              component={InsideLayout}
              options={{
                headerShown: false,
              }}
            /> : 
                <>
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
                </>
            }
          </MainStack.Navigator>
        </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}
