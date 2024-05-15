import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Group2 = () => {
  return (
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
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.itineraries, styles.warningsLayout]}>
        Itineraries
      </Text>
      <Text style={[styles.schedules, styles.warningsTypo]}>Schedules</Text>
      <Text style={[styles.warnings, styles.warningsTypo]}>Warnings</Text>
      <Text style={[styles.reporting, styles.reportingLayout]}>Reporting</Text>
      <Image
        style={[styles.iconParkSolidreport, styles.reportingLayout]}
        resizeMode="cover"
        source={require("../assets/iconparksolidreport8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  warningsLayout: {
    width: 56,
    position: "absolute",
  },
  warningsTypo: {
    color: Color.lightGray0,
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
    position: "absolute",
  },
  ionwarningIcon: {
    top: 1,
    left: 282,
    width: 38,
    height: 38,
    overflow: "hidden",
    position: "absolute",
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
    position: "absolute",
  },
  itineraries: {
    left: 0,
    color: Color.colorTeal,
    height: 39,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    width: 56,
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
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
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

export default Group2;
