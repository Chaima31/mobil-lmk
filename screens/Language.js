import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Language = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.language}>
      <Image
        style={styles.screenshot20240419At1506}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View style={styles.languageChild} />
      <Image
        style={styles.logoTypography3}
        resizeMode="cover"
        source={require("../assets/logo-typography-3.png")}
      />
      <View style={styles.languageWrapper}>
        <Text style={styles.language1}>Language</Text>
      </View>
      <Pressable
        style={[styles.header, styles.radioIconLayout]}
        onPress={() => navigation.navigate("Setings")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/header.png")}
        />
      </Pressable>
      <View style={[styles.languageInner, styles.groupParentLayout]}>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View style={styles.component14Parent}>
            <View style={[styles.component14, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.englishUsFlexBox]}>
                French
              </Text>
              <Image
                style={[styles.radioIcon, styles.radioPosition]}
                resizeMode="cover"
                source={require("../assets/radio.png")}
              />
            </View>
            <View style={[styles.component15, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.englishUsFlexBox]}>
                English (US)
              </Text>
              <View style={[styles.radio, styles.radioPosition]}>
                <View style={[styles.radio1, styles.radioIconLayout]}>
                  <Image
                    style={[styles.bigIcon, styles.radioIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/big.png")}
                  />
                  <View style={styles.small} />
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.suggested, styles.englishUsFlexBox]}>
            Suggested
          </Text>
        </View>
      </View>
      <View style={styles.languageItem} />
      <View style={styles.barreBasParent}>
        <View style={styles.barrePosition}>
          <View style={[styles.barreBasChild, styles.barrePosition]} />
        </View>
        <View style={styles.carbontimeFilledParent}>
          <Image
            style={styles.carbontimeFilledIcon}
            resizeMode="cover"
            source={require("../assets/carbontimefilled5.png")}
          />
          <Image
            style={styles.ionwarningIcon}
            resizeMode="cover"
            source={require("../assets/ionwarning1.png")}
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
  radioIconLayout: {
    height: 24,
    width: 24,
  },
  groupParentLayout: {
    height: 100,
    width: 342,
    position: "absolute",
  },
  componentLayout: {
    height: 20,
    width: 342,
    left: 0,
    position: "absolute",
  },
  englishUsFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    color: Color.lightGray11,
    position: "absolute",
  },
  radioPosition: {
    top: "50%",
    marginLeft: 147,
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  barrePosition: {
    bottom: 0,
    marginLeft: -215.5,
    height: 81,
    width: 431,
    left: "50%",
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
    left: 0,
    top: 0,
    position: "absolute",
    height: 852,
  },
  languageChild: {
    top: -9,
    backgroundColor: Color.colorGray_200,
    width: 401,
    height: 861,
    left: 0,
    position: "absolute",
  },
  logoTypography3: {
    marginLeft: -78.5,
    bottom: 83,
    width: 145,
    height: 150,
    left: "50%",
    position: "absolute",
  },
  language1: {
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
  languageWrapper: {
    top: 65,
    left: 87,
    height: 28,
    width: 221,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  header: {
    top: 69,
    left: 24,
    position: "absolute",
  },
  englishUs: {
    width: "70.18%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyMedium,
  },
  radioIcon: {
    height: 24,
    width: 24,
  },
  component14: {
    top: 0,
  },
  bigIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  small: {
    top: 6,
    left: 6,
    borderRadius: Border.br_81xl,
    width: 12,
    height: 12,
    position: "absolute",
    backgroundColor: Color.lightGray0,
  },
  radio1: {
    overflow: "hidden",
  },
  radio: {
    flexDirection: "row",
  },
  component15: {
    top: 40,
  },
  component14Parent: {
    height: 60,
    top: 40,
    width: 342,
    left: 0,
    position: "absolute",
  },
  suggested: {
    fontSize: FontSize.titlePoppinsMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  languageInner: {
    top: 128,
    left: 24,
  },
  languageItem: {
    top: 259,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_500,
    borderTopWidth: 1,
    width: 343,
    height: 1,
    left: 24,
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
  language: {
    shadowColor: "rgba(0, 0, 0, 0.21)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default Language;
