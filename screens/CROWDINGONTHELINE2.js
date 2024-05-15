import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const CROWDINGONTHELINE2 = () => {
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
      <View style={styles.contentWrapper}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentChildPosition]} />
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <Text style={styles.crowdingOnThe}>“CROWDING ON THE LINE”</Text>
        </View>
      </View>
      <Text style={[styles.stop, styles.toTypo]}>STOP</Text>
      <Pressable
        style={styles.epback}
        onPress={() => navigation.navigate("CROWDINGONTHELINE13")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>
      <View style={styles.crowdingOnTheLineChild} />
      <View style={styles.crowdingOnTheLineItem} />
      <View
        style={[styles.crowdingOnTheLineInner, styles.crowdingChildLayout1]}
      />
      <View style={[styles.rectangleView, styles.crowdingChildLayout1]} />
      <View
        style={[styles.crowdingOnTheLineChild1, styles.crowdingChildLayout1]}
      />
      <View
        style={[styles.crowdingOnTheLineChild2, styles.crowdingChildLayout1]}
      />
      <View
        style={[styles.crowdingOnTheLineChild3, styles.crowdingChildLayout1]}
      />
      <View
        style={[styles.crowdingOnTheLineChild4, styles.crowdingChildLayout1]}
      />
      <View
        style={[styles.crowdingOnTheLineChild5, styles.crowdingChildLayout1]}
      />
      <View
        style={[styles.crowdingOnTheLineChild6, styles.crowdingChildLayout1]}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CROWDINGONTHELINE5")}
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
        style={styles.materialSymbolssearchIcon}
        resizeMode="cover"
        source={require("../assets/materialsymbolssearch.png")}
      />
      <View
        style={[styles.crowdingOnTheLineChild7, styles.crowdingChildLayout]}
      />
      <View
        style={[styles.crowdingOnTheLineChild8, styles.crowdingChildLayout]}
      />
      <Text style={[styles.t1, styles.t1Layout]}>T1</Text>
      <Text style={[styles.tramwayT1, styles.vincennesTypo]}>Tramway T1</Text>
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
        <View style={[styles.carbontimeFilledParent, styles.t1Layout]}>
          <Image
            style={styles.carbontimeFilledIcon}
            resizeMode="cover"
            source={require("../assets/carbontimefilled4.png")}
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
  toTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 32,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  crowdingChildLayout1: {
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 32,
    position: "absolute",
  },
  nationTypo: {
    left: 51,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    lineHeight: 32,
    color: Color.lightGray11,
    position: "absolute",
  },
  crowdingChildLayout: {
    height: 4,
    width: 26,
    backgroundColor: Color.colorDodgerblue,
    left: 55,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  t1Layout: {
    height: 49,
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
    width: 8,
    height: 5,
    position: "absolute",
  },
  mapIcon: {
    marginTop: -435,
    marginLeft: -311.5,
    width: 974,
    height: 869,
    left: "50%",
    top: "50%",
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
    lineHeight: 32,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.lightGray11,
    position: "absolute",
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
  stop: {
    marginTop: -266,
    right: 48,
    height: 26,
    width: 40,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
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
    height: 45,
    width: 331,
    borderRadius: Border.br_3xs,
    left: 29,
    backgroundColor: Color.colorMediumturquoise,
    position: "absolute",
  },
  crowdingOnTheLineItem: {
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
  crowdingOnTheLineInner: {
    top: 342,
  },
  rectangleView: {
    top: 394,
  },
  crowdingOnTheLineChild1: {
    top: 446,
  },
  crowdingOnTheLineChild2: {
    top: 498,
  },
  crowdingOnTheLineChild3: {
    top: 550,
  },
  crowdingOnTheLineChild4: {
    top: 602,
  },
  crowdingOnTheLineChild5: {
    top: 654,
  },
  crowdingOnTheLineChild6: {
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
    fontWeight: "700",
    color: Color.lightGray11,
    position: "absolute",
  },
  laDefence: {
    top: 224,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    left: 76,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 32,
  },
  findAStop: {
    top: 284,
    color: Color.colorSilver_100,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    left: 76,
  },
  chateauDeVincennes: {
    top: 349,
    left: 52,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "500",
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
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    color: Color.lightGray11,
    fontWeight: "500",
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
    left: 43,
    position: "absolute",
    overflow: "hidden",
  },
  crowdingOnTheLineChild7: {
    top: 183,
  },
  crowdingOnTheLineChild8: {
    top: 157,
  },
  t1: {
    top: 147,
    left: 56,
    width: 23,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    fontSize: FontSize.size_mini,
    color: Color.lightGray11,
  },
  tramwayT1: {
    marginLeft: -100.5,
    bottom: 643,
    fontSize: FontSize.size_xl,
    width: 138,
    height: 73,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.lightGray11,
    left: "50%",
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
    left: 43,
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

export default CROWDINGONTHELINE2;
