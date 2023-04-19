import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import {
  InfoForm,
  UploadImageForm,
  ImageRestaurant,
} from "../../../components/Restaurants/AddRestaurant/";
import { db } from "../../../utils/firebase";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./AddRestaurantScreen.styles";
import { initialValues, validationSchema } from "./AddRestaurantScreen.data";
import { useFormik } from "formik";

export function AddRestaurantScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.createAt = new Date();

        await setDoc(doc(db, "restaurants", newData.id), newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator>
      <ImageRestaurant formik={formik} />

      <InfoForm formik={formik} />

      <UploadImageForm formik={formik} />

      <Button
        title="Crear Restaurante"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
