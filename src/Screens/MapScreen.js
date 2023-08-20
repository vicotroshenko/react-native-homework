import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { PROVIDER_GOOGLE } from "react-native-maps";


const MapScreen = ({ route }) => {
	const [location, setLocation] = useState('');

  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      const {mapLoc} = route.params;
      let [{ latitude, longitude }] = await Location.geocodeAsync(mapLoc);
      const coords = {
        latitude,
        longitude,
      };
      setLocation(coords);
    })();
  }, []);



	return (
		<View style={styles.containerMap}>
		<MapView
			style={styles.mapStyle}
			region={{
				...location,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			showsUserLocation={true}
      provider={PROVIDER_GOOGLE}
		>
			{location && (
				<Marker title="I am here" coordinate={location} description="Hello" />
			)}
		</MapView>
	</View>
	)
}


const styles = StyleSheet.create({
  containerMap: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default MapScreen;