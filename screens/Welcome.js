import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <Image
        style={[styles.logoTypography1, styles.welcomeInnerPosition]}
        resizeMode="cover"
        source={require("../assets/logo-typography-1.png")}
      />
      <Text style={styles.english}>English</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.rectangleParent}>
        <Pressable
          style={[styles.groupChild, styles.groupLayout]}
          onPress={() => navigation.navigate("Login")}
        />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        <Text style={[styles.registre, styles.loginTypo]}>Registre</Text>
      </View>
      <View style={[styles.welcomeInner, styles.welcomeInnerPosition]}>
        <View style={styles.movingForwardPana1Parent}>
          <Image
            style={[styles.movingForwardPana1, styles.movingLayout]}
            resizeMode="cover"
            source={require("../assets/moving-forwardpana-1.png")}
          />
          <Image
            style={[styles.movingForwardPana2, styles.movingLayout]}
            resizeMode="cover"
            source={require("../assets/moving-forwardpana-1.png")}
          />
          <Image
            style={[styles.movingForwardCuate1, styles.movingLayout]}
            resizeMode="cover"
            source={require("../assets/moving-forwardcuate-1.png")}
          />
          <Image
            style={[styles.movingForwardCuate2, styles.movingLayout]}
            resizeMode="cover"
            source={require("../assets/moving-forwardcuate-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeInnerPosition: {
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 102,
    borderRadius: Border.br_xl,
    bottom: 0,
    height: 38,
    left: "50%",
    position: "absolute",
  },
  loginTypo: {
    height: 20,
    width: 109,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.lightGray0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.titlePoppinsMedium_size,
    bottom: 9,
    left: "50%",
    position: "absolute",
  },
  movingLayout: {
    width: 300,
    top: 0,
    height: 300,
    position: "absolute",
  },
  logoTypography1: {
    marginLeft: -94.5,
    bottom: 28,
    width: 190,
    height: 190,
  },
  english: {
    top: 39,
    right: 46,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightGray11,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    top: 48,
    right: 31,
    width: 8,
    height: 5,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -112.5,
    backgroundColor: Color.colorMediumturquoise,
  },
  groupItem: {
    marginLeft: 11.5,
    backgroundColor: Color.colorPlum_100,
  },
  login: {
    marginLeft: -116.5,
    height: 20,
    width: 109,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.lightGray0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.titlePoppinsMedium_size,
    bottom: 9,
  },
  registre: {
    marginLeft: 7.5,
  },
  rectangleParent: {
    bottom: 144,
    width: 233,
    height: 38,
    marginLeft: -116.5,
    left: "50%",
    position: "absolute",
  },
  movingForwardPana1: {
    left: 661,
  },
  movingForwardPana2: {
    left: 0,
  },
  movingForwardCuate1: {
    left: 994,
  },
  movingForwardCuate2: {
    left: 333,
  },
  movingForwardPana1Parent: {
    top: 70,
    left: -504,
    width: 1294,
    height: 300,
    position: "absolute",
  },
  welcomeInner: {
    marginLeft: -312.5,
    top: 132,
    width: 786,
    height: 393,
  },
  welcome: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Welcome;
