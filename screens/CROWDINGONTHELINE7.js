import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CROWDINGONTHELINE7 = () => {
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
        style={[styles.mapIcon, styles.mapIconPosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <View style={styles.contentParent}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentChildPosition]} />
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <Text style={styles.crowdingOnThe}>“CROWDING ON THE LINE”</Text>
        </View>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.averageCrowdingOn, styles.metro1Typo]}>
          Average crowding on the line
        </Text>
        <Text style={[styles.fewOrNo, styles.fewOrNoLayout]}>
          Few or no seat available, traffic is fluid.
        </Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.heavyCrowding, styles.crowdingPosition]}>
          Heavy crowding
        </Text>
        <Text style={[styles.crowdingIsDense, styles.crowdingPosition]}>
          Crowding is dense, difficult entry and exit.
        </Text>
        <Image
          style={[styles.frameInner, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-237485.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-237486.png")}
        />
      </View>
      <Image
        style={[styles.crowdingOnTheLineChild, styles.mapIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-872.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>1</Text>
      <Text style={[styles.metro1, styles.textLayout]}>Metro 1</Text>
      <Pressable
        style={styles.epback}
        onPress={() => navigation.navigate("CROWDINGONTHELINE4")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>
      <View style={styles.crowdingOnTheLineItem} />
      <Pressable
        style={[styles.crowdingOnTheLineInner, styles.frameLayout]}
        onPress={() => navigation.navigate("CROWDINGONTHELINE10")}
      />
      <Text style={[styles.from, styles.toTypo]}>FROM</Text>
      <Text style={[styles.to, styles.toTypo]}>TO</Text>
      <Image
        style={[styles.crowdingOnTheLineChild1, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-2374851.png")}
      />
      <Text style={[styles.laDefence, styles.laDefenceTypo]}>La Defence</Text>
      <Text style={[styles.chateauDeVincennes, styles.laDefenceTypo]}>
        Chateau de Vincennes
      </Text>
      <Text style={[styles.growdLevel, styles.metro1Typo]}>GROWD LEVEL</Text>
      <Text style={[styles.lowConcorde, styles.metro1Typo]}>Low Concorde</Text>
      <Text
        style={[styles.crowdingSeemsTo, styles.areAvailableTypo]}
      >{`Crowding seems to be low on this line, seats `}</Text>
      <Text style={[styles.areAvailable, styles.areAvailableTypo]}>
        are available.
      </Text>
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
      </View>
      <View style={styles.carbontimeFilledParent}>
        <Image
          style={styles.carbontimeFilledIcon}
          resizeMode="cover"
          source={require("../assets/carbontimefilled3.png")}
        />
        <Image
          style={styles.ionwarningIcon}
          resizeMode="cover"
          source={require("../assets/ionwarning2.png")}
        />
        <Image
          style={styles.vectorIcon1}
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
          source={require("../assets/iconparksolidreport2.png")}
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
    height: 1070,
    marginLeft: -198.5,
    width: 397,
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
  frameLayout: {
    height: 84,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    width: 331,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  metro1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  fewOrNoLayout: {
    height: 78,
    width: 303,
    fontSize: FontSize.size_xs,
    left: 58,
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
  groupIconLayout: {
    height: 24,
    width: 31,
    position: "absolute",
  },
  textLayout: {
    height: 73,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
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
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  schedulesTypo: {
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
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
    height: 5,
    width: 8,
    top: 48,
    position: "absolute",
  },
  mapIcon: {
    marginTop: -435,
    marginLeft: -311.5,
    top: "50%",
    width: 974,
    height: 869,
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
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    justifyContent: "center",
    width: 202,
    height: 35,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
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
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
  },
  fewOrNo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 44,
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
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
    fontSize: FontSize.size_xs,
    left: 58,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  frameInner: {
    top: 163,
    left: 33,
  },
  groupIcon: {
    left: 34,
    top: 48,
    width: 31,
  },
  contentParent: {
    top: 467,
    height: 437,
    width: 397,
    left: 0,
    position: "absolute",
  },
  crowdingOnTheLineChild: {
    marginLeft: -157.5,
    bottom: 657,
    width: 41,
    height: 41,
  },
  text: {
    marginLeft: -141.5,
    bottom: 641,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    height: 73,
    width: 8,
  },
  metro1: {
    marginLeft: -100.5,
    bottom: 643,
    fontSize: FontSize.size_xl,
    width: 93,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  epback: {
    left: 19,
    top: 102,
    width: 28,
    height: 28,
    position: "absolute",
  },
  crowdingOnTheLineItem: {
    top: 218,
    left: 29,
    height: 87,
    backgroundColor: Color.colorMediumturquoise,
    width: 331,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  crowdingOnTheLineInner: {
    top: 392,
    left: 31,
  },
  from: {
    top: 225,
  },
  to: {
    top: 261,
  },
  crowdingOnTheLineChild1: {
    top: 404,
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
    lineHeight: 32,
    fontWeight: "500",
    color: Color.lightGray11,
    position: "absolute",
  },
  lowConcorde: {
    left: 70,
    top: 399,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    lineHeight: 32,
    fontWeight: "500",
    color: Color.lightGray11,
    position: "absolute",
  },
  crowdingSeemsTo: {
    top: 399,
  },
  areAvailable: {
    top: 416,
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
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
    left: 28,
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

export default CROWDINGONTHELINE7;
