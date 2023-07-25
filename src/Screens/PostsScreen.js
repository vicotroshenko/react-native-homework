import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import UserPic from "../images/user.jpg";

const PostsScreen =() => {
	return (
    <View style={styles.container}>
			<View style={styles.userPrifile}>
				<Image source={UserPic} style={{width: 60, height: 60, borderRadius: 16,}}/>
				<View style={styles.userContacts}>
					<Text style={styles.textName}>Natali Romanova</Text>
					<Text style={styles.textEmail}>email@example.com</Text>
				</View>
			</View>

    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginTop: 32,
	},
	userPrifile:{
		flexDirection: "row",
	},
	userContacts:{
		justifyContent: "center",
	},
	textName:{
		fontWeight: 700,
		fontSize: 13,
		lineHeight: 15,
	},
	textEmail:{
		fontSize: 11,
		lineHeight: 13,
		color: "rgba(33, 33, 33, 0.8)"
	},
});

export default PostsScreen;