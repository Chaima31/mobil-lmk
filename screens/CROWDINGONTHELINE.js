import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CROWDINGONTHELINE = () => {
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
        style={[styles.mapIcon, styles.text7Position]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <Image
        style={styles.crowdingOnTheLineChild}
        resizeMode="cover"
        source={require("../assets/group-237477.png")}
      />
      <View style={styles.contentParent}>
        <View style={[styles.content, styles.contentPosition1]}>
          <View style={[styles.contentChild, styles.contentPosition1]} />
          <View style={[styles.letMeKnowWrapper, styles.letLayout]}>
            <Text style={[styles.letMeKnow, styles.letMeKnowFlexBox]}>
              Let Me Know
            </Text>
          </View>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <View style={[styles.contentItem, styles.contentPosition]} />
          <View style={[styles.contentInner, styles.contentPosition]} />
          <View style={[styles.rectangleView, styles.contentChildLayout]} />
          <View style={[styles.contentChild1, styles.contentChildLayout]} />
          <View style={[styles.contentChild2, styles.contentChildLayout]} />
          <View style={[styles.contentChild3, styles.contentChildLayout]} />
          <View style={[styles.contentChild4, styles.contentChildLayout]} />
          <View style={[styles.contentChild5, styles.contentChildLayout]} />
          <View style={[styles.contentChild6, styles.contentChildLayout]} />
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.crowdingOnThe, styles.letMeKnowFlexBox]}>
            “CROWDING ON THE LINE”
          </Text>
          <Image
            style={[styles.ellipseIcon, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-87.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.frameItemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-87.png")}
          />
          <Text style={[styles.text, styles.textTypo2]}>1</Text>
          <Pressable
            style={styles.textPosition}
            onPress={() => navigation.navigate("CROWDINGONTHELINE1")}
          >
            <Text style={[styles.text1, styles.textTypo2]}>1</Text>
          </Pressable>
        </View>
        <Image
          style={[styles.frameChild, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-89.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-90.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-91.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-92.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-93.png")}
        />
        <Text style={[styles.text2, styles.textTypo1]}>3</Text>
        <Text style={[styles.text3, styles.textTypo]}>4</Text>
        <Text style={[styles.text4, styles.textTypo]}>5</Text>
        <Text style={[styles.text5, styles.textTypo]}>6</Text>
        <Text style={[styles.text6, styles.textTypo1]}>7</Text>
        <Text style={[styles.metro3, styles.metroTypo]}>Metro 3</Text>
        <Text style={[styles.metro4, styles.metroTypo]}>Metro 4</Text>
        <Text style={[styles.metro5, styles.metroTypo]}>Metro 5</Text>
        <Text style={[styles.metro6, styles.metroTypo]}>Metro 6</Text>
        <Text style={[styles.metro7, styles.metroTypo]}>Metro 7</Text>
      </View>
      <Image
        style={[styles.crowdingOnTheLineItem, styles.frameItemLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-88.png")}
      />
      <Text style={[styles.text7, styles.textTypo2]}>2</Text>
      <Text style={[styles.metro1, styles.metroPosition]}>Metro 1</Text>
      <Pressable
        style={styles.metroPosition}
        onPress={() => navigation.navigate("CROWDINGONTHELINE1")}
      >
        <Text style={[styles.metro12, styles.metroTypo1]}>Metro 1</Text>
      </Pressable>
      <Text style={[styles.metro2, styles.metroTypo]}>Metro 2</Text>
      <Image
        style={[styles.crowdingOnTheLineInner, styles.text7Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-871.png")}
      />
      <Text style={[styles.m, styles.metroTypo1]}>M</Text>
      <Pressable
        style={styles.emojioneMonotonetram}
        onPress={() => navigation.navigate("CROWDINGONTHELINE13")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/emojionemonotonetram.png")}
        />
      </Pressable>
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
      <View style={styles.barrePosition}>
        <View style={[styles.barreBasChild, styles.barrePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text7Position: {
    left: "50%",
    position: "absolute",
  },
  contentPosition1: {
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
    textAlign: "center",
    lineHeight: 32,
    alignItems: "center",
    display: "flex",
    color: Color.lightGray11,
    position: "absolute",
  },
  homeLayout: {
    width: 142,
    left: "50%",
    height: 5,
    position: "absolute",
  },
  contentPosition: {
    height: 52,
    bottom: 855,
    borderRadius: Border.br_xl,
    left: 0,
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
  frameItemLayout: {
    width: 27,
    height: 27,
    left: "50%",
    position: "absolute",
  },
  textTypo2: {
    height: 48,
    width: 5,
    marginLeft: -171.5,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    textAlign: "left",
  },
  textTypo1: {
    marginLeft: -173.5,
    height: 48,
    width: 5,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    marginLeft: -174.5,
    height: 48,
    width: 5,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    lineHeight: 32,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  metroTypo: {
    left: 60,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  metroPosition: {
    top: 326,
    left: 60,
    position: "absolute",
  },
  metroTypo1: {
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
  },
  barrePosition: {
    height: 81,
    width: 431,
    marginLeft: -215.5,
    bottom: 0,
    left: "50%",
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
    left: 30,
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
  },
  contentInner: {
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
    maxWidth: "100%",
    height: 17,
    position: "absolute",
    overflow: "hidden",
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
  ellipseIcon: {
    bottom: 772,
    marginLeft: -182.5,
    width: 27,
  },
  text: {
    bottom: 762,
    left: "50%",
    position: "absolute",
    color: Color.lightGray11,
  },
  text1: {
    color: Color.lightGray11,
  },
  textPosition: {
    bottom: 762,
    left: "50%",
    position: "absolute",
  },
  content: {
    bottom: -223,
  },
  frameChild: {
    bottom: 425,
    marginLeft: -182.5,
    width: 27,
  },
  frameItem: {
    bottom: 363,
    marginLeft: -182.5,
    width: 27,
  },
  frameInner: {
    bottom: 301,
    marginLeft: -182.5,
    width: 27,
  },
  frameChild1: {
    bottom: 239,
    marginLeft: -182.5,
    width: 27,
  },
  frameChild2: {
    bottom: 177,
    marginLeft: -182.5,
    width: 27,
  },
  text2: {
    bottom: 415,
    color: Color.lightGray0,
  },
  text3: {
    bottom: 353,
    color: Color.lightGray0,
  },
  text4: {
    bottom: 290,
    color: Color.lightGray11,
  },
  text5: {
    bottom: 229,
    color: Color.lightGray11,
  },
  text6: {
    bottom: 166,
    color: Color.lightGray11,
  },
  metro3: {
    top: -17,
  },
  metro4: {
    top: 45,
  },
  metro5: {
    top: 107,
  },
  metro6: {
    top: 169,
  },
  metro7: {
    top: 231,
  },
  contentParent: {
    top: 467,
    height: 437,
    width: 397,
    left: 0,
    position: "absolute",
  },
  crowdingOnTheLineItem: {
    marginLeft: -180.5,
    bottom: 433,
  },
  text7: {
    bottom: 423,
    color: Color.lightGray0,
    left: "50%",
    position: "absolute",
  },
  metro1: {
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 32,
    textAlign: "left",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
  },
  metro12: {
    fontSize: FontSize.size_mini,
  },
  metro2: {
    top: 390,
  },
  crowdingOnTheLineInner: {
    marginLeft: -157.5,
    bottom: 584,
    width: 41,
    height: 41,
  },
  m: {
    marginLeft: -145.5,
    bottom: 569,
    fontSize: FontSize.size_lg,
    height: 73,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    left: "50%",
    width: 8,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  emojioneMonotonetram: {
    left: 178,
    top: 226,
    width: 40,
    height: 40,
    position: "absolute",
  },
  solarbusBold: {
    left: 308,
    top: 224,
    width: 44,
    height: 44,
    position: "absolute",
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    borderRadius: Border.br_xl,
    height: 81,
    width: 431,
    marginLeft: -215.5,
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

export default CROWDINGONTHELINE;
