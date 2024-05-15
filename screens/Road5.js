import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Road5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.road5}>
      <View style={styles.road5Inner}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/screenshot-20240419-at-1506-1.png")}
        />
      </View>
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
      <View style={styles.contentWrapper}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentChildPosition]} />
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
          <Text style={[styles.pm824pm, styles.pm817Typo]}>
            8:07 PM - 8:24PM
          </Text>
          <Text style={[styles.pm817Pm1, styles.pm817Typo]}>
            7:54 PM - 8:17 PM
          </Text>
          <Text style={[styles.pmFromLognes, styles.minLayout]}>
            8:02 PM From Lognes
          </Text>
          <Text style={[styles.min, styles.minPosition]}>3 min</Text>
          <Text style={[styles.min1, styles.minTypo]}>15 min</Text>
          <Text style={styles.text}>15€</Text>
          <Text style={[styles.text1, styles.textTypo1]}>9€</Text>
          <Text style={[styles.text2, styles.textTypo1]}>5€</Text>
          <Text style={[styles.min2, styles.minTypo]}>17 min</Text>
          <Text style={[styles.min3, styles.minTypo]}>23 min</Text>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={styles.vectorIcon2}
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
          <Text style={[styles.details, styles.minPosition]}>Details</Text>
          <View style={styles.rectangleView} />
          <Pressable
            style={[styles.rectanglePressable, styles.contentChild1Layout]}
            onPress={() => navigation.navigate("Road6")}
          />
          <View style={[styles.contentChild1, styles.contentChild1Layout]} />
          <Image
            style={[
              styles.materialSymbolsLighttramIcon,
              styles.materialIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/materialsymbolslighttram.png")}
          />
          <Image
            style={[
              styles.materialSymbolsLighttramIcon1,
              styles.materialIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/materialsymbolslighttram.png")}
          />
          <Image
            style={[
              styles.materialSymbolsLighttramIcon2,
              styles.materialIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/materialsymbolslighttram.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-873.png")}
          />
          <Image
            style={[styles.contentChild2, styles.ellipseIconPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-873.png")}
          />
          <Image
            style={styles.contentChild3}
            resizeMode="cover"
            source={require("../assets/ellipse-873.png")}
          />
          <Text style={[styles.rer, styles.rerTypo]}>RER</Text>
          <Text style={[styles.rer1, styles.rerTypo]}>RER</Text>
          <Text style={[styles.rer2, styles.rerTypo]}>RER</Text>
          <View style={[styles.contentChild4, styles.contentChildLayout1]} />
          <View style={[styles.contentChild5, styles.contentChildLayout1]} />
          <View style={[styles.contentChild6, styles.contentChildLayout1]} />
          <Text style={[styles.a, styles.aTypo]}>A</Text>
          <View style={[styles.contentChild7, styles.contentChildLayout]} />
          <View style={[styles.contentChild8, styles.contentChildLayout]} />
          <View style={[styles.contentChild9, styles.contentChildLayout]} />
          <Text style={[styles.text3, styles.textTypo]}>46</Text>
          <Text style={[styles.text4, styles.textTypo]}>13</Text>
          <Text style={styles.text5}>25</Text>
          <Text style={[styles.a1, styles.aTypo]}>A</Text>
          <Text style={[styles.a2, styles.aTypo]}>A</Text>
          <Image
            style={[styles.faSolidwalkingIcon, styles.solidwalkingIconLayout]}
            resizeMode="cover"
            source={require("../assets/fasolidwalking.png")}
          />
          <Image
            style={[styles.faSolidwalkingIcon1, styles.solidwalkingIconLayout]}
            resizeMode="cover"
            source={require("../assets/fasolidwalking.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.solarbusBoldIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/solarbusbold1.png")}
      />
      <Image
        style={[styles.solarbusBoldIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/solarbusbold1.png")}
      />
      <Image
        style={[styles.road5Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/solarbusbold1.png")}
      />
      <Image
        style={styles.road5Child}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
      <View style={styles.barreBasWrapper}>
        <View style={styles.barrePosition}>
          <View style={[styles.barreBasChild, styles.barrePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    height: 812,
    marginLeft: -196.5,
    left: "50%",
    width: 393,
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
  contentLayout: {
    height: 52,
    width: 317,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
    marginLeft: -168.5,
    left: "50%",
    position: "absolute",
  },
  pm817Typo: {
    height: 28,
    width: 266,
    marginLeft: -130.5,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
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
  },
  minPosition: {
    marginLeft: -141.5,
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  minTypo: {
    marginLeft: 111.5,
    width: 49,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    color: Color.lightGray11,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  textTypo1: {
    left: 316,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  mingcutetimePosition: {
    height: 13,
    width: 13,
    marginLeft: -158.5,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  contentChild1Layout: {
    height: 67,
    backgroundColor: Color.colorSilver_100,
    width: 4,
    borderRadius: Border.br_3xs,
    marginLeft: -170.5,
    left: "50%",
    position: "absolute",
  },
  materialIconPosition: {
    height: 32,
    width: 32,
    marginLeft: -164.5,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIconPosition: {
    height: 21,
    width: 21,
    marginLeft: -142.5,
    left: "50%",
    position: "absolute",
  },
  rerTypo: {
    fontSize: FontSize.size_6xs,
    marginLeft: -138.5,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    left: "50%",
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
    marginLeft: -116.5,
    backgroundColor: Color.colorRed_100,
    width: 21,
    left: "50%",
    position: "absolute",
  },
  aTypo: {
    width: 10,
    color: Color.lightGray0,
    marginLeft: -111.5,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  contentChildLayout: {
    width: 27,
    marginLeft: -46.5,
    height: 20,
    borderWidth: 0.5,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: "50%",
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
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  solidwalkingIconLayout: {
    height: 16,
    width: 10,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: 5,
    right: 279,
    height: 8,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 722,
    width: 5,
    height: 8,
    position: "absolute",
  },
  iconLayout: {
    height: 23,
    width: 23,
    left: 121,
    position: "absolute",
    overflow: "hidden",
  },
  barrePosition: {
    marginLeft: -215.5,
    height: 81,
    width: 431,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    width: 954,
    position: "absolute",
    height: 852,
  },
  road5Inner: {
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
    height: 812,
    marginLeft: -196.5,
    left: "50%",
    width: 393,
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
    marginLeft: -112.5,
    bottom: 745,
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
    marginLeft: -69.5,
    bottom: 793,
  },
  contentItem: {
    bottom: 664,
  },
  contentInner: {
    bottom: 589,
  },
  lognes: {
    marginLeft: -156.5,
    bottom: 600,
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
    left: "50%",
    position: "absolute",
  },
  collgien: {
    bottom: 674,
    width: 297,
    marginLeft: -158.5,
    height: 31,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  pm817Pm: {
    bottom: 527,
  },
  pm824pm: {
    bottom: 368,
  },
  pm817Pm1: {
    bottom: 261,
  },
  pmFromLognes: {
    bottom: 478,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    marginLeft: -142.5,
    color: Color.colorGray_100,
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  min: {
    bottom: 460,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
    height: 28,
    width: 266,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginLeft: -141.5,
  },
  min1: {
    bottom: 530,
    width: 49,
  },
  text: {
    left: 308,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    bottom: 506,
    width: 49,
    height: 28,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    bottom: 346,
    width: 39,
  },
  text2: {
    bottom: 241,
    width: 49,
  },
  min2: {
    bottom: 371,
    width: 49,
  },
  min3: {
    bottom: 264,
    width: 49,
  },
  vectorIcon1: {
    marginLeft: 156.5,
    bottom: 644,
    width: 20,
    height: 15,
    left: "50%",
    position: "absolute",
  },
  vectorIcon2: {
    marginLeft: 82.5,
    bottom: 763,
    height: 17,
    width: 17,
    left: "50%",
    position: "absolute",
  },
  mingcutetimeFill: {
    bottom: 552,
  },
  mingcutetimeFill1: {
    bottom: 393,
  },
  mingcutetimeFill2: {
    bottom: 286,
  },
  details: {
    bottom: 440,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorMediumturquoise,
    marginLeft: -141.5,
    fontSize: FontSize.size_smi,
  },
  rectangleView: {
    bottom: 438,
    height: 124,
    width: 4,
    borderRadius: Border.br_3xs,
    marginLeft: -170.5,
    backgroundColor: Color.colorMediumturquoise,
    left: "50%",
    position: "absolute",
  },
  rectanglePressable: {
    bottom: 337,
  },
  contentChild1: {
    bottom: 230,
  },
  materialSymbolsLighttramIcon: {
    bottom: 528,
  },
  materialSymbolsLighttramIcon1: {
    bottom: 369,
  },
  materialSymbolsLighttramIcon2: {
    bottom: 262,
  },
  ellipseIcon: {
    bottom: 506,
    height: 21,
    width: 21,
  },
  contentChild2: {
    bottom: 347,
  },
  contentChild3: {
    bottom: 240,
    height: 21,
    width: 21,
    marginLeft: -142.5,
    left: "50%",
    position: "absolute",
  },
  rer: {
    bottom: 500,
  },
  rer1: {
    bottom: 341,
  },
  rer2: {
    bottom: 234,
  },
  contentChild4: {
    bottom: 507,
  },
  contentChild5: {
    bottom: 348,
  },
  contentChild6: {
    bottom: 241,
  },
  a: {
    bottom: 501,
  },
  contentChild7: {
    backgroundColor: Color.colorPlum_200,
    bottom: 507,
  },
  contentChild8: {
    backgroundColor: Color.colorOrangered,
    bottom: 347,
  },
  contentChild9: {
    backgroundColor: Color.colorRed_100,
    width: 27,
    marginLeft: -46.5,
    bottom: 240,
  },
  text3: {
    marginLeft: -41.5,
    bottom: 512,
    width: 16,
  },
  text4: {
    marginLeft: -38.5,
    bottom: 352,
    width: 12,
  },
  text5: {
    marginLeft: -40.5,
    bottom: 245,
    height: 8,
    color: Color.lightGray0,
    width: 17,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  a1: {
    bottom: 342,
  },
  a2: {
    bottom: 235,
  },
  faSolidwalkingIcon: {
    marginLeft: -155.5,
    bottom: 469,
    left: "50%",
  },
  faSolidwalkingIcon1: {
    top: 554,
    left: 194,
  },
  content: {
    bottom: 88,
  },
  contentWrapper: {
    top: 163,
    height: 900,
    width: 393,
    left: 0,
    position: "absolute",
  },
  vectorIcon3: {
    top: 455,
  },
  vectorIcon4: {
    top: 615,
  },
  vectorIcon5: {
    right: 279,
    top: 722,
  },
  vectorIcon6: {
    right: 204,
  },
  solarbusBoldIcon: {
    top: 447,
  },
  solarbusBoldIcon1: {
    top: 607,
  },
  road5Icon: {
    top: 714,
  },
  road5Child: {
    top: 67,
    left: 32,
    width: 47,
    height: 47,
    position: "absolute",
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    marginLeft: -215.5,
    borderRadius: Border.br_xl,
  },
  barreBasWrapper: {
    top: 771,
    left: -19,
    height: 81,
    width: 431,
    position: "absolute",
  },
  road5: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    overflow: "hidden",
    height: 852,
    borderRadius: Border.br_31xl,
    width: "100%",
  },
});

export default Road5;
