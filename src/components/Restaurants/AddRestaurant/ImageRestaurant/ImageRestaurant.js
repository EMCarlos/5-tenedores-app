import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
import notFoundImage from "../../../../assets/images/image-not-found.jpg";
import { styles } from "./ImageRestaurant.styles";

export function ImageRestaurant(props) {
  const { formik } = props;

  const primaryImage = formik.values.images[0];

  return (
    <View style={styles.content}>
      <Image
        source={primaryImage ? { uri: primaryImage } : notFoundImage}
        style={styles.image}
      />
    </View>
  );
}
