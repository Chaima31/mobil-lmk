import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Road7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.road7}>
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
          <Pressable
            style={[styles.epback, styles.epbackLayout]}
            onPress={() => navigation.navigate("Road6")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/epback.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.materialSymbolsshare, styles.contentChild23Position]}
            onPress={() => navigation.navigate("Road8")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/materialsymbolsshare.png")}
            />
          </Pressable>
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
          <Pressable
            style={[styles.start, styles.startPosition]}
            onPress={() => navigation.navigate("Start1")}
          >
            <Text style={styles.start1}>Start</Text>
          </Pressable>
          <Image
            style={[styles.icroundWarningIcon, styles.contentInnerLayout]}
            resizeMode="cover"
            source={require("../assets/icroundwarning.png")}
          />
        </View>
        <Text style={[styles.text1, styles.startPosition]}>9€</Text>
      </View>
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
      </View>
      <Image
        style={styles.road7Child}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
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
  epbackLayout: {
    width: 28,
    height: 28,
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
  startPosition: {
    left: 274,
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
    textAlign: "center",
    alignItems: "center",
    display: "flex",
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
    fontSize: FontSize.bodyMedium_size,
    bottom: 784,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    fontSize: FontSize.size_xl,
    width: 192,
    height: 28,
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
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  epback: {
    left: 26,
    top: 47,
    position: "absolute",
  },
  materialSymbolsshare: {
    left: 344,
    width: 28,
    height: 28,
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
    fontWeight: "600",
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
  start1: {
    color: Color.colorWhitesmoke_400,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 32,
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  start: {
    top: 127,
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
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorLimegreen,
    width: 42,
    height: 46,
    alignItems: "center",
    display: "flex",
    left: 274,
    lineHeight: 32,
    textAlign: "left",
  },
  contentParent: {
    top: 164,
    left: 0,
    height: 702,
    width: 410,
    position: "absolute",
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    borderRadius: Border.br_xl,
  },
  road7Child: {
    top: 63,
    left: 31,
    width: 47,
    height: 47,
    position: "absolute",
  },
  road7: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default Road7;
