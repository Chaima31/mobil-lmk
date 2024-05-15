import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Road3 = () => {
  return (
    <View style={styles.road3}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <LinearGradient
        style={styles.gradientTop}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
        useAngle={true}
        angle={179.39}
      />
      <Text style={styles.english}>English</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.groupWrapper, styles.frameParentPosition]}>
          <View style={[styles.contentParent, styles.contentLayout1]}>
            <View style={[styles.content, styles.contentLayout1]}>
              <View style={[styles.contentChild, styles.contentLayout1]} />
              <View style={styles.letMeKnowWrapper}>
                <Text style={styles.letMeKnow}>Let Me Know</Text>
              </View>
              <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
                <View style={[styles.homeIndicator, styles.homeLayout]} />
              </View>
              <View style={[styles.contentItem, styles.contentLayout]} />
              <View style={[styles.contentInner, styles.contentLayout]} />
              <Text style={styles.chooseDestinationOr}>
                Choose destination or click on the map
              </Text>
              <Text style={styles.collgien}>Collégien</Text>
              <Text style={[styles.yourLocation, styles.yourLocationTypo]}>
                Your Location
              </Text>
              <Text style={[styles.collgienFrance, styles.yourLocationTypo]}>
                Collégien France
              </Text>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout1]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout1]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector16.png")}
            />
            <Image
              style={styles.mingcutetimeFillIcon}
              resizeMode="cover"
              source={require("../assets/mingcutetimefill.png")}
            />
          </View>
        </View>
        <View style={styles.barrePosition}>
          <View style={[styles.barreBasChild, styles.barrePosition]} />
        </View>
        <View
          style={[styles.carbontimeFilledParent, styles.road3ChildPosition]}
        >
          <Image
            style={styles.carbontimeFilledIcon}
            resizeMode="cover"
            source={require("../assets/carbontimefilled.png")}
          />
          <Image
            style={styles.ionwarningIcon}
            resizeMode="cover"
            source={require("../assets/ionwarning.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.itineraries, styles.warningsLayout]}>
            Itineraries
          </Text>
          <Text style={[styles.schedules, styles.warningsTypo]}>Schedules</Text>
          <Text style={[styles.warnings, styles.warningsTypo]}>Warnings</Text>
          <Text style={[styles.reporting, styles.reportingLayout]}>
            Reporting
          </Text>
          <Image
            style={[styles.iconParkSolidreport, styles.reportingLayout]}
            resizeMode="cover"
            source={require("../assets/iconparksolidreport8.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.road3Child, styles.road3ChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  contentLayout1: {
    height: 685,
    width: 393,
    left: 0,
    position: "absolute",
  },
  homeLayout: {
    width: 142,
    left: "50%",
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
  yourLocationTypo: {
    left: 68,
    width: 297,
    height: 31,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout1: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barrePosition: {
    height: 81,
    width: 431,
    marginLeft: -215.5,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  road3ChildPosition: {
    left: 32,
    position: "absolute",
  },
  warningsLayout: {
    width: 56,
    position: "absolute",
  },
  warningsTypo: {
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    textAlign: "center",
  },
  reportingLayout: {
    height: 40,
    position: "absolute",
  },
  mapIcon: {
    top: -16,
    left: -111,
    width: 954,
    position: "absolute",
    height: 852,
  },
  gradientTop: {
    height: "22.89%",
    top: "0%",
    right: "0%",
    bottom: "77.11%",
    left: "0%",
    display: "none",
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
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
  vectorIcon: {
    top: 48,
    right: 31,
    width: 8,
    height: 5,
    position: "absolute",
  },
  contentChild: {
    backgroundColor: Color.colorGray_400,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  letMeKnow: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.spriteGraffiti,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    height: 27,
    width: 222,
    bottom: 0,
    left: 0,
    color: Color.lightGray11,
    position: "absolute",
  },
  letMeKnowWrapper: {
    bottom: 613,
    left: 80,
    height: 27,
    width: 222,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -70.95,
    backgroundColor: Color.lightGray11,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeIndicatorLight: {
    marginLeft: -75.5,
    bottom: 665,
  },
  contentItem: {
    bottom: 534,
  },
  contentInner: {
    bottom: 459,
  },
  chooseDestinationOr: {
    bottom: 469,
    left: 56,
    width: 281,
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
  collgien: {
    bottom: 544,
    width: 297,
    left: 47,
    height: 31,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  yourLocation: {
    bottom: 420,
  },
  collgienFrance: {
    bottom: 393,
  },
  vectorIcon1: {
    width: "5.19%",
    right: "2.7%",
    bottom: 514,
    left: "92.11%",
    height: 15,
  },
  vectorIcon2: {
    width: "4.33%",
    right: "25.7%",
    bottom: 631,
    left: "69.97%",
    height: 17,
  },
  content: {
    bottom: 0,
  },
  vectorIcon3: {
    height: "2.04%",
    width: "2.8%",
    top: "39.27%",
    right: "84.99%",
    bottom: "58.69%",
    left: "12.21%",
  },
  mingcutetimeFillIcon: {
    top: 243,
    width: 13,
    height: 13,
    left: 47,
    position: "absolute",
    overflow: "hidden",
  },
  contentParent: {
    bottom: -247,
  },
  groupWrapper: {
    top: -29,
    height: 565,
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    borderRadius: Border.br_xl,
    height: 81,
    width: 431,
    marginLeft: -215.5,
  },
  carbontimeFilledIcon: {
    top: 4,
    left: 99,
    width: 34,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  ionwarningIcon: {
    top: 1,
    left: 282,
    width: 38,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    height: "57.96%",
    width: "6.45%",
    top: "12.24%",
    right: "88.36%",
    bottom: "29.8%",
    left: "5.18%",
  },
  itineraries: {
    color: Color.colorTeal,
    height: 39,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    width: 56,
    textAlign: "center",
    left: 0,
  },
  schedules: {
    left: 81,
    width: 61,
    height: 42,
    position: "absolute",
  },
  warnings: {
    left: 274,
    width: 56,
    position: "absolute",
    height: 38,
  },
  reporting: {
    left: 181,
    width: 60,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    textAlign: "center",
  },
  iconParkSolidreport: {
    top: 0,
    left: 192,
    width: 40,
    overflow: "hidden",
  },
  carbontimeFilledParent: {
    top: 405,
    width: 330,
    height: 49,
  },
  frameParent: {
    top: 379,
    height: 473,
  },
  road3Child: {
    top: 67,
    width: 47,
    height: 47,
  },
  road3: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default Road3;
