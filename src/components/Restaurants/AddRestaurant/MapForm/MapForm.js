import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import Toast from "react-native-toast-message";
import { Modal } from "../../../shared";
import { styles } from "./MapForm.styles";

export function MapForm(props) {
  const { show, close, formik } = props;
  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      // TODO: Para cuando exista
      // Location.setGoogleApiKey(process.env.REACT_APP_REST_GOOGLE_MAPS_API_KEY);
      if (status !== "granted") {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Tienes que ir a ajustes de la app y activar la localización",
        });
        return;
      }

      const locationTemp = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);

  const saveLocation = async () => {
    formik.setFieldValue("location", location);
    // reverseGeocode();
    /* Setting the address field in the formik form. */
    // formik.setFieldValue(
    //   "address",
    //   `${address[0].name},${address[0].city}, ${address[0].postalCode}, ${address[0].country} `
    // );
    close();
  };

  // TODO: Chequear como hacer que esto no devuelva error (Falta api key de google?)
  const reverseGeocode = async () => {
    const reverseGeocodeAddress = await Location.reverseGeocodeAddress(
      location
    );
    return reverseGeocodeAddress;
  };

  return (
    <Modal show={show} close={close}>
      <MapView
        initialRegion={location}
        showsUserLocation={true}
        style={styles.mapStyle}
        onRegionChange={(locationTemp) => setLocation(locationTemp)}
      >
        <Marker draggable coordinate={location} />
      </MapView>

      <View style={styles.mapActions}>
        <Button
          title="Guardar"
          containerStyle={styles.btnMapContainerSave}
          buttonStyle={styles.btnMapSave}
          onPress={saveLocation}
        />
        <Button
          title="Cerrar"
          containerStyle={styles.btnMapContainerCancel}
          buttonStyle={styles.btnMapCancel}
          onPress={close}
        />
      </View>
    </Modal>
  );
}
