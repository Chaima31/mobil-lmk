import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Road6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.road6}>
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
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.road6Inner}>
        <View style={[styles.contentParent, styles.contentLayout1]}>
          <View style={[styles.content, styles.contentLayout1]}>
            <View style={[styles.contentChild, styles.contentLayout1]} />
            <View style={styles.letMeKnowWrapper}>
              <Text style={styles.letMeKnow}>Let Me Know</Text>
            </View>
            <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
              <View style={[styles.homeIndicator, styles.homeLayout]} />
            </View>
            <View style={[styles.contentItem, styles.contentLayout]} />
            <View style={[styles.contentInner, styles.contentLayout]} />
            <Text style={styles.lognes}>Lognes</Text>
            <Text style={styles.collgien}>Collégien</Text>
            <Text style={[styles.pm817Pm, styles.pm817Typo]}>
              8:02 PM - 8:17 PM
            </Text>
            <Text style={[styles.pm817Pm1, styles.pm817Typo]}>
              7:54 PM - 8:17 PM
            </Text>
            <Text style={[styles.pm824Pm, styles.pm817Typo]}>
              8:07 PM - 8:24 PM
            </Text>
            <Text style={[styles.pmFromLognes, styles.minLayout]}>
              8:02 PM From Lognes
            </Text>
            <Text style={[styles.min, styles.minPosition]}>3 min</Text>
            <Text style={[styles.min1, styles.minTypo]}>15 min</Text>
            <Text style={styles.text}>15€</Text>
            <Text style={[styles.text1, styles.textTypo1]}>9€</Text>
            <Text style={[styles.text2, styles.textTypo1]}>5€</Text>
            <Text style={[styles.min2, styles.minTypo]}>23 min</Text>
            <Text style={[styles.min3, styles.minTypo]}>17 min</Text>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
            <View
              style={[styles.mingcutetimeFill, styles.mingcutetimeLayout]}
            />
            <View
              style={[styles.mingcutetimeFill1, styles.mingcutetimeLayout]}
            />
            <View
              style={[styles.mingcutetimeFill2, styles.mingcutetimeLayout]}
            />
            <Pressable
              style={[styles.details, styles.minPosition]}
              onPress={() => navigation.navigate("Road7")}
            >
              <Text style={styles.details1}>Details</Text>
            </Pressable>
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
            <View style={[styles.contentChild1, styles.rectangleViewLayout]} />
            <View style={styles.contentChild2} />
            <Image
              style={[
                styles.materialSymbolsLighttramIcon,
                styles.materialIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/materialsymbolslighttram.png")}
            />
            <Image
              style={[
                styles.materialSymbolsLighttramIcon1,
                styles.materialIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/materialsymbolslighttram.png")}
            />
            <Image
              style={[
                styles.materialSymbolsLighttramIcon2,
                styles.materialIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/materialsymbolslighttram.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.contentChildLayout2]}
              resizeMode="cover"
              source={require("../assets/ellipse-873.png")}
            />
            <Image
              style={[styles.contentChild3, styles.contentChildLayout2]}
              resizeMode="cover"
              source={require("../assets/ellipse-873.png")}
            />
            <Image
              style={[styles.contentChild4, styles.contentChildLayout2]}
              resizeMode="cover"
              source={require("../assets/ellipse-873.png")}
            />
            <Text style={[styles.rer, styles.rerTypo]}>RER</Text>
            <Text style={[styles.rer1, styles.rerTypo]}>RER</Text>
            <Text style={[styles.rer2, styles.rerTypo]}>RER</Text>
            <View style={[styles.contentChild5, styles.contentChildLayout1]} />
            <View style={[styles.contentChild6, styles.contentChildLayout1]} />
            <View style={[styles.contentChild7, styles.contentChildLayout1]} />
            <Text style={[styles.a, styles.aTypo]}>A</Text>
            <Text style={[styles.a1, styles.aTypo]}>A</Text>
            <View style={[styles.contentChild8, styles.contentChildLayout]} />
            <View style={[styles.contentChild9, styles.contentChildLayout]} />
            <View style={[styles.contentChild10, styles.contentChildLayout]} />
            <Text style={[styles.text3, styles.textTypo]}>46</Text>
            <Text style={[styles.text4, styles.textTypo]}>25</Text>
            <Text style={[styles.text5, styles.textTypo]}>13</Text>
            <Text style={[styles.a2, styles.aTypo]}>A</Text>
            <Image
              style={[styles.faSolidwalkingIcon, styles.solidwalkingIconLayout]}
              resizeMode="cover"
              source={require("../assets/fasolidwalking.png")}
            />
          </View>
          <Image
            style={[styles.solarbusBoldIcon, styles.solarbusIconLayout]}
            resizeMode="cover"
            source={require("../assets/solarbusbold1.png")}
          />
          <Image
            style={[styles.solarbusBoldIcon1, styles.solarbusIconLayout]}
            resizeMode="cover"
            source={require("../assets/solarbusbold1.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
          <Image
            style={[styles.solarbusBoldIcon2, styles.solarbusIconLayout]}
            resizeMode="cover"
            source={require("../assets/solarbusbold1.png")}
          />
          <Image
            style={[styles.faSolidwalkingIcon1, styles.solidwalkingIconLayout]}
            resizeMode="cover"
            source={require("../assets/fasolidwalking.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector17.png")}
          />
        </View>
      </View>
      <Image
        style={styles.road6Child}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayout1: {
    height: 826,
    width: 393,
    left: 0,
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
    width: 317,
    backgroundColor: Color.colorGainsboro_100,
    left: 28,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  pm817Typo: {
    height: 28,
    width: 266,
    left: 66,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  minLayout: {
    color: Color.colorGray_100,
    height: 28,
    width: 266,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
  },
  minPosition: {
    left: 55,
    position: "absolute",
  },
  minTypo: {
    width: 49,
    left: 308,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  textTypo1: {
    left: 311,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    width: 49,
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout1: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mingcutetimeLayout: {
    height: 13,
    width: 13,
    left: 38,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    height: 68,
    backgroundColor: Color.colorSilver_100,
    width: 4,
    borderRadius: Border.br_3xs,
    left: 26,
    position: "absolute",
  },
  materialIconLayout: {
    height: 32,
    width: 32,
    left: 32,
    position: "absolute",
    overflow: "hidden",
  },
  contentChildLayout2: {
    height: 21,
    width: 21,
    left: 54,
    position: "absolute",
  },
  rerTypo: {
    fontSize: FontSize.size_6xs,
    left: 58,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  contentChildLayout1: {
    height: 20,
    borderWidth: 0.5,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 80,
    backgroundColor: Color.colorRed_100,
    width: 21,
    position: "absolute",
  },
  aTypo: {
    width: 10,
    color: Color.lightGray0,
    left: 85,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  contentChildLayout: {
    width: 27,
    left: 150,
    height: 20,
    borderWidth: 0.5,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  textTypo: {
    height: 10,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  solidwalkingIconLayout: {
    height: 16,
    width: 10,
    position: "absolute",
    overflow: "hidden",
  },
  solarbusIconLayout: {
    height: 23,
    width: 23,
    left: 121,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: 8,
    width: 5,
    right: 279,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 556,
    height: 8,
    width: 5,
    position: "absolute",
  },
  barrePosition: {
    height: 81,
    width: 431,
    marginLeft: -215.5,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  mapIcon: {
    top: -16,
    left: -111,
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
    display: "none",
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
  },
  english: {
    top: 39,
    right: 46,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightGray11,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  vectorIcon: {
    top: 48,
    right: 31,
    width: 8,
    height: 5,
    position: "absolute",
  },
  contentChild: {
    backgroundColor: Color.colorGray_400,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  letMeKnow: {
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
    left: 0,
    color: Color.lightGray11,
    position: "absolute",
  },
  letMeKnowWrapper: {
    bottom: 759,
    left: 86,
    height: 27,
    width: 222,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -70.95,
    backgroundColor: Color.lightGray11,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeIndicatorLight: {
    marginLeft: -70.5,
    bottom: 810,
  },
  contentItem: {
    bottom: 678,
  },
  contentInner: {
    bottom: 603,
  },
  lognes: {
    bottom: 614,
    left: 40,
    width: 61,
    height: 31,
    color: Color.colorSilver_100,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    position: "absolute",
  },
  collgien: {
    bottom: 688,
    width: 297,
    left: 38,
    height: 31,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  pm817Pm: {
    bottom: 541,
  },
  pm817Pm1: {
    bottom: 277,
  },
  pm824Pm: {
    bottom: 434,
  },
  pmFromLognes: {
    bottom: 385,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    left: 54,
    color: Color.colorGray_100,
    position: "absolute",
  },
  min: {
    bottom: 367,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
    height: 28,
    width: 266,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 55,
  },
  min1: {
    bottom: 544,
  },
  text: {
    color: Color.colorLimegreen,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    bottom: 520,
    width: 49,
    left: 308,
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    bottom: 412,
  },
  text2: {
    bottom: 257,
  },
  min2: {
    bottom: 280,
  },
  min3: {
    bottom: 437,
  },
  vectorIcon1: {
    width: "5.19%",
    right: "4.99%",
    bottom: 658,
    left: "89.82%",
    height: 15,
  },
  vectorIcon2: {
    width: "4.33%",
    right: "24.17%",
    bottom: 777,
    left: "71.5%",
    height: 17,
  },
  mingcutetimeFill: {
    bottom: 566,
  },
  mingcutetimeFill1: {
    bottom: 302,
  },
  mingcutetimeFill2: {
    bottom: 459,
  },
  details1: {
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorMediumturquoise,
    lineHeight: 32,
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  details: {
    bottom: 347,
  },
  rectangleView: {
    bottom: 512,
  },
  contentChild1: {
    bottom: 248,
  },
  contentChild2: {
    bottom: 351,
    height: 124,
    backgroundColor: Color.colorMediumturquoise,
    width: 4,
    borderRadius: Border.br_3xs,
    left: 26,
    position: "absolute",
  },
  materialSymbolsLighttramIcon: {
    bottom: 542,
  },
  materialSymbolsLighttramIcon1: {
    bottom: 278,
  },
  materialSymbolsLighttramIcon2: {
    bottom: 435,
  },
  ellipseIcon: {
    bottom: 520,
    height: 21,
    width: 21,
  },
  contentChild3: {
    bottom: 256,
  },
  contentChild4: {
    bottom: 413,
  },
  rer: {
    bottom: 514,
  },
  rer1: {
    bottom: 250,
  },
  rer2: {
    bottom: 407,
  },
  contentChild5: {
    bottom: 521,
  },
  contentChild6: {
    bottom: 257,
  },
  contentChild7: {
    bottom: 414,
  },
  a: {
    bottom: 515,
  },
  a1: {
    bottom: 251,
  },
  contentChild8: {
    backgroundColor: Color.colorPlum_200,
    bottom: 521,
  },
  contentChild9: {
    backgroundColor: Color.colorRed_100,
    width: 27,
    left: 150,
    bottom: 257,
  },
  contentChild10: {
    backgroundColor: Color.colorOrangered,
    bottom: 413,
  },
  text3: {
    bottom: 526,
    left: 155,
    width: 16,
    height: 10,
  },
  text4: {
    bottom: 262,
    left: 156,
    width: 16,
    height: 10,
  },
  text5: {
    bottom: 418,
    left: 158,
    width: 12,
  },
  a2: {
    bottom: 408,
  },
  faSolidwalkingIcon: {
    bottom: 376,
    left: 41,
  },
  content: {
    bottom: 0,
  },
  solarbusBoldIcon: {
    top: 284,
  },
  solarbusBoldIcon1: {
    top: 548,
  },
  vectorIcon3: {
    top: 292,
  },
  vectorIcon4: {
    right: 279,
    top: 556,
  },
  vectorIcon5: {
    top: 400,
  },
  solarbusBoldIcon2: {
    top: 392,
  },
  faSolidwalkingIcon1: {
    top: 551,
    left: 194,
  },
  vectorIcon6: {
    right: 204,
  },
  contentParent: {
    bottom: -124,
  },
  road6Inner: {
    top: 163,
    height: 702,
    width: 393,
    left: 0,
    position: "absolute",
  },
  road6Child: {
    top: 67,
    left: 31,
    width: 47,
    height: 47,
    position: "absolute",
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    borderRadius: Border.br_xl,
    height: 81,
    width: 431,
    marginLeft: -215.5,
  },
  road6: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default Road6;
