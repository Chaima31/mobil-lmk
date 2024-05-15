import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Pickpockets3 = () => {
  return (
    <View style={styles.pickpockets11}>
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
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
      </View>
      <View
        style={[
          styles.carbontimeFilledParent,
          styles.pickpockets11ChildPosition,
        ]}
      >
        <Image
          style={styles.carbontimeFilledIcon}
          resizeMode="cover"
          source={require("../assets/carbontimefilled1.png")}
        />
        <Image
          style={styles.ionwarningIcon}
          resizeMode="cover"
          source={require("../assets/ionwarning1.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.itineraries, styles.warningsTypo]}>
          Itineraries
        </Text>
        <Text style={[styles.schedules, styles.schedulesTypo]}>Schedules</Text>
        <Text style={[styles.warnings, styles.warningsTypo]}>Warnings</Text>
        <Text style={[styles.reporting, styles.reportingLayout]}>
          Reporting
        </Text>
        <Image
          style={[styles.iconParkSolidreport, styles.reportingLayout]}
          resizeMode="cover"
          source={require("../assets/iconparksolidreport1.png")}
        />
      </View>
      <Image
        style={[styles.pickpockets11Child, styles.pickpockets11ChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={styles.pickpockets11Item}
        resizeMode="cover"
        source={require("../assets/ellipse-112.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barrePosition: {
    height: 81,
    width: 431,
    left: "50%",
    bottom: 0,
    marginLeft: -215.5,
    position: "absolute",
  },
  pickpockets11ChildPosition: {
    left: 24,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  warningsTypo: {
    width: 56,
    textAlign: "center",
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    position: "absolute",
  },
  schedulesTypo: {
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
  },
  reportingLayout: {
    height: 40,
    position: "absolute",
  },
  mapIcon: {
    top: -2,
    left: -247,
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
  barreBasChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumturquoise,
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
  vectorIcon1: {
    height: "57.96%",
    width: "6.45%",
    top: "12.24%",
    right: "88.36%",
    bottom: "29.8%",
    left: "5.18%",
  },
  itineraries: {
    left: 0,
    height: 39,
  },
  schedules: {
    left: 81,
    width: 61,
    height: 42,
    color: Color.lightGray0,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    position: "absolute",
  },
  warnings: {
    left: 274,
    height: 38,
  },
  reporting: {
    left: 181,
    color: Color.colorTeal,
    width: 60,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    height: 40,
  },
  iconParkSolidreport: {
    top: 0,
    left: 192,
    width: 40,
    overflow: "hidden",
  },
  carbontimeFilledParent: {
    top: 787,
    width: 330,
    height: 49,
  },
  pickpockets11Child: {
    top: 67,
    width: 47,
    height: 47,
  },
  vectorIcon2: {
    height: "5.52%",
    width: "10.69%",
    top: "31.81%",
    right: "45.04%",
    bottom: "62.68%",
    left: "44.27%",
  },
  pickpockets11Item: {
    top: 320,
    left: 189,
    width: 12,
    height: 12,
    position: "absolute",
  },
  pickpockets11: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default Pickpockets3;
