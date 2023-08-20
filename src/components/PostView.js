import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MessageIcon from "../images/message-circle.png";
import ThumbsUpIcon from "../images/thumbs-up.png";
import MapIcon from "../images/mapPin.png";



const PostView = ({ navigation, postDetails, showLikes=true }) => {

const {id, photo, name, adress, location, comments} = postDetails;
	
  const showComments = (postPhoto) => {
    navigation.navigate("Comments", postPhoto)
  }

	const showLocation = (a, l) => {
		const mapLoc = a || l;
    navigation.navigate("Map", {mapLoc});
  };

	return (
		<View style={styles.postBlock}>
		<Image source={{ uri: photo }} style={styles.mainPostImage} />
		<Text style={styles.textUnder}>{name}</Text>
		<View style={styles.infoContainer}>
			<View style={styles.statistic}>
				<TouchableOpacity style={styles.iconBar} onPress={()=>showComments({id, photo})}>
					<Image
						source={MessageIcon}
						style={{ width: 24, height: 24 }}
					/>
					<Text>{comments?.length || 0}</Text>
				</TouchableOpacity>
				{showLikes ? <View style={styles.iconBar}>
					<Image
						source={ThumbsUpIcon}
						style={{ width: 24, height: 24 }}
					/>
					<Text>0</Text>
				</View> : <></>}
			</View>
			<TouchableOpacity style={styles.iconBar} onPress={()=>showLocation(adress, location )}>
				<Image source={MapIcon} style={{ width: 24, height: 24 }} />
				{adress === "" ? (
					<Text numberOfLines={1} style={styles.textLocation}>{location}</Text>
				) : (
					<Text numberOfLines={1} style={styles.textLocation}>{adress}</Text>
				)}
			</TouchableOpacity>
		</View>
	</View>
	)
}
const styles = StyleSheet.create({
  postBlock: {
    width: "100%",
    marginTop: 32,
  },
	mainPostImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
	textUnder: {
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
	infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statistic: {
    flexDirection: "row",
    columnGap: 8,
		marginRight: 8,
  },
  iconBar: {
    flexDirection: "row",
    verticalAlign: "center",
  },
	textLocation: {
    textDecorationLine: "underline",
		maxWidth: 240,
  },
})
export default PostView;