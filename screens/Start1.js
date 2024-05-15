import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Start1 = () => {
  return (
    <View style={styles.start}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map2.png")}
      />
      <View style={styles.contentWrapper}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentChildPosition]} />
          <View style={styles.letMeKnowWrapper}>
            <Text style={styles.letMeKnow}>Let Me Know</Text>
          </View>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <View style={[styles.contentItem, styles.contentLayout]} />
          <View style={[styles.contentInner, styles.contentLayout]} />
          <Text style={[styles.chooseStartingPoint, styles.chooseTypo]}>
            Choose starting point or click on the map
          </Text>
          <Text style={[styles.chooseDestinationOr, styles.chooseTypo]}>
            Choose destination or click on the map
          </Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <Text style={styles.english}>English</Text>
      <Image
        style={[styles.vectorIcon2, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.startChild} />
      <Image
        style={styles.startItem}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    height: 660,
    left: "50%",
    marginLeft: -198.5,
    width: 397,
    position: "absolute",
  },
  contentChildPosition: {
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeLayout: {
    height: 5,
    position: "absolute",
  },
  contentLayout: {
    height: 52,
    width: 317,
    backgroundColor: Color.colorGainsboro_100,
    left: 37,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  chooseTypo: {
    height: 31,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mapIcon: {
    top: -3,
    left: -327,
    width: 979,
    height: 774,
    position: "absolute",
  },
  contentChild: {
    backgroundColor: Color.colorGray_400,
    height: 660,
    left: "50%",
    marginLeft: -198.5,
    width: 397,
    position: "absolute",
  },
  letMeKnow: {
    marginLeft: -111,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.spriteGraffiti,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    color: Color.lightGray11,
    height: 27,
    width: 222,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  letMeKnowWrapper: {
    marginLeft: -118.5,
    bottom: 589,
    height: 27,
    width: 222,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -70.95,
    backgroundColor: Color.lightGray11,
    width: 142,
    height: 5,
    left: "50%",
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeIndicatorLight: {
    marginLeft: -77.5,
    bottom: 641,
    width: 142,
    height: 5,
    left: "50%",
  },
  contentItem: {
    bottom: 508,
  },
  contentInner: {
    bottom: 433,
  },
  chooseStartingPoint: {
    bottom: 518,
    left: 47,
    width: 297,
  },
  chooseDestinationOr: {
    bottom: 443,
    left: 56,
    width: 281,
  },
  vectorIcon: {
    width: "5.14%",
    right: "3.68%",
    bottom: 489,
    left: "91.18%",
    height: 15,
  },
  vectorIcon1: {
    width: "4.28%",
    right: "26.45%",
    bottom: 608,
    left: "69.27%",
    height: 17,
  },
  content: {
    bottom: -223,
  },
  contentWrapper: {
    top: 685,
    left: -1,
    height: 437,
    width: 397,
    position: "absolute",
  },
  english: {
    top: 39,
    right: 46,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  vectorIcon2: {
    top: 48,
    right: 31,
    width: 8,
  },
  startChild: {
    marginLeft: -215.5,
    backgroundColor: Color.colorMediumturquoise,
    width: 431,
    height: 81,
    borderRadius: Border.br_xl,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  startItem: {
    top: 67,
    left: 36,
    width: 47,
    height: 47,
    position: "absolute",
  },
  start: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    borderRadius: Border.br_31xl,
  },
});

export default Start1;
