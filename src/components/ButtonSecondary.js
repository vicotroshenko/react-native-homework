import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonSecondary = ({ children, stylesBtn=null}) => {
	return (
    <TouchableOpacity style={stylesBtn.button}>
      <View>{children}</View>
    </TouchableOpacity>
  );
}

export default ButtonSecondary;