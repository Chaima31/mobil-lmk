import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Intro = () => {
  return (
    <View style={styles.intro}>
      <Image
        style={styles.lmkLogo1}
        resizeMode="cover"
        source={require("../assets/lmk-logo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lmkLogo1: {
    position: "absolute",
    marginTop: -90,
    marginLeft: -90.5,
    top: "50%",
    left: "50%",
    width: 180,
    height: 180,
  },
  intro: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Intro;
