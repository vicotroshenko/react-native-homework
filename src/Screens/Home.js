import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            return <Feather name="user" size={size} color={color} />;
          } else if (route.name === "Posts") {
            return <AntDesign name="appstore-o" size={size} color={color} />;
          } else if (route.name === "Create Post") {
            return (
              <View style={styles.addBtn}>
                <Ionicons
                  name="add"
                  size={24}
                  color="white"
                  style={{ textAlign: "center" }}
                />
              </View>
            );
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
					title: "Публікації",
          headerShown: true,
					headerTitleAlign: "center",
          headerRight: () => (
              <Feather name="log-out" size={24} color="#BDBDBD" />
          ),
        }}
      />
      <Tabs.Screen
        name="Create Post"
        component={CreatePostsScreen}
        options={{
          headerShown: true,
          backBehavior: "history",
          tabBarStyle: { display: "none" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          backBehavior: "history",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: {
    height: 40,
    width: 70,
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Home;
