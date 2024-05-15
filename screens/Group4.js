import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Group4 = () => {
  return (
    <View style={styles.carbontimeFilledParent}>
      <Image
        style={[styles.carbontimeFilledIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/carbontimefilled2.png")}
      />
      <Image
        style={[styles.ionwarningIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/ionwarning1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.itineraries, styles.warningsTypo]}>Itineraries</Text>
      <Text style={[styles.schedules, styles.schedulesTypo]}>Schedules</Text>
      <Text style={[styles.warnings, styles.warningsTypo]}>Warnings</Text>
      <Text style={[styles.reporting, styles.reportingLayout]}>Reporting</Text>
      <Image
        style={[styles.iconParkSolidreport, styles.reportingLayout]}
        resizeMode="cover"
        source={require("../assets/iconparksolidreport1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
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
  carbontimeFilledIcon: {
    top: 4,
    left: 99,
    width: 34,
    height: 33,
    overflow: "hidden",
  },
  ionwarningIcon: {
    top: 1,
    left: 282,
    width: 38,
    height: 38,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "57.96%",
    width: "6.45%",
    top: "12.24%",
    right: "88.36%",
    bottom: "29.8%",
    left: "5.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
    flex: 1,
    width: "100%",
    height: 49,
  },
});

export default Group4;
