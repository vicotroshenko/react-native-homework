import { StyleSheet, Text, Pressable, View } from "react-native";

const ButtonPrimery =({text, onText, disable=false}) => {
	return (
		<Pressable 
      style={disable ? 
        [styles.primeryBtn, styles.disabledColorBtn]
         : [styles.primeryBtn, styles.activeColorBtn]} 
      onPress={onText} disabled={disable}>
		<View>
			<Text style={disable ? styles.submitBtnTextDisabled : styles.submitBtnTextActive} >
				{text}
			</Text>
		</View>
	</Pressable>
	)
}

const styles = StyleSheet.create({
	primeryBtn: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    alignItems: "center",
    fontFamily: "Roboto",
  },
  activeColorBtn: {
    backgroundColor: "#FF6C00",
  },
  disabledColorBtn: {
    backgroundColor: "#F6F6F6",
  },
	submitBtnTextActive: {
    color: "white",
  },
  submitBtnTextDisabled: {
    color: "#BDBDBD",
  },
})

export default ButtonPrimery;