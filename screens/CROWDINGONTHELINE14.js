import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CROWDINGONTHELINE14 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.crowdingOnTheLine}>
      <Image
        style={[styles.icbaselineSearchIcon, styles.icbaselineIconLayout]}
        resizeMode="cover"
        source={require("../assets/icbaselinesearch.png")}
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
      <Image
        style={[styles.mapIcon, styles.mPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={styles.crowdingOnTheLineChild}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
      <View style={styles.contentWrapper}>
        <View style={[styles.content, styles.contentPosition1]}>
          <View style={[styles.contentChild, styles.contentPosition1]} />
          <View style={[styles.letMeKnowWrapper, styles.letLayout]}>
            <Text style={[styles.letMeKnow, styles.letMeKnowFlexBox]}>
              Let Me Know
            </Text>
          </View>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <View style={[styles.contentItem, styles.contentLayout]} />
          <View style={[styles.contentInner, styles.contentLayout]} />
          <Pressable
            style={[styles.rectanglePressable, styles.contentLayout]}
            onPress={() => navigation.navigate("CROWDINGONTHELINE15")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.crowdingOnThe, styles.letMeKnowFlexBox]}>
            “CROWDING ON THE LINE”
          </Text>
          <Text style={[styles.toSearchA, styles.toSearchATypo]}>
            To search a line, start by entering its name
          </Text>
        </View>
      </View>
      <Image
        style={styles.solarbusBoldIcon}
        resizeMode="cover"
        source={require("../assets/solarbusbold.png")}
      />
      <Text style={[styles.findALine, styles.toSearchATypo]}>Find a line</Text>
      <Image
        style={[styles.icbaselineSearchIcon1, styles.icbaselineIconLayout]}
        resizeMode="cover"
        source={require("../assets/icbaselinesearch1.png")}
      />
      <Pressable
        style={[styles.emojioneMonotonetram, styles.iconParkSolidreportLayout]}
        onPress={() => navigation.navigate("CROWDINGONTHELINE13")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/emojionemonotonetram.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper, styles.mPosition]}
        onPress={() => navigation.navigate("CROWDINGONTHELINE")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-871.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.m, styles.mPosition]}
        onPress={() => navigation.navigate("CROWDINGONTHELINE")}
      >
        <Text style={styles.m1}>M</Text>
      </Pressable>
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
        <View style={styles.carbontimeFilledParent}>
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
          <Text style={styles.schedules}>Schedules</Text>
          <Text style={[styles.warnings, styles.warningsTypo]}>Warnings</Text>
          <Text style={styles.reporting}>Reporting</Text>
          <Image
            style={[
              styles.iconParkSolidreport,
              styles.iconParkSolidreportLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/iconparksolidreport1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icbaselineIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  mPosition: {
    left: "50%",
    position: "absolute",
  },
  contentPosition1: {
    height: 1070,
    marginLeft: -198.5,
    width: 397,
    left: "50%",
    position: "absolute",
  },
  letLayout: {
    height: 27,
    width: 222,
    left: "50%",
  },
  letMeKnowFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 32,
    alignItems: "center",
    display: "flex",
    color: Color.lightGray11,
    position: "absolute",
  },
  homeLayout: {
    width: 142,
    left: "50%",
    height: 5,
    position: "absolute",
  },
  contentLayout: {
    height: 52,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  toSearchATypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  iconParkSolidreportLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
    color: Color.lightGray0,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  icbaselineSearchIcon: {
    top: 414,
    left: 184,
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
    right: 46,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightGray11,
    top: 39,
    position: "absolute",
  },
  vectorIcon: {
    top: 48,
    right: 31,
    height: 5,
    width: 8,
    position: "absolute",
  },
  mapIcon: {
    marginTop: -435,
    marginLeft: -311.5,
    top: "50%",
    width: 974,
    height: 869,
  },
  crowdingOnTheLineChild: {
    left: 34,
    width: 47,
    height: 47,
    top: 39,
    position: "absolute",
  },
  contentChild: {
    backgroundColor: Color.colorGray_400,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  letMeKnow: {
    marginLeft: -111,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.spriteGraffiti,
    height: 27,
    width: 222,
    left: "50%",
    bottom: 0,
  },
  letMeKnowWrapper: {
    marginLeft: -113.5,
    bottom: 987,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -70.95,
    backgroundColor: Color.lightGray11,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeIndicatorLight: {
    marginLeft: -74.5,
    bottom: 1041,
  },
  contentItem: {
    width: 393,
    backgroundColor: Color.colorGainsboro_100,
    height: 52,
    left: 0,
    borderRadius: Border.br_xl,
    bottom: 855,
  },
  contentInner: {
    left: 266,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 127,
    borderRadius: Border.br_xl,
    bottom: 855,
  },
  rectanglePressable: {
    bottom: 760,
    borderRadius: Border.br_3xs,
    width: 393,
    backgroundColor: Color.colorGainsboro_100,
    height: 52,
    left: 0,
  },
  vectorIcon1: {
    width: "4.28%",
    right: "25.19%",
    bottom: 1005,
    left: "70.53%",
    height: 17,
  },
  crowdingOnThe: {
    top: 101,
    left: 94,
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 202,
    height: 35,
  },
  toSearchA: {
    top: 344,
    left: 40,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    color: Color.lightGray11,
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
  solarbusBoldIcon: {
    top: 224,
    left: 308,
    width: 44,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  findALine: {
    bottom: 496,
    left: 49,
    color: Color.colorSilver_100,
    width: 281,
    height: 31,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
  },
  icbaselineSearchIcon1: {
    top: 329,
    left: 10,
  },
  icon: {
    overflow: "hidden",
  },
  emojioneMonotonetram: {
    left: 175,
    top: 226,
  },
  icon1: {
    marginLeft: -157.5,
  },
  wrapper: {
    bottom: 584,
    width: 41,
    height: 41,
  },
  m1: {
    marginLeft: -145.5,
    fontSize: FontSize.size_lg,
    height: 73,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    width: 8,
    textAlign: "left",
    color: Color.lightGray11,
  },
  m: {
    bottom: 569,
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
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "center",
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
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    height: 40,
    textAlign: "center",
    position: "absolute",
  },
  iconParkSolidreport: {
    top: 0,
    left: 192,
    overflow: "hidden",
  },
  carbontimeFilledParent: {
    top: 14,
    left: 51,
    width: 330,
    height: 49,
    position: "absolute",
  },
  crowdingOnTheLine: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default CROWDINGONTHELINE14;
