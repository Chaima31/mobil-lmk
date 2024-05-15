import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <Image
        style={styles.screenshot20240419At1506}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View style={styles.menuChild} />
      <View style={[styles.mdicardsHeartParent, styles.mdicardsLayout]}>
        <Image
          style={[styles.mdicardsHeartIcon, styles.mdicardsLayout]}
          resizeMode="cover"
          source={require("../assets/mdicardsheart.png")}
        />
        <Text style={[styles.myFavorite, styles.myFavoriteTypo]}>
          My Favorite
        </Text>
      </View>
      <Pressable
        style={[styles.privacyPolicyWrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("PrivacyPolicy")}
      >
        <Text style={[styles.privacyPolicy, styles.myFavoriteTypo]}>
          Privacy Policy
        </Text>
      </Pressable>
      <Pressable
        style={[styles.materialSymbolssettingsParent, styles.parentLayout]}
        onPress={() => navigation.navigate("Setings")}
      >
        <Image
          style={styles.materialSymbolssettingsIcon}
          resizeMode="cover"
          source={require("../assets/materialsymbolssettings.png")}
        />
        <Text style={[styles.settings, styles.logOutTypo]}>settings</Text>
      </Pressable>
      <Pressable
        style={[styles.majesticonslogoutHalfCircleParent, styles.parentLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.materialSymbolssettingsIcon}
          resizeMode="cover"
          source={require("../assets/majesticonslogouthalfcircleline.png")}
        />
        <Text style={[styles.logOut, styles.logOutPosition]}>log out</Text>
      </Pressable>
      <Text style={styles.simonGartozo}>Simon Gartozo</Text>
      <Text style={styles.unitedStates}>united states</Text>
      <View style={[styles.contactUsWrapper, styles.wrapperPosition]}>
        <Text style={[styles.privacyPolicy, styles.myFavoriteTypo]}>
          Contact us
        </Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Road")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
      </Pressable>
      <Image
        style={[styles.menuItem, styles.menuItemPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1131.png")}
      />
      <Image
        style={styles.fxemojimanIcon}
        resizeMode="cover"
        source={require("../assets/fxemojiman.png")}
      />
      <Image
        style={[styles.icsharpContactSupportIcon, styles.menuItemPosition]}
        resizeMode="cover"
        source={require("../assets/icsharpcontactsupport.png")}
      />
      <Image
        style={styles.logoTypography3}
        resizeMode="cover"
        source={require("../assets/logo-typography-3.png")}
      />
      <Image
        style={styles.materialSymbolsLightlockIcon}
        resizeMode="cover"
        source={require("../assets/materialsymbolslightlock.png")}
      />
      <View style={styles.barreBasParent}>
        <View style={styles.barrePosition}>
          <View style={[styles.barreBasChild, styles.barrePosition]} />
        </View>
        <View style={styles.carbontimeFilledParent}>
          <Image
            style={[styles.carbontimeFilledIcon, styles.logOutPosition]}
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
  mdicardsLayout: {
    height: 36,
    position: "absolute",
  },
  myFavoriteTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  wrapperPosition: {
    height: 24,
    left: 88,
    position: "absolute",
  },
  parentLayout: {
    width: 128,
    left: 32,
    height: 33,
    position: "absolute",
  },
  logOutTypo: {
    left: 56,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_xl,
  },
  logOutPosition: {
    top: 4,
    position: "absolute",
  },
  menuItemPosition: {
    left: 30,
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
  screenshot20240419At1506: {
    width: 954,
    left: 0,
    top: 0,
    position: "absolute",
    height: 852,
  },
  menuChild: {
    top: -9,
    backgroundColor: Color.colorGray_200,
    width: 401,
    height: 861,
    left: 0,
    position: "absolute",
  },
  mdicardsHeartIcon: {
    width: 36,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  myFavorite: {
    top: 6,
    left: 61,
  },
  mdicardsHeartParent: {
    top: 242,
    left: 27,
    width: 167,
  },
  privacyPolicy: {
    left: 0,
    top: 0,
  },
  privacyPolicyWrapper: {
    top: 305,
    width: 124,
  },
  materialSymbolssettingsIcon: {
    width: 33,
    height: 33,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  settings: {
    top: 5,
    position: "absolute",
  },
  materialSymbolssettingsParent: {
    top: 414,
    height: 33,
  },
  logOut: {
    left: 56,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_xl,
  },
  majesticonslogoutHalfCircleParent: {
    top: 472,
    height: 33,
  },
  simonGartozo: {
    top: 84,
    fontSize: 25,
    color: Color.colorMediumturquoise,
    width: 191,
    left: 134,
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    height: 36,
    position: "absolute",
  },
  unitedStates: {
    top: 114,
    fontSize: FontSize.titlePoppinsMedium_size,
    textAlign: "center",
    left: 134,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  contactUsWrapper: {
    top: 362,
    width: 99,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    top: 102,
    right: 31,
    width: 12,
    height: 19,
    position: "absolute",
  },
  menuItem: {
    top: 64,
    width: 90,
    height: 90,
  },
  fxemojimanIcon: {
    top: 79,
    left: 43,
    width: 64,
    height: 63,
    position: "absolute",
    overflow: "hidden",
  },
  icsharpContactSupportIcon: {
    top: 357,
    width: 37,
    height: 37,
    overflow: "hidden",
  },
  logoTypography3: {
    marginLeft: -78.5,
    bottom: 83,
    width: 145,
    height: 150,
    left: "50%",
    position: "absolute",
  },
  materialSymbolsLightlockIcon: {
    top: 291,
    left: 25,
    width: 43,
    height: 43,
    position: "absolute",
    overflow: "hidden",
  },
  barreBasChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumturquoise,
  },
  carbontimeFilledIcon: {
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
  menu: {
    shadowColor: "rgba(0, 0, 0, 0.21)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default Menu;
