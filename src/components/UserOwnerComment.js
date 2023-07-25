import { Image, StyleSheet, Text, View } from "react-native";


const UserOwnerContainer = ({photo, text, date}) => {
	return (
		<View style={styles.commentContainer}>
			<View style={styles.comment}>
				<Text style={styles.commentText}>{text}</Text>
				<Text style={styles.commentDate}>{date}</Text>
			</View>
			<View style={styles.userLogo}>
				<Image source={photo} style={styles.image}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	commentContainer:{
		width: "100%",
		flexDirection: "row",
		columnGap: 16,
	},
	userLogo: {
		width: 28,
		height: 28,
		borderRadius: 100,
		overflow: "hidden",
		alignSelf:"flex-start",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	comment: {
		maxWidth: 299,
		backgroundColor: "rgba(0, 0, 0, 0.03)",
		padding: 16,
	},
	commentText:{
		fontSize: 13,
		lineHeight: 18,
		paddingBottom: 8,
		
	},
	commentDate: {
		fontSize: 10,
		lineHeight: 12,
		color: "#BDBDBD",
		textAlign: "left",
	},
})

export default UserOwnerContainer;