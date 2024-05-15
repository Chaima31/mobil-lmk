import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CROWDINGONTHELINE11 = () => {
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
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <View style={[styles.contentParent, styles.contentParentLayout]}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.childPosition]} />
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <Text style={styles.crowdingOnThe}>“CROWDING ON THE LINE”</Text>
        </View>
        <View style={[styles.frameChild, styles.frameItemLayout]} />
        <Text style={[styles.averageCrowdingOn, styles.fewOrNoTypo]}>
          Average crowding on the line
        </Text>
        <Text style={[styles.fewOrNo, styles.fewOrNoLayout]}>
          Few or no seat available, traffic is fluid.
        </Text>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <Text style={[styles.heavyCrowding, styles.crowdingPosition]}>
          Heavy crowding
        </Text>
        <Text style={[styles.crowdingIsDense, styles.crowdingPosition]}>
          Crowding is dense, difficult entry and exit.
        </Text>
        <Image
          style={[styles.frameInner, styles.innerLayout]}
          resizeMode="cover"
          source={require("../assets/group-237485.png")}
        />
        <Image
          style={[styles.groupIcon, styles.innerLayout]}
          resizeMode="cover"
          source={require("../assets/group-237486.png")}
        />
      </View>
      <Pressable
        style={styles.epback}
        onPress={() => navigation.navigate("CROWDINGONTHELINE5")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>
      <View style={styles.crowdingOnTheLineChild} />
      <View style={[styles.crowdingOnTheLineItem, styles.frameItemLayout]} />
      <Text style={[styles.from, styles.toTypo]}>FROM</Text>
      <Text style={[styles.to, styles.toTypo]}>TO</Text>
      <Image
        style={[styles.crowdingOnTheLineInner, styles.youJustHavePosition]}
        resizeMode="cover"
        source={require("../assets/group-2374851.png")}
      />
      <Text style={[styles.laDefence, styles.laDefenceTypo]}>La Defence</Text>
      <Text style={[styles.chateauDeVincennes, styles.laDefenceTypo]}>
        Chateau de Vincennes
      </Text>
      <Text style={[styles.growdLevel, styles.fewOrNoTypo]}>GROWD LEVEL</Text>
      <Text style={[styles.lowConcorde, styles.fewOrNoTypo]}>Low Concorde</Text>
      <Text
        style={[styles.crowdingSeemsTo, styles.areAvailableTypo]}
      >{`Crowding seems to be low on this line, seats `}</Text>
      <Text style={[styles.areAvailable, styles.areAvailableTypo]}>
        are available.
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.crowdingOnTheLineChild1, styles.rectangleViewLayout]}
      />
      <Text style={styles.t1}>T1</Text>
      <Text style={[styles.tramwayT1, styles.fewOrNoTypo]}>Tramway T1</Text>
      <View style={[styles.crowdingOnTheLineChild2, styles.childPosition]} />
      <View
        style={[
          styles.crowdingOnTheLineChild3,
          styles.carbontimeFilledParentPosition,
        ]}
      />
      <Text style={[styles.thanksForYour, styles.fewOrNoTypo]}>
        Thanks for your help
      </Text>
      <Text style={[styles.youJustHave, styles.youJustHavePosition]}>
        You just have facilitated journey for travellers
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CROWDINGONTHELINE8")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
      </View>
      <View
        style={[
          styles.carbontimeFilledParent,
          styles.carbontimeFilledParentPosition,
        ]}
      >
        <Image
          style={styles.carbontimeFilledIcon}
          resizeMode="cover"
          source={require("../assets/carbontimefilled4.png")}
        />
        <Image
          style={styles.ionwarningIcon}
          resizeMode="cover"
          source={require("../assets/ionwarning2.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
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
          source={require("../assets/iconparksolidreport6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentParentLayout: {
    width: 397,
    position: "absolute",
  },
  contentPosition: {
    height: 1070,
    marginLeft: -198.5,
    width: 397,
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  homeLayout: {
    width: 142,
    left: "50%",
    height: 5,
    position: "absolute",
  },
  frameItemLayout: {
    height: 84,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 331,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  fewOrNoTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
  },
  fewOrNoLayout: {
    height: 78,
    width: 303,
    left: 58,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  crowdingPosition: {
    top: 160,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
  },
  innerLayout: {
    height: 24,
    width: 31,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  toTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 42,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
  },
  youJustHavePosition: {
    top: 404,
    position: "absolute",
  },
  laDefenceTypo: {
    color: Color.lightGray0,
    left: 94,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    lineHeight: 32,
    position: "absolute",
  },
  areAvailableTypo: {
    left: 56,
    height: 78,
    width: 303,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 4,
    width: 26,
    backgroundColor: Color.colorDodgerblue,
    left: 55,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  carbontimeFilledParentPosition: {
    left: 28,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    color: Color.lightGray0,
    textAlign: "center",
    position: "absolute",
  },
  schedulesTypo: {
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    color: Color.lightGray0,
    textAlign: "center",
  },
  reportingLayout: {
    height: 40,
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
    top: 39,
    right: 46,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  vectorIcon: {
    right: 31,
    width: 8,
    height: 5,
    top: 48,
    position: "absolute",
  },
  mapIcon: {
    marginTop: -435,
    marginLeft: -311.5,
    top: "50%",
    width: 974,
    height: 869,
    left: "50%",
    position: "absolute",
  },
  contentChild: {
    backgroundColor: Color.colorGray_400,
    height: 1070,
    marginLeft: -198.5,
    width: 397,
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
    marginLeft: -74.5,
    bottom: 1041,
  },
  crowdingOnThe: {
    top: 41,
    left: 88,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 202,
    height: 35,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 32,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    color: Color.lightGray11,
    position: "absolute",
  },
  content: {
    bottom: -223,
  },
  frameChild: {
    top: 37,
    left: 33,
  },
  averageCrowdingOn: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    left: 69,
    top: 44,
    fontWeight: "500",
  },
  fewOrNo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
    top: 44,
  },
  frameItem: {
    top: 153,
    left: 33,
  },
  heavyCrowding: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    left: 69,
  },
  crowdingIsDense: {
    height: 78,
    width: 303,
    left: 58,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  frameInner: {
    top: 163,
    left: 33,
    position: "absolute",
  },
  groupIcon: {
    left: 34,
    top: 48,
    width: 31,
    position: "absolute",
  },
  contentParent: {
    top: 467,
    height: 437,
    left: 0,
  },
  icon: {
    overflow: "hidden",
  },
  epback: {
    left: 19,
    top: 102,
    width: 28,
    height: 28,
    position: "absolute",
  },
  crowdingOnTheLineChild: {
    top: 218,
    left: 29,
    height: 87,
    backgroundColor: Color.colorMediumturquoise,
    width: 331,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  crowdingOnTheLineItem: {
    top: 392,
    left: 31,
  },
  from: {
    top: 225,
  },
  to: {
    top: 261,
  },
  crowdingOnTheLineInner: {
    height: 24,
    width: 31,
    left: 33,
  },
  laDefence: {
    top: 224,
  },
  chateauDeVincennes: {
    top: 260,
  },
  growdLevel: {
    top: 336,
    left: 143,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
  },
  lowConcorde: {
    left: 70,
    top: 399,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
  },
  crowdingSeemsTo: {
    top: 399,
  },
  areAvailable: {
    top: 416,
  },
  rectangleView: {
    top: 183,
  },
  crowdingOnTheLineChild1: {
    top: 157,
  },
  t1: {
    top: 147,
    width: 23,
    height: 49,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    left: 56,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    fontSize: FontSize.size_mini,
    color: Color.lightGray11,
    position: "absolute",
  },
  tramwayT1: {
    marginLeft: -100.5,
    bottom: 643,
    fontSize: FontSize.size_xl,
    width: 138,
    height: 73,
    alignItems: "center",
    display: "flex",
    fontWeight: "500",
    left: "50%",
    textAlign: "left",
  },
  crowdingOnTheLineChild2: {
    marginLeft: -196.5,
    backgroundColor: Color.colorGray_300,
    width: 397,
    position: "absolute",
    left: "50%",
    height: 852,
  },
  crowdingOnTheLineChild3: {
    top: 349,
    backgroundColor: Color.lightGray0,
    borderColor: Color.lightGray11,
    borderWidth: 2,
    width: 342,
    height: 106,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 28,
  },
  thanksForYour: {
    top: 380,
    left: 124,
    fontSize: FontSize.titlePoppinsMedium_size,
    textAlign: "left",
  },
  youJustHave: {
    left: 62,
    color: Color.colorSilver_100,
    fontSize: FontSize.size_xs,
    top: 404,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 32,
    textAlign: "left",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "11.45%",
    top: "42.84%",
    right: "85.73%",
    bottom: "55.86%",
    width: "2.82%",
    height: "1.3%",
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
  vectorIcon1: {
    height: "57.96%",
    width: "6.45%",
    top: "12.24%",
    right: "88.36%",
    bottom: "29.8%",
    left: "5.18%",
    position: "absolute",
  },
  itineraries: {
    height: 39,
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
    height: 38,
  },
  reporting: {
    left: 181,
    width: 60,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    color: Color.lightGray0,
    textAlign: "center",
  },
  iconParkSolidreport: {
    top: 0,
    left: 192,
    width: 40,
    overflow: "hidden",
  },
  carbontimeFilledParent: {
    top: 784,
    width: 330,
    height: 49,
  },
  crowdingOnTheLine: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default CROWDINGONTHELINE11;
