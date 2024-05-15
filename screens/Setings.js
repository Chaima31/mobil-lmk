import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Setings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setings}>
      <Image
        style={styles.screenshot20240419At1506}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View style={styles.setingsChild} />
      <Image
        style={styles.logoTypography3}
        resizeMode="cover"
        source={require("../assets/logo-typography-3.png")}
      />
      <Image
        style={styles.icbaselineMiscellaneousServIcon}
        resizeMode="cover"
        source={require("../assets/icbaselinemiscellaneousservices.png")}
      />
      <Image
        style={styles.materialSymbolssettingsAccoIcon}
        resizeMode="cover"
        source={require("../assets/materialsymbolssettingsaccountbox.png")}
      />
      <View style={[styles.accountWrapper, styles.wrapperLayout]}>
        <Text style={styles.account}>Account</Text>
      </View>
      <Pressable
        style={[styles.editProfile, styles.darkModePosition]}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.darkModeTypo}>Edit Profile</Text>
      </Pressable>
      <Pressable
        style={[styles.changePassword, styles.darkModePosition]}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <Text style={styles.darkModeTypo}>Change Password</Text>
      </Pressable>
      <Pressable
        style={[styles.deleteMyAccountContainer, styles.darkModePosition]}
        onPress={() => navigation.navigate("DeleteMyAccount")}
      >
        <Text style={styles.darkModeTypo}>delete My Account</Text>
      </Pressable>
      <Text style={[styles.darkMode, styles.darkModeTypo]}>Dark Mode</Text>
      <Pressable
        style={[styles.language, styles.darkModePosition]}
        onPress={() => navigation.navigate("Language")}
      >
        <Text style={styles.darkModeTypo}>Language</Text>
      </Pressable>
      <View style={[styles.otherWrapper, styles.wrapperLayout]}>
        <Text style={styles.account}>Other</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </View>
      <View style={styles.settingsWrapper}>
        <Text style={styles.settings}>Settings</Text>
      </View>
      <Pressable
        style={[styles.header, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/header.png")}
        />
      </Pressable>
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
            style={[styles.ionwarningIcon, styles.groupChildPosition]}
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
  wrapperLayout: {
    height: 24,
    position: "absolute",
  },
  darkModePosition: {
    left: 29,
    position: "absolute",
  },
  darkModeTypo: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_xl,
  },
  groupItemLayout: {
    height: 23,
    position: "absolute",
  },
  groupChildPosition: {
    top: 1,
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
  setingsChild: {
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
  icbaselineMiscellaneousServIcon: {
    top: 382,
    left: 28,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  materialSymbolssettingsAccoIcon: {
    top: 182,
    left: 27,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  account: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  accountWrapper: {
    top: 188,
    width: 74,
    left: 80,
    height: 24,
  },
  editProfile: {
    top: 233,
  },
  changePassword: {
    top: 275,
  },
  deleteMyAccountContainer: {
    top: 317,
  },
  darkMode: {
    top: 434,
    left: 29,
    position: "absolute",
  },
  language: {
    top: 478,
  },
  otherWrapper: {
    top: 387,
    width: 54,
    left: 80,
    height: 24,
  },
  groupChild: {
    borderRadius: Border.br_2xs_5,
    backgroundColor: Color.colorWhitesmoke_300,
    height: 21,
    width: 47,
    left: 0,
  },
  groupItem: {
    left: 1,
    width: 23,
    top: 0,
  },
  rectangleParent: {
    top: 435,
    left: 318,
    width: 47,
  },
  settings: {
    fontSize: FontSize.titlePoppinsLarge_size,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    width: 221,
    color: Color.lightGray11,
    left: 0,
    top: 0,
    position: "absolute",
  },
  settingsWrapper: {
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
    left: 24,
    top: 69,
    width: 24,
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
  setings: {
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
    width: "100%",
  },
});

export default Setings;
