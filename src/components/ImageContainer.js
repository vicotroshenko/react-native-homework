import { Image, StyleSheet, View } from "react-native";


const ImageContainer = ({ photo, children=null }) => {
	return (
		<View style={styles.photoContainer}>
		<Image source={photo} style={styles.image}/>
		{children}
		</View>
	)
};

const styles = StyleSheet.create({
  photoContainer: {
		position: "relative",
    width: "100%",
    minHeight: "35%",
		height:"35%",
		alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    border: "1px solid #E8E8E8",
		marginTop: 12,
		overflow: "hidden",
  },
		image: {
		width: "100%",
		height: "100%",
	},
});


export default ImageContainer;