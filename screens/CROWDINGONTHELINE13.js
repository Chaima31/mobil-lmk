import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CROWDINGONTHELINE13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.crowdingOnTheLine}>
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
        style={[styles.mapIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={styles.crowdingOnTheLineChild}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
      <View style={styles.contentWrapper}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentPosition]} />
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
          <View style={[styles.rectangleView, styles.contentChildLayout]} />
          <View style={[styles.contentChild1, styles.contentChildLayout]} />
          <View style={[styles.contentChild2, styles.contentChildLayout]} />
          <View style={[styles.contentChild3, styles.contentChildLayout]} />
          <View style={[styles.contentChild4, styles.contentChildLayout]} />
          <View style={[styles.contentChild5, styles.contentChildLayout]} />
          <View style={[styles.contentChild6, styles.contentChildLayout]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.crowdingOnThe, styles.letMeKnowFlexBox]}>
            “CROWDING ON THE LINE”
          </Text>
          <Text style={[styles.t7, styles.tramwayTypo]}>T7</Text>
          <Text style={[styles.t6, styles.t6Typo]}>T6</Text>
          <Text style={[styles.t1, styles.tramwayTypo]}>T1</Text>
          <Text style={[styles.t2, styles.tramwayTypo]}>T2</Text>
          <Text style={styles.t3a}>
            <Text style={styles.t3}>T3</Text>
            <Text style={styles.a}>a</Text>
          </Text>
          <Text style={[styles.t4, styles.t6Typo]}>T4</Text>
          <Text style={[styles.t5, styles.t6Typo]}>T5</Text>
        </View>
      </View>
      <Image
        style={[styles.emojioneMonotonetramIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/emojionemonotonetram.png")}
      />
      <Text style={[styles.tramwayT7, styles.tramwayPosition]}>Tramway T7</Text>
      <Text style={[styles.tramwayT6, styles.tramwayPosition]}>Tramway T6</Text>
      <Pressable
        style={[styles.tramwayT1, styles.tramwayPosition]}
        onPress={() => navigation.navigate("CROWDINGONTHELINE2")}
      >
        <Text style={[styles.tramwayT11, styles.tramwayTypo]}>Tramway T1</Text>
      </Pressable>
      <Text style={[styles.tramwayT2, styles.tramwayPosition]}>Tramway T2</Text>
      <Text style={[styles.tramwayT3a, styles.tramwayPosition]}>
        <Text style={styles.t3}>Tramway T3</Text>
        <Text style={styles.a1}>a</Text>
      </Text>
      <Text style={[styles.tramwayT4, styles.tramwayPosition]}>Tramway T4</Text>
      <Text style={[styles.tramwayT5, styles.tramwayPosition]}>Tramway T5</Text>
      <View style={[styles.crowdingOnTheLineItem, styles.crowdingLayout1]} />
      <View style={[styles.crowdingOnTheLineInner, styles.crowdingLayout]} />
      <View
        style={[styles.crowdingOnTheLineChild1, styles.crowdingChildLayout4]}
      />
      <View
        style={[styles.crowdingOnTheLineChild2, styles.crowdingChildLayout3]}
      />
      <View
        style={[styles.crowdingOnTheLineChild3, styles.crowdingChildLayout2]}
      />
      <View
        style={[styles.crowdingOnTheLineChild4, styles.crowdingChildLayout1]}
      />
      <View
        style={[styles.crowdingOnTheLineChild5, styles.crowdingChildLayout]}
      />
      <View style={[styles.crowdingOnTheLineChild6, styles.crowdingLayout1]} />
      <View style={[styles.crowdingOnTheLineChild7, styles.crowdingLayout]} />
      <View
        style={[styles.crowdingOnTheLineChild8, styles.crowdingChildLayout4]}
      />
      <View
        style={[styles.crowdingOnTheLineChild9, styles.crowdingChildLayout3]}
      />
      <View
        style={[styles.crowdingOnTheLineChild10, styles.crowdingChildLayout2]}
      />
      <View
        style={[styles.crowdingOnTheLineChild11, styles.crowdingChildLayout1]}
      />
      <View
        style={[styles.crowdingOnTheLineChild12, styles.crowdingChildLayout]}
      />
      <Pressable
        style={styles.solarbusBold}
        onPress={() => navigation.navigate("CROWDINGONTHELINE14")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/solarbusbold.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-871.png")}
      />
      <Pressable
        style={[styles.m, styles.iconPosition]}
        onPress={() => navigation.navigate("CROWDINGONTHELINE")}
      >
        <Text style={[styles.m1, styles.tramwayTypo]}>M</Text>
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
            style={[styles.iconParkSolidreport, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/iconparksolidreport1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  contentPosition: {
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
    lineHeight: 32,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
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
    bottom: 855,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  contentChildLayout: {
    borderRadius: Border.br_3xs,
    height: 52,
    width: 393,
    backgroundColor: Color.colorGainsboro_100,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tramwayTypo: {
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    color: Color.lightGray11,
  },
  t6Typo: {
    left: 14,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  tramwayPosition: {
    left: 49,
    position: "absolute",
  },
  crowdingLayout1: {
    height: 4,
    width: 26,
    backgroundColor: Color.colorSaddlebrown,
    left: 11,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  crowdingLayout: {
    backgroundColor: Color.colorRed_200,
    height: 4,
    width: 26,
    left: 11,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  crowdingChildLayout4: {
    backgroundColor: Color.colorDodgerblue,
    height: 4,
    width: 26,
    left: 11,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  crowdingChildLayout3: {
    backgroundColor: Color.colorMediumvioletred,
    height: 4,
    width: 26,
    left: 11,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  crowdingChildLayout2: {
    backgroundColor: Color.colorOrange,
    height: 4,
    width: 26,
    left: 11,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  crowdingChildLayout1: {
    backgroundColor: Color.colorGoldenrod,
    height: 4,
    width: 26,
    left: 11,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  crowdingChildLayout: {
    backgroundColor: Color.colorMidnightblue,
    height: 4,
    width: 26,
    left: 11,
    borderRadius: Border.br_3xs,
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
    left: 29,
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
    bottom: 855,
    left: 0,
  },
  contentInner: {
    left: 133,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 127,
    height: 52,
    bottom: 855,
  },
  rectangleView: {
    bottom: 760,
  },
  contentChild1: {
    bottom: 698,
  },
  contentChild2: {
    bottom: 636,
  },
  contentChild3: {
    bottom: 574,
  },
  contentChild4: {
    bottom: 512,
  },
  contentChild5: {
    bottom: 450,
  },
  contentChild6: {
    bottom: 388,
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
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 202,
    height: 35,
    fontSize: FontSize.size_mini,
  },
  t7: {
    top: 269,
    left: 15,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  t6: {
    top: 330,
  },
  t1: {
    top: 391,
    left: 16,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  t2: {
    top: 454,
    left: 15,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  t3: {
    fontSize: FontSize.size_mini,
  },
  a: {
    fontSize: FontSize.size_3xs,
  },
  t3a: {
    top: 516,
    left: 11,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
  },
  t4: {
    top: 579,
  },
  t5: {
    top: 641,
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
  emojioneMonotonetramIcon: {
    top: 226,
    left: 175,
  },
  tramwayT7: {
    top: 326,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  tramwayT6: {
    top: 387,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  tramwayT11: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  tramwayT1: {
    top: 448,
  },
  tramwayT2: {
    top: 511,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  a1: {
    fontSize: FontSize.size_2xs,
  },
  tramwayT3a: {
    top: 573,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    color: Color.lightGray11,
    textAlign: "left",
  },
  tramwayT4: {
    top: 636,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  tramwayT5: {
    top: 698,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  crowdingOnTheLineItem: {
    top: 327,
  },
  crowdingOnTheLineInner: {
    top: 388,
  },
  crowdingOnTheLineChild1: {
    top: 449,
  },
  crowdingOnTheLineChild2: {
    top: 512,
  },
  crowdingOnTheLineChild3: {
    top: 574,
  },
  crowdingOnTheLineChild4: {
    top: 637,
  },
  crowdingOnTheLineChild5: {
    top: 699,
  },
  crowdingOnTheLineChild6: {
    top: 353,
  },
  crowdingOnTheLineChild7: {
    top: 414,
  },
  crowdingOnTheLineChild8: {
    top: 475,
  },
  crowdingOnTheLineChild9: {
    top: 538,
  },
  crowdingOnTheLineChild10: {
    top: 600,
  },
  crowdingOnTheLineChild11: {
    top: 663,
  },
  crowdingOnTheLineChild12: {
    top: 725,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  solarbusBold: {
    left: 308,
    top: 224,
    width: 44,
    height: 44,
    position: "absolute",
  },
  ellipseIcon: {
    marginLeft: -157.5,
    bottom: 584,
    width: 41,
    height: 41,
  },
  m1: {
    marginLeft: -145.5,
    fontSize: FontSize.size_lg,
    height: 73,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    width: 8,
    textAlign: "left",
  },
  m: {
    bottom: 569,
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    borderRadius: Border.br_xl,
    height: 81,
    width: 431,
    marginLeft: -215.5,
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
    height: 40,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  iconParkSolidreport: {
    top: 0,
    left: 192,
  },
  carbontimeFilledParent: {
    top: 16,
    left: 48,
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

export default CROWDINGONTHELINE13;
