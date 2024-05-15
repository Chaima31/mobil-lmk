import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DeleteMyAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deleteMyAccount}>
      <Image
        style={styles.screenshot20240419At1506}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View style={styles.deleteMyAccountChild} />
      <View style={styles.languageWrapper}>
        <Text style={styles.language}>Language</Text>
      </View>
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate("Setings")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/header.png")}
        />
      </Pressable>
      <View style={[styles.deleteMyAccountInner, styles.deleteLayout]}>
        <View
          style={[styles.ifYouNeedToDeleteAnAccouWrapper, styles.deleteLayout]}
        >
          <Text
            style={styles.ifYouNeed}
          >{`If you need to delete an account you're 
prompted to provide a reason.`}</Text>
        </View>
      </View>
      <View
        style={[styles.deleteMyAccountItem, styles.rectangleViewPosition]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View
          style={[styles.noLongerUsingTheServiceParent, styles.groupViewLayout]}
        >
          <Text style={[styles.noLongerUsing, styles.foundABetterTypo]}>
            No longer using the service
          </Text>
          <Text style={[styles.foundABetter, styles.foundABetterTypo]}>
            Found a better alternative
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.deleteMyAccountInner1,
          styles.deleteMyAccountInner1Layout,
        ]}
      >
        <View
          style={[
            styles.privacyConcernsParent,
            styles.deleteMyAccountInner1Layout,
          ]}
        >
          <Text style={[styles.noLongerUsing, styles.foundABetterTypo]}>
            Privacy concerns
          </Text>
          <Text style={[styles.foundABetter, styles.foundABetterTypo]}>
            Too many notifications
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.deleteMyAccountInner2,
          styles.deleteMyAccountInner2Layout,
        ]}
      >
        <View
          style={[
            styles.difficultyNavigatingTheAppParent,
            styles.deleteMyAccountInner2Layout,
          ]}
        >
          <Text style={[styles.noLongerUsing, styles.foundABetterTypo]}>
            Difficulty navigating the app
          </Text>
          <Text style={[styles.foundABetter, styles.foundABetterTypo]}>
            Account security concerns
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.deleteMyAccountInner3,
          styles.deleteMyAccountInner3Layout,
        ]}
      >
        <View
          style={[
            styles.personalReasonsParent,
            styles.deleteMyAccountInner3Layout,
          ]}
        >
          <Text style={[styles.noLongerUsing, styles.foundABetterTypo]}>
            Personal reasons
          </Text>
          <Text style={[styles.foundABetter, styles.foundABetterTypo]}>
            Others
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.delete}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.delete1}>Delete</Text>
      </Pressable>
      <Image
        style={[styles.lineIcon, styles.deleteChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild1, styles.deleteChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild2, styles.deleteChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild3, styles.deleteChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild4, styles.deleteChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild5, styles.deleteChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild6, styles.deleteChildLayout1]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.deleteChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild7, styles.deleteChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild8, styles.deleteChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild9, styles.deleteChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild10, styles.deleteChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild11, styles.deleteChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild12, styles.deleteChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={[styles.deleteMyAccountChild13, styles.deleteChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={styles.deleteMyAccountChild14}
        resizeMode="cover"
        source={require("../assets/ellipse-129.png")}
      />
      <View style={styles.barreBasParent}>
        <View style={styles.barrePosition}>
          <View style={[styles.barreBasChild, styles.barrePosition]} />
        </View>
        <View style={styles.carbontimeFilledParent}>
          <Image
            style={styles.carbontimeFilledIcon}
            resizeMode="cover"
            source={require("../assets/carbontimefilled5.png")}
          />
          <Image
            style={styles.ionwarningIcon}
            resizeMode="cover"
            source={require("../assets/ionwarning1.png")}
          />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
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
            source={require("../assets/iconparksolidreport8.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteLayout: {
    height: 48,
    width: 301,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 355,
    left: 19,
    position: "absolute",
  },
  groupViewLayout: {
    height: 74,
    width: 206,
    position: "absolute",
  },
  foundABetterTypo: {
    textAlign: "left",
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    left: 0,
    position: "absolute",
  },
  deleteMyAccountInner1Layout: {
    width: 174,
    height: 74,
    position: "absolute",
  },
  deleteMyAccountInner2Layout: {
    width: 215,
    height: 74,
    position: "absolute",
  },
  deleteMyAccountInner3Layout: {
    width: 130,
    height: 74,
    position: "absolute",
  },
  deleteChildLayout1: {
    height: 2,
    width: 355,
    left: 19,
    position: "absolute",
  },
  deleteChildLayout: {
    height: 18,
    width: 18,
    left: 35,
    position: "absolute",
  },
  barrePosition: {
    left: "50%",
    bottom: 0,
    marginLeft: -215.5,
    height: 81,
    width: 431,
    position: "absolute",
  },
  warningsTypo: {
    width: 56,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    position: "absolute",
  },
  schedulesTypo: {
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    color: Color.lightGray0,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  reportingLayout: {
    height: 40,
    position: "absolute",
  },
  screenshot20240419At1506: {
    width: 954,
    left: 0,
    top: 0,
    position: "absolute",
    height: 852,
  },
  deleteMyAccountChild: {
    top: -9,
    backgroundColor: Color.colorGray_200,
    width: 401,
    height: 861,
    left: 0,
    position: "absolute",
  },
  language: {
    fontSize: FontSize.titlePoppinsLarge_size,
    lineHeight: 28,
    color: Color.lightGray11,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    width: 221,
    left: 0,
    top: 0,
    position: "absolute",
  },
  languageWrapper: {
    top: 65,
    left: 87,
    height: 28,
    width: 221,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  header: {
    left: 24,
    top: 69,
    width: 24,
    height: 24,
    position: "absolute",
  },
  ifYouNeed: {
    color: Color.colorSilver_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  ifYouNeedToDeleteAnAccouWrapper: {
    left: 0,
    top: 0,
  },
  deleteMyAccountInner: {
    top: 117,
    left: 50,
  },
  deleteMyAccountItem: {
    top: 183,
    borderRadius: 13,
    borderStyle: "solid",
    borderColor: "#d5d5d5",
    borderWidth: 1,
    height: 408,
    backgroundColor: Color.lightGray0,
  },
  rectangleView: {
    top: 693,
    backgroundColor: Color.lightGray11,
    height: 57,
    borderRadius: Border.br_xl,
  },
  noLongerUsing: {
    top: 0,
  },
  foundABetter: {
    top: 50,
  },
  noLongerUsingTheServiceParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 199,
    left: 65,
  },
  privacyConcernsParent: {
    left: 0,
    top: 0,
  },
  deleteMyAccountInner1: {
    top: 301,
    left: 65,
  },
  difficultyNavigatingTheAppParent: {
    left: 0,
    top: 0,
  },
  deleteMyAccountInner2: {
    top: 402,
    left: 65,
  },
  personalReasonsParent: {
    left: 0,
    top: 0,
  },
  deleteMyAccountInner3: {
    top: 503,
    left: 65,
  },
  delete1: {
    fontSize: FontSize.size_lg,
    color: Color.lightGray0,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  delete: {
    left: 167,
    top: 710,
    position: "absolute",
  },
  lineIcon: {
    top: 235,
  },
  deleteMyAccountChild1: {
    top: 286,
  },
  deleteMyAccountChild2: {
    top: 337,
  },
  deleteMyAccountChild3: {
    top: 388,
  },
  deleteMyAccountChild4: {
    top: 439,
  },
  deleteMyAccountChild5: {
    top: 490,
  },
  deleteMyAccountChild6: {
    top: 541,
  },
  ellipseIcon: {
    top: 202,
  },
  deleteMyAccountChild7: {
    top: 252,
  },
  deleteMyAccountChild8: {
    top: 304,
  },
  deleteMyAccountChild9: {
    top: 354,
  },
  deleteMyAccountChild10: {
    top: 405,
  },
  deleteMyAccountChild11: {
    top: 455,
  },
  deleteMyAccountChild12: {
    top: 506,
  },
  deleteMyAccountChild13: {
    top: 556,
  },
  deleteMyAccountChild14: {
    top: 560,
    left: 39,
    width: 10,
    height: 10,
    position: "absolute",
  },
  barreBasChild: {
    backgroundColor: Color.colorMediumturquoise,
    borderRadius: Border.br_xl,
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
  vectorIcon: {
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
    color: Color.colorTeal,
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
    color: Color.lightGray0,
  },
  reporting: {
    left: 181,
    width: 60,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    color: Color.lightGray0,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  iconParkSolidreport: {
    left: 192,
    width: 40,
    top: 0,
    overflow: "hidden",
  },
  carbontimeFilledParent: {
    top: 12,
    width: 330,
    height: 49,
    left: 50,
    position: "absolute",
  },
  barreBasParent: {
    top: 771,
    left: -19,
    height: 81,
    width: 431,
    position: "absolute",
  },
  deleteMyAccount: {
    shadowColor: "rgba(0, 0, 0, 0.21)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    backgroundColor: Color.lightGray0,
  },
});

export default DeleteMyAccount;
