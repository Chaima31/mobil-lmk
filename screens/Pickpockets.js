import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Pickpockets = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pickpockets}>
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
        style={[styles.mapIcon, styles.mapIconPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <View style={styles.contentParent}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentChildPosition]} />
          <View style={styles.letMeKnowWrapper}>
            <Text style={[styles.letMeKnow, styles.letMeKnowFlexBox]}>
              Let Me Know
            </Text>
          </View>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.frameChildPosition]} />
          </View>
          <View style={styles.contentItem} />
          <Text style={[styles.chooseTheCategory, styles.next1Typo]}>
            Choose the category of report
          </Text>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <View style={[styles.frameChild, styles.frameChildPosition]} />
        <Pressable
          style={styles.next}
          onPress={() => navigation.navigate("Pickpockets1")}
        >
          <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.pickpocketsChild, styles.pickpocketsChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
      </View>
      <View
        style={[styles.carbontimeFilledParent, styles.pickpocketsChildPosition]}
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
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  mapIconPosition: {
    left: "50%",
    position: "absolute",
  },
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
  letMeKnowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  homeLayout: {
    width: 142,
    height: 5,
  },
  frameChildPosition: {
    backgroundColor: Color.lightGray11,
    left: "50%",
    position: "absolute",
  },
  next1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    lineHeight: 32,
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pickpocketsChildPosition: {
    left: 24,
    position: "absolute",
  },
  barrePosition: {
    height: 81,
    width: 431,
    marginLeft: -215.5,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  warningsTypo: {
    width: 56,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    color: Color.lightGray0,
    textAlign: "center",
    position: "absolute",
  },
  schedulesTypo: {
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
    right: "-3.56%",
    bottom: "77.11%",
    left: "3.56%",
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
    marginLeft: -297.5,
    top: "50%",
    width: 974,
    height: 869,
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
    textAlign: "center",
    lineHeight: 32,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 27,
    width: 222,
    bottom: 0,
    left: "50%",
    color: Color.lightGray11,
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
    width: 142,
    height: 5,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeIndicatorLight: {
    marginLeft: -77.5,
    bottom: 641,
    left: "50%",
    position: "absolute",
  },
  contentItem: {
    bottom: 472,
    left: 38,
    backgroundColor: Color.colorGainsboro_100,
    width: 317,
    height: 52,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  chooseTheCategory: {
    bottom: 482,
    left: 57,
    color: Color.colorSilver_100,
    width: 281,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  vectorIcon1: {
    width: "4.28%",
    right: "26.45%",
    bottom: 608,
    left: "69.27%",
    height: 17,
  },
  content: {
    bottom: -223,
  },
  frameChild: {
    marginLeft: -61.5,
    bottom: 150,
    borderRadius: Border.br_3xs,
    width: 108,
    height: 37,
  },
  next1: {
    color: Color.lightGray0,
  },
  next: {
    left: 176,
    top: 253,
    position: "absolute",
  },
  contentParent: {
    top: 466,
    height: 437,
    width: 397,
    left: 0,
    position: "absolute",
  },
  pickpocketsChild: {
    top: 67,
    width: 47,
    height: 47,
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    borderRadius: Border.br_xl,
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
  vectorIcon2: {
    height: "57.96%",
    width: "6.45%",
    top: "12.24%",
    right: "88.36%",
    bottom: "29.8%",
    left: "5.18%",
    maxHeight: "100%",
  },
  itineraries: {
    height: 39,
    left: 0,
    width: 56,
  },
  schedules: {
    left: 81,
    width: 61,
    height: 42,
    color: Color.lightGray0,
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
    top: 787,
    width: 330,
    height: 49,
  },
  pickpockets: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default Pickpockets;