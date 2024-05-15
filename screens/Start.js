import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start}>
      <Text style={styles.english}>English</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.logoTypography5, styles.startChildPosition]}
        resizeMode="cover"
        source={require("../assets/logo-typography-1.png")}
      />
      <View style={[styles.startChild, styles.startChildPosition]} />
      <Pressable
        style={[styles.planYourRoadContainer, styles.startChildPosition]}
        onPress={() => navigation.navigate("Road")}
      >
        <Text style={styles.planYourRoad}>Plan Your Road</Text>
      </Pressable>
      <Text style={[styles.welcome, styles.welcomeTypo]}>WELCOME</Text>
      <Text style={[styles.mohammed, styles.welcomeTypo]}>MOHAMMED</Text>
      <View style={styles.startInner}>
        <View style={styles.paperMapAmico1Parent}>
          <Image
            style={[styles.paperMapAmico1, styles.paperPosition1]}
            resizeMode="cover"
            source={require("../assets/paper-mapamico-1.png")}
          />
          <Image
            style={[styles.paperMapAmico3, styles.paperPosition1]}
            resizeMode="cover"
            source={require("../assets/paper-mapamico-1.png")}
          />
          <Image
            style={[styles.paperMapAmico2, styles.paperPosition1]}
            resizeMode="cover"
            source={require("../assets/paper-mapamico-1.png")}
          />
          <Image
            style={[styles.paperMapPana1, styles.paperPosition]}
            resizeMode="cover"
            source={require("../assets/paper-mappana-1.png")}
          />
          <Image
            style={[styles.paperMapPana3, styles.paperPosition]}
            resizeMode="cover"
            source={require("../assets/paper-mappana-1.png")}
          />
          <Image
            style={[styles.paperMapPana2, styles.paperPosition]}
            resizeMode="cover"
            source={require("../assets/paper-mappana-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startChildPosition: {
    left: "50%",
    position: "absolute",
  },
  welcomeTypo: {
    height: 81,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 3.2,
    fontSize: FontSize.size_13xl,
    left: "50%",
    position: "absolute",
  },
  paperPosition1: {
    width: 400,
    top: "50%",
    marginTop: -200,
    height: 400,
    left: "50%",
    position: "absolute",
  },
  paperPosition: {
    top: 0,
    width: 400,
    height: 400,
    position: "absolute",
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
  logoTypography5: {
    marginLeft: -94.5,
    bottom: 19,
    width: 190,
    height: 190,
  },
  startChild: {
    marginLeft: -119.5,
    bottom: 159,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumturquoise,
    width: 240,
    height: 48,
  },
  planYourRoad: {
    marginLeft: -86.5,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightGray0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 174,
    height: 26,
    textAlign: "center",
  },
  planYourRoadContainer: {
    bottom: 170,
  },
  welcome: {
    marginLeft: -92.5,
    top: 113,
    color: Color.colorDarkslategray_100,
    width: 185,
    textAlign: "left",
  },
  mohammed: {
    marginLeft: -112.5,
    top: 154,
    color: "#c8c8c8",
    width: 225,
    textAlign: "center",
  },
  paperMapAmico1: {
    marginLeft: -376,
  },
  paperMapAmico3: {
    marginLeft: -1128,
    width: 400,
  },
  paperMapAmico2: {
    marginLeft: 376,
  },
  paperMapPana1: {
    left: 1104,
  },
  paperMapPana3: {
    left: 352,
  },
  paperMapPana2: {
    left: 1856,
  },
  paperMapAmico1Parent: {
    width: 2256,
    top: "50%",
    marginTop: -200,
    marginLeft: -1128,
    height: 400,
    left: "50%",
    position: "absolute",
  },
  startInner: {
    top: 235,
    left: 0,
    width: 752,
    height: 400,
    position: "absolute",
  },
  start: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Start;
