import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const CROWDINGONTHELINE1 = () => {
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
      <View style={styles.contentWrapper}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentChildPosition]} />
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <Text style={[styles.crowdingOnThe, styles.stopFlexBox]}>
            “CROWDING ON THE LINE”
          </Text>
        </View>
      </View>
      <Image
        style={[styles.crowdingOnTheLineChild, styles.mapIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-872.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>1</Text>
      <Text style={[styles.metro1, styles.vincennesTypo1]}>Metro 1</Text>
      <Text style={[styles.stop, styles.toTypo]}>STOP</Text>
      <Pressable
        style={styles.epback}
        onPress={() => navigation.navigate("CROWDINGONTHELINE")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>
      <View style={styles.crowdingOnTheLineItem} />
      <View style={styles.crowdingOnTheLineInner} />
      <View style={[styles.rectangleView, styles.crowdingChildLayout]} />
      <View
        style={[styles.crowdingOnTheLineChild1, styles.crowdingChildLayout]}
      />
      <View
        style={[styles.crowdingOnTheLineChild2, styles.crowdingChildLayout]}
      />
      <View
        style={[styles.crowdingOnTheLineChild3, styles.crowdingChildLayout]}
      />
      <View
        style={[styles.crowdingOnTheLineChild4, styles.crowdingChildLayout]}
      />
      <View
        style={[styles.crowdingOnTheLineChild5, styles.crowdingChildLayout]}
      />
      <View
        style={[styles.crowdingOnTheLineChild6, styles.crowdingChildLayout]}
      />
      <View
        style={[styles.crowdingOnTheLineChild7, styles.crowdingChildLayout]}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CROWDINGONTHELINE4")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
      <Text style={[styles.to, styles.toTypo]}>TO</Text>
      <Text style={[styles.laDefence, styles.laDefenceClr]}>La Defence</Text>
      <Text style={[styles.findAStop, styles.vincennesTypo]}>Find a stop</Text>
      <Text style={[styles.chateauDeVincennes, styles.vincennesTypo]}>
        Chateau de Vincennes
      </Text>
      <Text style={[styles.berault, styles.nationTypo]}>Berault</Text>
      <Text style={[styles.saintMande, styles.nationTypo]}>Saint-Mande</Text>
      <Text style={[styles.porteDeVincennes, styles.vincennesTypo]}>
        Porte de Vincennes
      </Text>
      <Text style={[styles.nation, styles.nationTypo]}>Nation</Text>
      <Text style={[styles.bastille, styles.nationTypo]}>Bastille</Text>
      <Text style={[styles.concorde, styles.nationTypo]}>Concorde</Text>
      <Text style={[styles.georgeV, styles.nationTypo]}>George V</Text>
      <Image
        style={[
          styles.materialSymbolssearchIcon,
          styles.carbontimeFilledParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/materialsymbolssearch.png")}
      />
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
        <View
          style={[
            styles.carbontimeFilledParent,
            styles.carbontimeFilledParentPosition,
          ]}
        >
          <Image
            style={styles.carbontimeFilledIcon}
            resizeMode="cover"
            source={require("../assets/carbontimefilled3.png")}
          />
          <Image
            style={styles.ionwarningIcon}
            resizeMode="cover"
            source={require("../assets/ionwarning1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.itineraries, styles.warningsTypo]}>
            Itineraries
          </Text>
          <Text style={[styles.schedules, styles.schedulesTypo]}>
            Schedules
          </Text>
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
  stopFlexBox: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    lineHeight: 32,
    color: Color.lightGray11,
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
  },
  vincennesTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  toTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  crowdingChildLayout: {
    left: 30,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    height: 45,
    width: 331,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  laDefenceClr: {
    color: Color.lightGray0,
    position: "absolute",
  },
  vincennesTypo: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    lineHeight: 32,
  },
  nationTypo: {
    left: 51,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
  },
  carbontimeFilledParentPosition: {
    left: 43,
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
    top: 48,
    right: 31,
    height: 5,
    width: 8,
    position: "absolute",
  },
  mapIcon: {
    marginTop: -435,
    marginLeft: -311.5,
    width: 974,
    height: 869,
    top: "50%",
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
    justifyContent: "center",
    width: 202,
    height: 35,
    textAlign: "center",
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
    position: "absolute",
  },
  metro1: {
    marginLeft: -100.5,
    bottom: 643,
    fontSize: FontSize.size_xl,
    width: 93,
    height: 73,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    color: Color.lightGray11,
  },
  stop: {
    marginTop: -266,
    right: 48,
    height: 26,
    width: 40,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
    top: "50%",
    textAlign: "left",
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
  crowdingOnTheLineItem: {
    top: 218,
    height: 45,
    width: 331,
    borderRadius: Border.br_3xs,
    left: 29,
    backgroundColor: Color.colorMediumturquoise,
    position: "absolute",
  },
  crowdingOnTheLineInner: {
    top: 277,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    height: 45,
    width: 331,
    borderRadius: Border.br_3xs,
    left: 29,
    position: "absolute",
  },
  rectangleView: {
    top: 342,
  },
  crowdingOnTheLineChild1: {
    top: 394,
  },
  crowdingOnTheLineChild2: {
    top: 446,
  },
  crowdingOnTheLineChild3: {
    top: 498,
  },
  crowdingOnTheLineChild4: {
    top: 550,
  },
  crowdingOnTheLineChild5: {
    top: 602,
  },
  crowdingOnTheLineChild6: {
    top: 654,
  },
  crowdingOnTheLineChild7: {
    top: 706,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "82.95%",
    top: "27.35%",
    right: "13.99%",
    bottom: "70.77%",
    width: "3.05%",
    height: "1.88%",
    position: "absolute",
  },
  to: {
    top: 225,
    left: 42,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    lineHeight: 32,
    fontWeight: "700",
    color: Color.lightGray11,
    position: "absolute",
  },
  laDefence: {
    top: 224,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    lineHeight: 32,
    left: 76,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  findAStop: {
    top: 284,
    color: Color.colorSilver_100,
    left: 76,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  chateauDeVincennes: {
    top: 349,
    left: 52,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    color: Color.lightGray11,
  },
  berault: {
    top: 400,
  },
  saintMande: {
    top: 452,
  },
  porteDeVincennes: {
    top: 504,
    left: 50,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    color: Color.lightGray11,
  },
  nation: {
    top: 556,
  },
  bastille: {
    top: 608,
  },
  concorde: {
    top: 660,
  },
  georgeV: {
    top: 712,
  },
  materialSymbolssearchIcon: {
    top: 290,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  barreBasChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumturquoise,
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
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
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
    top: 13,
    width: 330,
    height: 49,
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

export default CROWDINGONTHELINE1;
