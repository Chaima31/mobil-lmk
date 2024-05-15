import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.privacyPolicy, styles.iconLayout]}>
      <Image
        style={[
          styles.screenshot20240419At1506,
          styles.privacyPolicyChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View
        style={[styles.privacyPolicyChild, styles.privacyPolicyChildPosition]}
      />
      <View style={styles.privacyPolicyWrapper}>
        <Text style={styles.privacyPolicy1}>Privacy Policy</Text>
      </View>
      <View style={styles.header}>
        <Pressable
          style={[
            styles.linesystemarrowLeftLine,
            styles.privacyPolicyChildPosition,
          ]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/header.png")}
          />
        </Pressable>
        <Text style={[styles.typesDataWe, styles.yourTypo]}>
          1. Types data we collect
        </Text>
        <Text
          style={[styles.loremIpsumDolor, styles.atVeroEosTypo]}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`}</Text>
        <Text
          style={[styles.sedUtPerspiciatis, styles.atVeroEosTypo]}
        >{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`}</Text>
        <Text
          style={[styles.atVeroEos, styles.atVeroEosTypo]}
        >{`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 

`}</Text>
        <Text style={[styles.useOfYour, styles.yourTypo]}>
          2. Use of your personal data
        </Text>
        <Text style={[styles.disclosureOfYour, styles.yourTypo]}>
          3. Disclosure of your personal data
        </Text>
      </View>
      <View style={styles.barreBasParent}>
        <View style={styles.barrePosition}>
          <View style={[styles.barreBasChild, styles.barrePosition]} />
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  privacyPolicyChildPosition: {
    left: 0,
    position: "absolute",
  },
  yourTypo: {
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.titlePoppinsMedium_size,
    color: Color.lightGray11,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  atVeroEosTypo: {
    fontFamily: FontFamily.bodyMedium,
    fontSize: FontSize.bodyMedium_size,
    left: "0%",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.lightGray11,
    position: "absolute",
    width: "100%",
  },
  barrePosition: {
    left: "50%",
    bottom: 0,
    marginLeft: -215.5,
    height: 81,
    width: 431,
    position: "absolute",
  },
  warningsLayout: {
    width: 56,
    position: "absolute",
  },
  warningsTypo: {
    color: Color.lightGray0,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  reportingLayout: {
    height: 40,
    position: "absolute",
  },
  screenshot20240419At1506: {
    width: 954,
    top: 0,
    height: 852,
  },
  privacyPolicyChild: {
    top: -9,
    backgroundColor: Color.colorGray_200,
    width: 401,
    height: 861,
  },
  privacyPolicy1: {
    fontSize: FontSize.titlePoppinsLarge_size,
    lineHeight: 28,
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    width: 221,
    left: 0,
    top: 0,
    position: "absolute",
  },
  privacyPolicyWrapper: {
    top: 65,
    left: 87,
    height: 28,
    width: 221,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  linesystemarrowLeftLine: {
    width: 24,
    height: 24,
    top: 0,
  },
  typesDataWe: {
    top: 56,
  },
  loremIpsumDolor: {
    top: "13.62%",
  },
  sedUtPerspiciatis: {
    top: "43.26%",
  },
  atVeroEos: {
    top: "68.23%",
  },
  useOfYour: {
    top: 272,
  },
  disclosureOfYour: {
    top: 448,
  },
  header: {
    top: 69,
    left: 24,
    width: 342,
    height: 705,
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
  vectorIcon: {
    height: "57.96%",
    width: "6.45%",
    top: "12.24%",
    right: "88.36%",
    bottom: "29.8%",
    left: "5.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itineraries: {
    color: Color.colorTeal,
    height: 39,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    width: 56,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
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
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  iconParkSolidreport: {
    left: 192,
    width: 40,
    top: 0,
    overflow: "hidden",
  },
  carbontimeFilledParent: {
    top: 12,
    left: 50,
    width: 330,
    height: 49,
    position: "absolute",
  },
  barreBasParent: {
    top: 771,
    left: -19,
    height: 81,
    width: 431,
    position: "absolute",
  },
  privacyPolicy: {
    shadowColor: "rgba(0, 0, 0, 0.21)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.lightGray0,
    flex: 1,
    overflow: "hidden",
    height: 852,
  },
});

export default PrivacyPolicy;
