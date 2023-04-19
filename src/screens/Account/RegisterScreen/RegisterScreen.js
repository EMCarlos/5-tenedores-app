import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterForm } from "../../../components/Auth";
import { styles } from "./RegisterScreen.styles";
import brandLogo from "./../../../assets/images/5-tenedores-letras-icono-logo.png";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Image source={brandLogo} style={styles.image} />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
