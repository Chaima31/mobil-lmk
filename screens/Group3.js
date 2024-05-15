import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Group3 = () => {
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
      <Text style={[styles.itineraries, styles.warningsTypo]}>Itineraries</Text>
      <Text style={[styles.schedules, styles.schedulesTypo]}>Schedules</Text>
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
    color: Color.lightGray0,
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
  itineraries: {
    left: 0,
    height: 39,
  },
  schedules: {
    left: 81,
    width: 61,
    height: 42,
    position: "absolute",
  },
  warnings: {
    left: 274,
    height: 38,
  },
  reporting: {
    left: 181,
    width: 60,
    textAlign: "center",
    color: Color.lightGray0,
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

export default Group3;
