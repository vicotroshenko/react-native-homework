import { ActivityIndicator, View, StyleSheet } from "react-native"


export const Loader = () => {
	return (
		<View style={styles.container}>
        <ActivityIndicator size="large" color="#FF6C00" />
      </View>
	)
}

const styles = StyleSheet.create({
  container: {
    position: "absolute", 
		width: "100%", 
		height: "100%", 
		justifyContent: "center",
    alignItems: "center", 
		backgroundColor: "rgba(255, 255, 255, 0.8)", 
		zIndex: 4
  },

});