import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Road8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.road8}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
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
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector18.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector18.png")}
      />
      <View style={styles.contentParent}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentChildPosition]} />
          <View style={styles.letMeKnowWrapper}>
            <Text style={styles.letMeKnow}>Let Me Know</Text>
          </View>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <Text style={styles.toLognes}>To Lognes</Text>
          <Text style={styles.fromCollgien}>From Collégien</Text>
          <Text style={styles.pm824Pm}>8:07 PM - 8:24 PM</Text>
          <Text style={[styles.pmFromLognes, styles.walkLayout]}>
            8:02 PM From Lognes
          </Text>
          <Text style={[styles.min, styles.minTypo]}>3 min</Text>
          <Text style={styles.france}>77185, France</Text>
          <Text style={[styles.minNonStop, styles.minTypo]}>
            2 min (non stop)
          </Text>
          <Text style={[styles.about30Min, styles.minTypo]}>
            About 30 min, 2.1 km
          </Text>
          <Text style={[styles.modifiedService, styles.minTypo]}>
            Modified service
          </Text>
          <Text style={[styles.france1, styles.minTypo]}>France</Text>
          <Text style={[styles.walk, styles.walkLayout]}>Walk</Text>
          <Text style={[styles.pm, styles.pmTypo]}>8:02 PM</Text>
          <Text style={[styles.pm1, styles.pmTypo]}>8:02 PM</Text>
          <Text style={[styles.pm2, styles.pmTypo]}>8:04 PM</Text>
          <Text style={[styles.pm3, styles.pmTypo]}>8:24 PM</Text>
          <Text style={[styles.lognes, styles.lognesTypo]}>Lognes</Text>
          <Text style={[styles.lognes1, styles.lognesTypo]}>Lognes</Text>
          <Text style={[styles.torcy, styles.pmTypo]}>Torcy</Text>
          <Text style={styles.min1}>(17 min)</Text>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <View
            style={[styles.mingcutetimeFill, styles.mingcutetimePosition]}
          />
          <View
            style={[styles.mingcutetimeFill1, styles.mingcutetimePosition]}
          />
          <View
            style={[styles.mingcutetimeFill2, styles.mingcutetimePosition]}
          />
          <Image
            style={styles.contentItem}
            resizeMode="cover"
            source={require("../assets/ellipse-873.png")}
          />
          <Text style={styles.rer}>RER</Text>
          <View style={[styles.contentInner, styles.contentInnerLayout]} />
          <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
          <View style={[styles.contentChild1, styles.rectangleViewBorder]} />
          <Text style={[styles.text, styles.aTypo1]}>13</Text>
          <Text style={[styles.a, styles.aTypo]}>A</Text>
          <Text style={styles.a1}>A</Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIcon4Layout]}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
          <Image
            style={styles.solarbusBoldIcon}
            resizeMode="cover"
            source={require("../assets/solarbusbold1.png")}
          />
          <Image
            style={[styles.epbackIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/epback.png")}
          />
          <Image
            style={[
              styles.materialSymbolsshareIcon,
              styles.contentChild23Position,
            ]}
            resizeMode="cover"
            source={require("../assets/materialsymbolsshare.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.contentChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-901.png")}
          />
          <Image
            style={[styles.contentChild2, styles.contentChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-901.png")}
          />
          <Image
            style={[styles.contentChild3, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild4, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild5, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild6, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild7, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild8, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild9, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild10, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild11, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild12, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild13, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild14, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild15, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild16, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild17, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild18, styles.contentChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-931.png")}
          />
          <Image
            style={[styles.contentChild19, styles.contentChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-901.png")}
          />
          <Image
            style={[styles.contentChild20, styles.contentChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-901.png")}
          />
          <Image
            style={styles.contentChild21}
            resizeMode="cover"
            source={require("../assets/ellipse-1111.png")}
          />
          <Text style={[styles.collgien, styles.collgienTypo]}>Collégien</Text>
          <Text style={[styles.marneLaValleChessy, styles.aTypo]}>
            Marne-La-Vallée Chessy
          </Text>
          <View style={[styles.contentChild22, styles.vectorIcon4Layout]} />
          <View
            style={[styles.contentChild23, styles.contentChild23Position]}
          />
          <Text style={styles.start}>Start</Text>
          <Image
            style={[styles.icroundWarningIcon, styles.contentInnerLayout]}
            resizeMode="cover"
            source={require("../assets/icroundwarning.png")}
          />
        </View>
        <Text style={styles.text1}>9€</Text>
      </View>
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
        <View style={styles.solaruserBoldParent}>
          <Image
            style={styles.solaruserBoldIcon}
            resizeMode="cover"
            source={require("../assets/solaruserbold.png")}
          />
          <Image
            style={[styles.carbontimeFilledIcon, styles.epbackLayout]}
            resizeMode="cover"
            source={require("../assets/carbontimefilled6.png")}
          />
          <Image
            style={[styles.ionwarningIcon, styles.road8ChildPosition]}
            resizeMode="cover"
            source={require("../assets/ionwarning4.png")}
          />
          <Image
            style={styles.vectorIcon5}
            resizeMode="cover"
            source={require("../assets/vector19.png")}
          />
          <Text style={styles.itineraries}>Itineraries</Text>
          <Text style={[styles.schedules, styles.warningsTypo]}>Schedules</Text>
          <Text style={[styles.warnings, styles.warningsTypo]}>Warnings</Text>
          <Text style={[styles.myAcompte, styles.warningsTypo]}>
            My Acompte
          </Text>
        </View>
      </View>
      <View style={[styles.road8Child, styles.road8ChildPosition]} />
      <View style={[styles.road8Item, styles.road8Layout]} />
      <View style={[styles.road8Inner, styles.road8Layout]} />
      <Text style={[styles.doYouLike, styles.doYouLikePosition]}>
        DO YOU LIKE TO SHARE ?
      </Text>
      <Text style={[styles.theRoad, styles.theRoadTypo]}>THE ROAD</Text>
      <Text style={[styles.liveLocation, styles.theRoadTypo]}>
        LIVE LOCATION
      </Text>
      <Image
        style={[styles.manThinkingCuate1, styles.doYouLikePosition]}
        resizeMode="cover"
        source={require("../assets/man-thinkingcuate-1.png")}
      />
      <Pressable
        style={[styles.epback, styles.epbackLayout]}
        onPress={() => navigation.navigate("Road7")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/epback1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    height: 5,
    width: 8,
    position: "absolute",
  },
  contentPosition: {
    height: 885,
    marginLeft: -205,
    left: "50%",
    position: "absolute",
  },
  contentChildPosition: {
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeLayout: {
    width: 142,
    left: "50%",
    height: 5,
    position: "absolute",
  },
  walkLayout: {
    width: 266,
    color: Color.colorGray_100,
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  minTypo: {
    fontSize: FontSize.size_3xs,
    width: 266,
    color: Color.colorGray_100,
    height: 28,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  pmTypo: {
    width: 51,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  lognesTypo: {
    marginLeft: -104,
    width: 51,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  mingcutetimePosition: {
    height: 13,
    width: 13,
    marginLeft: -168,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  contentInnerLayout: {
    height: 18,
    position: "absolute",
  },
  rectangleViewBorder: {
    height: 20,
    borderWidth: 0.5,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    bottom: 682,
    left: "50%",
    position: "absolute",
  },
  aTypo1: {
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    left: "50%",
  },
  aTypo: {
    fontSize: FontSize.size_2xs,
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon4Layout: {
    width: 5,
    position: "absolute",
  },
  iconLayout: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  contentChild23Position: {
    top: 129,
    position: "absolute",
  },
  contentChildLayout1: {
    height: 9,
    left: 84,
    width: 9,
    position: "absolute",
  },
  contentChildLayout: {
    height: 7,
    width: 7,
    left: 85,
    position: "absolute",
  },
  collgienTypo: {
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  barrePosition: {
    height: 81,
    width: 431,
    marginLeft: -215.5,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  epbackLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  road8ChildPosition: {
    top: 0,
    position: "absolute",
  },
  warningsTypo: {
    top: 13,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    height: 42,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  road8Layout: {
    height: 62,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_xl,
    left: "50%",
    position: "absolute",
  },
  doYouLikePosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  theRoadTypo: {
    color: Color.colorLightskyblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  mapIcon: {
    top: -3,
    left: -239,
    width: 954,
    position: "absolute",
    height: 852,
  },
  gradientTop: {
    height: "22.89%",
    top: "0%",
    right: "0%",
    bottom: "77.11%",
    left: "0%",
    backgroundColor: "transparent",
    display: "none",
    position: "absolute",
    width: "100%",
  },
  english: {
    top: 39,
    right: 46,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  vectorIcon: {
    top: 48,
    right: 31,
  },
  vectorIcon1: {
    top: 563,
    right: 258,
  },
  vectorIcon2: {
    top: 682,
    right: 281,
  },
  contentChild: {
    backgroundColor: Color.colorGray_400,
    width: 393,
    height: 885,
    marginLeft: -205,
    left: "50%",
    position: "absolute",
  },
  letMeKnow: {
    marginLeft: -111,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.spriteGraffiti,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    height: 27,
    width: 222,
    bottom: 0,
    left: "50%",
    color: Color.lightGray11,
    position: "absolute",
  },
  letMeKnowWrapper: {
    marginLeft: -119,
    bottom: 818,
    height: 27,
    width: 222,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -70.95,
    backgroundColor: Color.lightGray11,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeIndicatorLight: {
    marginLeft: -80,
    bottom: 868,
  },
  toLognes: {
    marginLeft: 11,
    height: 31,
    width: 71,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    bottom: 784,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    left: "50%",
    position: "absolute",
  },
  fromCollgien: {
    marginLeft: -99,
    width: 108,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    bottom: 784,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  pm824Pm: {
    marginLeft: -174,
    bottom: 728,
    width: 192,
    height: 28,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  pmFromLognes: {
    marginLeft: -170,
    bottom: 655,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  min: {
    marginLeft: -169,
    bottom: 637,
  },
  france: {
    bottom: 573,
    marginLeft: -103,
    fontSize: FontSize.size_3xs,
    width: 266,
    color: Color.colorGray_100,
    height: 28,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  minNonStop: {
    marginLeft: -63,
    bottom: 470,
  },
  about30Min: {
    marginLeft: -86,
    bottom: 352,
  },
  modifiedService: {
    marginLeft: -61,
    bottom: 450,
  },
  france1: {
    bottom: 295,
    marginLeft: -102,
  },
  walk: {
    bottom: 368,
    marginLeft: -102,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    width: 266,
  },
  pm: {
    bottom: 590,
    marginLeft: -177,
    width: 51,
  },
  pm1: {
    bottom: 526,
    marginLeft: -177,
    width: 51,
  },
  pm2: {
    bottom: 422,
    marginLeft: -177,
    width: 51,
  },
  pm3: {
    bottom: 310,
    marginLeft: -177,
    width: 51,
  },
  lognes: {
    bottom: 590,
  },
  lognes1: {
    bottom: 526,
  },
  torcy: {
    bottom: 421,
    marginLeft: -102,
  },
  min1: {
    marginLeft: -165,
    bottom: 707,
    fontSize: FontSize.size_mini,
    height: 25,
    color: Color.colorGray_100,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    width: 71,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon3: {
    marginLeft: 76,
    bottom: 836,
    width: 17,
    height: 17,
    left: "50%",
    position: "absolute",
  },
  mingcutetimeFill: {
    bottom: 600,
  },
  mingcutetimeFill1: {
    bottom: 536,
  },
  mingcutetimeFill2: {
    bottom: 496,
  },
  contentItem: {
    marginLeft: -172,
    height: 21,
    width: 21,
    bottom: 682,
    left: "50%",
    position: "absolute",
  },
  rer: {
    bottom: 676,
    fontSize: FontSize.size_6xs,
    marginLeft: -168,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  contentInner: {
    bottom: 495,
    width: 19,
    borderWidth: 0.5,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    height: 18,
    backgroundColor: Color.colorRed_100,
    marginLeft: -103,
    left: "50%",
  },
  rectangleView: {
    marginLeft: -145,
    backgroundColor: Color.colorRed_100,
    width: 21,
  },
  contentChild1: {
    marginLeft: -76,
    backgroundColor: Color.colorOrangered,
    width: 27,
  },
  text: {
    marginLeft: -68,
    bottom: 687,
    width: 12,
    height: 10,
    fontSize: FontSize.size_xs,
    color: Color.lightGray0,
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  a: {
    marginLeft: -97,
    bottom: 489,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    left: "50%",
    width: 8,
    fontSize: FontSize.size_2xs,
  },
  a1: {
    marginLeft: -139,
    bottom: 675,
    height: 35,
    width: 9,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  vectorIcon4: {
    top: 189,
    right: 317,
    height: 8,
  },
  solarbusBoldIcon: {
    top: 181,
    left: 100,
    width: 23,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  epbackIcon: {
    top: 47,
    left: 26,
    position: "absolute",
  },
  materialSymbolsshareIcon: {
    left: 344,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  ellipseIcon: {
    top: 275,
  },
  contentChild2: {
    top: 339,
  },
  contentChild3: {
    top: 330,
  },
  contentChild4: {
    top: 322,
  },
  contentChild5: {
    top: 313,
  },
  contentChild6: {
    top: 304,
  },
  contentChild7: {
    top: 295,
  },
  contentChild8: {
    top: 286,
  },
  contentChild9: {
    top: 456,
  },
  contentChild10: {
    top: 466,
  },
  contentChild11: {
    top: 476,
  },
  contentChild12: {
    top: 486,
  },
  contentChild13: {
    top: 496,
  },
  contentChild14: {
    top: 506,
  },
  contentChild15: {
    top: 516,
  },
  contentChild16: {
    top: 526,
  },
  contentChild17: {
    top: 536,
  },
  contentChild18: {
    top: 546,
  },
  contentChild19: {
    top: 444,
  },
  contentChild20: {
    top: 556,
  },
  contentChild21: {
    top: 559,
    left: 87,
    width: 3,
    height: 3,
    position: "absolute",
  },
  collgien: {
    top: 545,
    left: 103,
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  marneLaValleChessy: {
    top: 364,
    left: 127,
    fontSize: FontSize.size_2xs,
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
  },
  contentChild22: {
    top: 352,
    left: 86,
    borderRadius: Border.br_3xs,
    height: 89,
    backgroundColor: Color.colorRed_100,
  },
  contentChild23: {
    left: 252,
    width: 75,
    height: 29,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightGray11,
  },
  start: {
    top: 127,
    color: Color.colorWhitesmoke_400,
    left: 274,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 32,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  icroundWarningIcon: {
    top: 411,
    left: 124,
    width: 18,
    display: "none",
  },
  content: {
    bottom: -183,
    width: 410,
  },
  text1: {
    bottom: 490,
    fontSize: FontSize.size_5xl,
    color: Color.colorLimegreen,
    height: 46,
    width: 42,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 274,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  contentParent: {
    top: 164,
    height: 702,
    width: 410,
    left: 0,
    position: "absolute",
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    borderRadius: Border.br_xl,
  },
  solaruserBoldIcon: {
    top: 1,
    left: 280,
    height: 42,
    width: 42,
    position: "absolute",
    overflow: "hidden",
  },
  carbontimeFilledIcon: {
    top: 2,
    left: 94,
    overflow: "hidden",
  },
  ionwarningIcon: {
    left: 184,
    width: 46,
    height: 46,
    overflow: "hidden",
  },
  vectorIcon5: {
    height: "63.64%",
    width: "8.04%",
    top: "9.09%",
    right: "86.9%",
    bottom: "27.27%",
    left: "5.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itineraries: {
    top: 12,
    color: Color.colorTeal,
    width: 60,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    height: 42,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  schedules: {
    width: 60,
    left: 84,
    top: 13,
  },
  warnings: {
    left: 177,
    width: 60,
  },
  myAcompte: {
    left: 266,
    width: 70,
  },
  solaruserBoldParent: {
    top: 9,
    left: 50,
    width: 336,
    height: 55,
    position: "absolute",
  },
  road8Child: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 393,
    left: 0,
    height: 852,
  },
  road8Item: {
    marginLeft: -91.5,
    bottom: 143,
    width: 185,
  },
  road8Inner: {
    marginLeft: -93.5,
    bottom: 66,
    width: 187,
  },
  doYouLike: {
    marginTop: 159,
    marginLeft: -151.5,
    fontSize: FontSize.size_7xl,
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
  },
  theRoad: {
    marginLeft: -51.5,
    bottom: 158,
  },
  liveLocation: {
    marginLeft: -72.5,
    bottom: 81,
  },
  manThinkingCuate1: {
    marginTop: -345,
    marginLeft: -257.5,
    width: 513,
    height: 513,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  epback: {
    left: 20,
    top: 41,
  },
  road8: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default Road8;
