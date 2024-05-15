import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Road = () => {
  return (
    <View style={styles.road1}>
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
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map.png")}
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
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <Image
        style={styles.road1Child}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
        <View style={styles.carbontimeFilledParent}>
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
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
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
            source={require("../assets/iconparksolidreport.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    height: 660,
    marginLeft: -198.5,
    width: 397,
    left: "50%",
    position: "absolute",
  },
  contentChildPosition: {
    bottom: 0,
    borderRadius: Border.br_31xl,
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
  barrePosition: {
    height: 81,
    width: 431,
    marginLeft: -215.5,
    bottom: 0,
    left: "50%",
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
  gradientTop: {
    height: "22.89%",
    top: "0%",
    right: "0%",
    bottom: "77.11%",
    left: "0%",
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
  mapIcon: {
    marginTop: -435,
    marginLeft: -311.5,
    top: "50%",
    width: 974,
    height: 869,
    left: "50%",
    position: "absolute",
  },
  contentChild: {
    backgroundColor: Color.colorGray_400,
    height: 660,
    marginLeft: -198.5,
    width: 397,
    left: "50%",
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
    height: 27,
    width: 222,
    bottom: 0,
    left: "50%",
    color: Color.lightGray11,
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
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeIndicatorLight: {
    marginLeft: -77.5,
    bottom: 641,
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
  vectorIcon1: {
    width: "5.14%",
    right: "3.68%",
    bottom: 489,
    left: "91.18%",
    height: 15,
  },
  vectorIcon2: {
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
    top: 467,
    height: 437,
    width: 397,
    left: 0,
    position: "absolute",
  },
  road1Child: {
    top: 66,
    left: 29,
    width: 47,
    height: 47,
    position: "absolute",
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
  vectorIcon3: {
    height: "57.96%",
    width: "6.45%",
    top: "12.24%",
    right: "88.36%",
    bottom: "29.8%",
    left: "5.18%",
    maxHeight: "100%",
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
    top: 13,
    left: 49,
    width: 330,
    height: 49,
    position: "absolute",
  },
  road1: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default Road;
