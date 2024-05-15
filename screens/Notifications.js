import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <Image
        style={[
          styles.screenshot20240419At1506,
          styles.notificationsChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View
        style={[styles.notificationsChild, styles.notificationsChildPosition]}
      />
      <Image
        style={styles.logoTypography3}
        resizeMode="cover"
        source={require("../assets/logo-typography-3.png")}
      />
      <View style={styles.notificationsWrapper}>
        <Text style={styles.notifications1}>Notifications</Text>
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
      <View style={[styles.component14Parent, styles.parentPosition]}>
        <View style={[styles.component14, styles.componentLayout]}>
          <Text style={styles.generalNotification}>General Notification</Text>
          <View style={styles.togglePosition}>
            <View style={styles.toggleon}>
              <View style={styles.rectangle} />
              <Image
                style={[styles.ovalIcon, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.common, styles.commonTypo]}>Common</Text>
        <View style={[styles.component15, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Sound</Text>
          <View style={styles.togglePosition}>
            <View style={styles.toggleon}>
              <View style={styles.rectanglePosition} />
              <Image
                style={[styles.ovalIcon1, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.component16, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Vibrate</Text>
          <View style={styles.togglePosition}>
            <View style={styles.toggleon}>
              <View style={styles.rectangle} />
              <Image
                style={[styles.ovalIcon, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.component17Parent, styles.parentPosition]}>
        <View style={[styles.component17, styles.componentLayout]}>
          <Text style={styles.generalNotification}>App updates</Text>
          <View style={styles.togglePosition}>
            <View style={styles.toggleon}>
              <View style={styles.rectanglePosition} />
              <Image
                style={[styles.ovalIcon1, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval1.png")}
              />
            </View>
          </View>
        </View>
        <Text
          style={[styles.systemServices, styles.commonTypo]}
        >{`System & services update`}</Text>
        <View style={[styles.component18, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Allerte</Text>
          <View style={styles.togglePosition}>
            <View style={styles.toggleon}>
              <View style={styles.rectangle} />
              <Image
                style={[styles.ovalIcon, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.component19, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Crowding</Text>
          <View style={styles.togglePosition}>
            <View style={styles.toggleon}>
              <View style={styles.rectangle} />
              <Image
                style={[styles.ovalIcon, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.component20, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Pickpockets</Text>
          <View style={[styles.toggle6, styles.togglePosition]}>
            <View style={styles.toggleon}>
              <View style={styles.rectangle} />
              <Image
                style={[styles.ovalIcon, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.component21, styles.componentLayout]}>
          <Text style={styles.generalNotification}>Controllers</Text>
          <View style={[styles.toggle6, styles.togglePosition]}>
            <View style={styles.toggleon}>
              <View style={styles.rectangle} />
              <Image
                style={[styles.ovalIcon, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
      </View>
      <View style={[styles.component22Parent, styles.parentPosition]}>
        <View style={[styles.component22, styles.componentLayout]}>
          <Text style={styles.generalNotification}>New Service Available</Text>
          <View style={styles.togglePosition}>
            <View style={styles.toggleon}>
              <View style={styles.rectanglePosition} />
              <Image
                style={[styles.ovalIcon1, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.common, styles.commonTypo]}>Others</Text>
        <View style={[styles.component23, styles.componentLayout]}>
          <Text style={styles.generalNotification}>New Service Available</Text>
          <View style={styles.togglePosition}>
            <View style={styles.toggleon}>
              <View style={styles.rectangle} />
              <Image
                style={[styles.ovalIcon, styles.ovalIconLayout]}
                resizeMode="cover"
                source={require("../assets/oval.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-111.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-111.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-111.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Image
          style={[styles.groupChild5, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-113.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Image
          style={[styles.groupChild5, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-113.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Image
          style={[styles.groupChild5, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-113.png")}
        />
      </View>
      <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Image
          style={[styles.groupChild5, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-113.png")}
        />
      </View>
      <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Image
          style={[styles.groupChild5, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-113.png")}
        />
      </View>
      <View style={[styles.rectangleParent5, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Image
          style={[styles.groupChild5, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-113.png")}
        />
      </View>
      <View style={[styles.rectangleParent6, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupLayout]} />
        <Image
          style={[styles.groupChild5, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-113.png")}
        />
      </View>
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
            style={[styles.vectorIcon, styles.ovalIconLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsChildPosition: {
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    width: 342,
    left: 24,
    position: "absolute",
  },
  componentLayout: {
    height: 20,
    width: 342,
    left: 0,
    position: "absolute",
  },
  ovalIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  commonTypo: {
    lineHeight: 24,
    fontSize: FontSize.titlePoppinsMedium_size,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.lightGray11,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  togglePosition: {
    left: "88.3%",
    width: "11.7%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupLayout1: {
    height: 1,
    width: 343,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_500,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupParentLayout: {
    height: 23,
    width: 47,
    position: "absolute",
  },
  groupLayout: {
    height: 21,
    borderRadius: Border.br_2xs_5,
    top: 1,
    width: 47,
    left: 0,
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 23,
    height: 23,
    top: 0,
    position: "absolute",
  },
  barrePosition: {
    bottom: 0,
    marginLeft: -215.5,
    height: 81,
    width: 431,
    left: "50%",
    position: "absolute",
  },
  warningsLayout: {
    width: 56,
    position: "absolute",
  },
  warningsTypo: {
    color: Color.lightGray0,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
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
    top: 0,
    height: 852,
  },
  notificationsChild: {
    top: -9,
    backgroundColor: Color.colorGray_200,
    width: 401,
    height: 861,
  },
  logoTypography3: {
    marginLeft: -78.5,
    bottom: 83,
    width: 145,
    height: 150,
    left: "50%",
    position: "absolute",
  },
  notifications1: {
    fontSize: FontSize.titlePoppinsLarge_size,
    lineHeight: 28,
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    width: 221,
    left: 0,
    top: 0,
    position: "absolute",
  },
  notificationsWrapper: {
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
    top: 69,
    width: 24,
    height: 24,
    left: 24,
    position: "absolute",
  },
  generalNotification: {
    width: "70.18%",
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyMedium,
    textAlign: "left",
    letterSpacing: 0,
    left: "0%",
    top: "0%",
    color: Color.lightGray11,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_3xs,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  ovalIcon: {
    right: "7.5%",
    left: "52.5%",
    bottom: "10%",
    top: "10%",
    width: "40%",
    height: "80%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  toggleon: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  component14: {
    top: 38,
  },
  common: {
    top: 0,
  },
  rectanglePosition: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.lightGray4,
    left: "100%",
    right: "-100%",
    borderRadius: Border.br_3xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  ovalIcon1: {
    right: "52.5%",
    left: "7.5%",
    bottom: "10%",
    top: "10%",
    width: "40%",
    height: "80%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  component15: {
    top: 70,
  },
  component16: {
    top: 104,
  },
  component14Parent: {
    top: 128,
    height: 124,
  },
  component17: {
    top: 58,
  },
  systemServices: {
    top: 18,
  },
  component18: {
    top: 90,
  },
  component19: {
    top: 122,
  },
  toggle6: {
    display: "none",
  },
  component20: {
    top: 154,
  },
  component21: {
    top: 188,
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 234,
  },
  component17Parent: {
    top: 278,
    height: 234,
  },
  component22: {
    top: 32,
  },
  component23: {
    top: 64,
  },
  component22Parent: {
    top: 528,
    height: 84,
  },
  groupInner: {
    backgroundColor: Color.colorWhitesmoke_300,
  },
  ellipseIcon: {
    left: 1,
  },
  rectangleParent: {
    top: 558,
    left: 319,
    width: 47,
  },
  rectangleGroup: {
    top: 334,
    left: 319,
    width: 47,
  },
  rectangleContainer: {
    top: 195,
    left: 319,
    width: 47,
  },
  groupChild4: {
    backgroundColor: Color.colorMediumturquoise,
  },
  groupChild5: {
    left: 24,
  },
  groupView: {
    top: 230,
    left: 319,
    width: 47,
  },
  rectangleParent1: {
    top: 164,
    left: 319,
    width: 47,
  },
  rectangleParent2: {
    top: 366,
    left: 319,
    width: 47,
  },
  rectangleParent3: {
    top: 398,
    left: 320,
  },
  rectangleParent4: {
    top: 430,
    left: 319,
    width: 47,
  },
  rectangleParent5: {
    top: 464,
    left: 319,
    width: 47,
  },
  rectangleParent6: {
    top: 590,
    left: 319,
    width: 47,
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
    left: 282,
    width: 38,
    height: 38,
    top: 1,
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
  },
  itineraries: {
    color: Color.colorTeal,
    height: 39,
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
    width: 56,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
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
    lineHeight: 77,
    letterSpacing: 0.9,
    fontSize: FontSize.size_4xs,
    top: 7,
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
    left: 50,
    width: 330,
    height: 49,
    position: "absolute",
  },
  barreBasParent: {
    top: 771,
    left: -19,
    height: 81,
    width: 431,
    position: "absolute",
  },
  notifications: {
    shadowColor: "rgba(0, 0, 0, 0.21)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.lightGray0,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default Notifications;
