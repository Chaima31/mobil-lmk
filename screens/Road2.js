import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Road2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.road2}>
      <Image
        style={styles.mapIcon}
        resizeMode="cover"
        source={require("../assets/map.png")}
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
      <View style={styles.contentParent}>
        <View style={[styles.content, styles.contentPosition]}>
          <View style={[styles.contentChild, styles.contentPosition]} />
          <View style={styles.letMeKnowWrapper}>
            <Text style={styles.letMeKnow}>Let Me Know</Text>
          </View>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.chooseStartingPoint, styles.chooseTypo]}>
          Choose starting point or click on the map
        </Text>
        <Text style={[styles.chooseDestinationOr, styles.chooseTypo]}>
          Choose destination or click on the map
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
        <Pressable
          style={styles.activateNow}
          onPress={() => navigation.navigate("Road3")}
        >
          <Text style={styles.activateNow1}>Activate Now</Text>
        </Pressable>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector14.png")}
        />
        <Text style={styles.activateYourCurrent}>
          Activate your current location to determine your zone.
        </Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Road3")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.barreBas, styles.barrePosition]}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
      </View>
      <View style={[styles.barreBas1, styles.barrePosition]}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
        <View style={styles.carbontimeFilledParent}>
          <Image
            style={styles.carbontimeFilledIcon}
            resizeMode="cover"
            source={require("../assets/carbontimefilled.png")}
          />
          <Image
            style={styles.ionwarningIcon}
            resizeMode="cover"
            source={require("../assets/ionwarning.png")}
          />
          <Image
            style={[styles.vectorIcon9, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.itineraries, styles.warningsLayout]}>
            Itineraries
          </Text>
          <Text style={[styles.schedules, styles.warningsTypo]}>Schedules</Text>
          <Text style={[styles.warnings, styles.warningsTypo]}>Warnings</Text>
          <Text style={[styles.reporting, styles.reportingLayout]}>
            Reporting
          </Text>
          <Image
            style={[styles.iconParkSolidreport, styles.reportingLayout]}
            resizeMode="cover"
            source={require("../assets/iconparksolidreport8.png")}
          />
        </View>
      </View>
      <Image
        style={styles.road2Child}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    height: 631,
    left: "50%",
    marginLeft: -198.5,
    width: 397,
    position: "absolute",
  },
  homeLayout: {
    width: 142,
    left: "50%",
    height: 5,
    position: "absolute",
  },
  frameLayout: {
    height: 52,
    width: 317,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
    left: 37,
    position: "absolute",
  },
  chooseTypo: {
    height: 31,
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 32,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "43.9%",
    right: "44.19%",
    width: "11.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barrePosition: {
    height: 81,
    width: 431,
    marginLeft: -215.5,
    left: "50%",
    position: "absolute",
  },
  warningsLayout: {
    width: 56,
    position: "absolute",
  },
  warningsTypo: {
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    textAlign: "center",
  },
  reportingLayout: {
    height: 40,
    position: "absolute",
  },
  mapIcon: {
    top: -17,
    left: -125,
    width: 974,
    height: 869,
    position: "absolute",
  },
  gradientTop: {
    height: "22.89%",
    right: "0%",
    bottom: "77.11%",
    left: "0%",
    display: "none",
    backgroundColor: "transparent",
    top: "0%",
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
  contentChild: {
    backgroundColor: Color.colorGray_400,
    bottom: 0,
    borderRadius: Border.br_31xl,
  },
  letMeKnow: {
    marginLeft: -111,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.spriteGraffiti,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "center",
    height: 27,
    width: 222,
    bottom: 0,
    left: "50%",
    color: Color.lightGray11,
    position: "absolute",
  },
  letMeKnowWrapper: {
    marginLeft: -118.5,
    bottom: 560,
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
    marginLeft: -77.5,
    bottom: 612,
  },
  content: {
    bottom: -194,
  },
  frameChild: {
    top: 100,
  },
  frameItem: {
    top: 175,
  },
  chooseStartingPoint: {
    top: 111,
    left: 47,
    width: 297,
  },
  chooseDestinationOr: {
    top: 186,
    left: 56,
    width: 281,
  },
  vectorIcon1: {
    height: "3.52%",
    width: "5.14%",
    top: "35.7%",
    right: "3.68%",
    bottom: "60.78%",
    left: "91.18%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "3.89%",
    width: "4.28%",
    top: "8.01%",
    right: "26.45%",
    bottom: "88.1%",
    left: "69.27%",
    position: "absolute",
  },
  contentParent: {
    top: 467,
    height: 437,
    width: 397,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 49,
    height: 118,
    borderWidth: 1,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorMediumturquoise,
    width: 346,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    top: 117,
    left: 83,
    backgroundColor: Color.lightGray0,
    width: 179,
    height: 39,
    borderWidth: 1,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  activateNow1: {
    fontSize: FontSize.titlePoppinsMedium_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMediumturquoise,
    textAlign: "center",
  },
  activateNow: {
    left: 117,
    top: 124,
    position: "absolute",
  },
  vectorIcon3: {
    height: "8.43%",
    width: "14.51%",
    top: "24.64%",
    right: "42.89%",
    bottom: "66.93%",
    left: "42.6%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "6.1%",
    width: "13.82%",
    top: "21.89%",
    right: "43.24%",
    bottom: "72.01%",
    left: "42.95%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "26.32%",
    bottom: "73.68%",
    top: "0%",
  },
  vectorIcon6: {
    height: "4.78%",
    top: "22.01%",
    bottom: "73.21%",
    opacity: 0.9,
  },
  vectorIcon7: {
    height: "24.64%",
    width: "11.3%",
    top: "1.2%",
    right: "44.51%",
    bottom: "74.16%",
    left: "44.19%",
    position: "absolute",
  },
  vectorIcon8: {
    height: "20.28%",
    width: "9.88%",
    top: "3.59%",
    right: "45.2%",
    bottom: "76.14%",
    left: "44.91%",
    position: "absolute",
  },
  activateYourCurrent: {
    top: 61,
    left: 41,
    width: 266,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.lightGray11,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "4.05%",
    top: "37.74%",
    right: "92.75%",
    bottom: "55.62%",
    width: "3.21%",
    height: "6.64%",
    position: "absolute",
  },
  rectangleParent: {
    top: 126,
    left: 25,
    height: 167,
    width: 346,
    position: "absolute",
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    width: 431,
    marginLeft: -215.5,
    borderRadius: Border.br_xl,
    bottom: 0,
  },
  barreBas: {
    bottom: 0,
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
  vectorIcon9: {
    height: "57.96%",
    width: "6.45%",
    top: "12.24%",
    right: "88.36%",
    bottom: "29.8%",
    left: "5.18%",
    position: "absolute",
  },
  itineraries: {
    color: Color.colorTeal,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    width: 56,
    height: 39,
    textAlign: "center",
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
    width: 56,
    position: "absolute",
    height: 38,
  },
  reporting: {
    left: 181,
    width: 60,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    textAlign: "center",
  },
  iconParkSolidreport: {
    top: 0,
    left: 192,
    width: 40,
    overflow: "hidden",
  },
  carbontimeFilledParent: {
    top: 17,
    left: 49,
    width: 330,
    height: 49,
    position: "absolute",
  },
  barreBas1: {
    bottom: 4,
  },
  road2Child: {
    top: 67,
    left: 33,
    width: 47,
    height: 47,
    position: "absolute",
  },
  road2: {
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default Road2;
