import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonPrimery =({text, onText}) => {
	return (
		<TouchableOpacity style={styles.submitBtn}>
		<View>
			<Text style={styles.submitBtnText} onPress={onText}>
				{text}
			</Text>
		</View>
	</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	submitBtn: {
    backgroundColor: "#FF6C00",
    color: "white",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    alignItems: "center",
    fontFamily: "Roboto",
  },
	submitBtnText: {
    color: "white",
  },
})

export default ButtonPrimery;