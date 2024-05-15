import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfile}>
      <Image
        style={styles.screenshot20240419At1506}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View style={styles.editProfileChild} />
      <Image
        style={styles.logoTypography3}
        resizeMode="cover"
        source={require("../assets/logo-typography-3.png")}
      />
      <View style={styles.editProfileWrapper}>
        <Text style={styles.editProfile1}>Edit profile</Text>
      </View>
      <Pressable
        style={[styles.header, styles.headerLayout]}
        onPress={() => navigation.navigate("Setings")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/header.png")}
        />
      </Pressable>
      <View style={[styles.bigOutlinedefault, styles.bigLayout1]}>
        <View style={[styles.bigOutlinedefaultChild, styles.iconLayout]} />
        <View style={[styles.value, styles.valueFlexBox]}>
          <Text style={[styles.enterHere, styles.label1Typo]}>
            Simon Gartozo
          </Text>
          <Image
            style={styles.cancelIcon}
            resizeMode="cover"
            source={require("../assets/cancel.png")}
          />
        </View>
        <View style={styles.label}>
          <View style={styles.labelChild} />
          <View style={styles.labelWrapper}>
            <Text style={[styles.label1, styles.label1Typo]}>Full name</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bigOutlinedefault1, styles.bigLayout1]}>
        <View style={[styles.bigOutlinedefaultChild, styles.iconLayout]} />
        <View style={[styles.value, styles.valueFlexBox]}>
          <Text style={[styles.enterHere, styles.label1Typo]}>
            simon_gartozo
          </Text>
          <Image
            style={styles.cancelIcon}
            resizeMode="cover"
            source={require("../assets/cancel.png")}
          />
        </View>
        <View style={styles.label}>
          <View style={styles.labelChild} />
          <View style={styles.labelWrapper}>
            <Text style={[styles.label1, styles.label1Typo]}>User name</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bigOutlinedefault2, styles.bigLayout1]}>
        <View style={[styles.bigOutlinedefaultChild, styles.iconLayout]} />
        <View style={[styles.value, styles.valueFlexBox]}>
          <Text style={[styles.enterHere, styles.label1Typo]}>
            simongartozo@domain.com
          </Text>
          <Image
            style={styles.cancelIcon}
            resizeMode="cover"
            source={require("../assets/cancel.png")}
          />
        </View>
        <View style={styles.label}>
          <View style={styles.labelChild} />
          <View style={styles.labelWrapper}>
            <Text style={[styles.label1, styles.label1Typo]}>Label</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bigOutlineselect, styles.bigLayout]}>
        <View style={[styles.bigOutlinedefaultChild, styles.iconLayout]} />
        <View style={[styles.value, styles.valueFlexBox]}>
          <Text style={[styles.enterHere, styles.label1Typo]}>
            United States
          </Text>
          <Image
            style={styles.cancelIcon}
            resizeMode="cover"
            source={require("../assets/cancel.png")}
          />
        </View>
        <View style={styles.label}>
          <View style={styles.labelChild} />
          <View style={styles.labelWrapper}>
            <Text style={[styles.label1, styles.label1Typo]}>Country</Text>
          </View>
        </View>
        <Image
          style={[styles.arrowDropDownIcon, styles.headerLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-drop-down.png")}
        />
      </View>
      <View style={[styles.bigOutlinedefault3, styles.bigLayout]}>
        <View style={[styles.bigOutlinedefaultChild, styles.iconLayout]} />
        <View style={[styles.value, styles.valueFlexBox]}>
          <Text style={[styles.enterHere, styles.label1Typo]}>Male</Text>
          <Image
            style={styles.cancelIcon}
            resizeMode="cover"
            source={require("../assets/cancel.png")}
          />
        </View>
        <View style={styles.label}>
          <View style={styles.labelChild} />
          <View style={styles.labelWrapper}>
            <Text style={[styles.label1, styles.label1Typo]}>Genre</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bigOutlinedefault4, styles.bigLayout1]}>
        <View style={[styles.bigOutlinedefaultChild, styles.iconLayout]} />
        <View style={[styles.value, styles.valueFlexBox]}>
          <Text style={[styles.enterHere, styles.label1Typo]}>
            45 New Avenue, New York
          </Text>
          <Image
            style={styles.cancelIcon}
            resizeMode="cover"
            source={require("../assets/cancel.png")}
          />
        </View>
        <View style={styles.label}>
          <View style={styles.labelChild} />
          <View style={styles.labelWrapper}>
            <Text style={[styles.label1, styles.label1Typo]}>Address</Text>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.valueFlexBox]}>
        <Text style={styles.button1}>submit</Text>
      </View>
      <View style={[styles.bigOutlinedefaultParent, styles.bigLayout1]}>
        <View style={[styles.bigOutlinedefault5, styles.bigLayout1]}>
          <View style={[styles.bigOutlinedefaultChild, styles.iconLayout]} />
          <View style={[styles.value, styles.valueFlexBox]}>
            <Text style={[styles.enterHere, styles.label1Typo]}>
              {" "}
              123-456-7890
            </Text>
            <Image
              style={styles.cancelIcon}
              resizeMode="cover"
              source={require("../assets/cancel.png")}
            />
          </View>
          <View style={styles.label}>
            <View style={styles.labelChild} />
            <View style={styles.labelWrapper}>
              <Text style={[styles.label1, styles.label1Typo]}>
                {" "}
                Phone number
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.usUnitedStatesOfAmericaUs, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/us-united-states-of-america-usa.png")}
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
            source={require("../assets/carbontimefilled.png")}
          />
          <Image
            style={styles.ionwarningIcon}
            resizeMode="cover"
            source={require("../assets/ionwarning.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
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
  headerLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  bigLayout1: {
    height: 50,
    width: 342,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  valueFlexBox: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  label1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
  },
  bigLayout: {
    width: 163,
    top: 423,
    height: 50,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barrePosition: {
    bottom: 0,
    marginLeft: -215.5,
    height: 81,
    width: 431,
    left: "50%",
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
  editProfileChild: {
    top: -9,
    backgroundColor: Color.colorGray_200,
    width: 401,
    height: 861,
    left: 0,
    position: "absolute",
  },
  logoTypography3: {
    marginLeft: -78.5,
    bottom: 83,
    width: 145,
    height: 150,
    left: "50%",
    position: "absolute",
  },
  editProfile1: {
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
  editProfileWrapper: {
    top: 65,
    left: 87,
    height: 28,
    width: 221,
    position: "absolute",
  },
  header: {
    top: 69,
    left: 24,
  },
  bigOutlinedefaultChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.lightPrimary5,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  enterHere: {
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 18,
    color: Color.lightGray10,
    flex: 1,
    fontFamily: FontFamily.bodyMedium,
    letterSpacing: 0,
  },
  cancelIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  value: {
    top: 24,
    right: 0,
    paddingVertical: 0,
    left: 0,
  },
  labelChild: {
    width: 82,
    height: 15,
    display: "none",
    backgroundColor: Color.lightGray0,
  },
  label1: {
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    color: Color.lightGray7,
  },
  labelWrapper: {
    paddingHorizontal: Padding.p_9xs,
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_12xs,
    marginTop: 10,
    flexDirection: "row",
  },
  label: {
    top: 2,
    left: 12,
    position: "absolute",
  },
  bigOutlinedefault: {
    top: 127,
    left: 24,
  },
  bigOutlinedefault1: {
    top: 201,
    left: 24,
  },
  bigOutlinedefault2: {
    top: 275,
    left: 24,
  },
  arrowDropDownIcon: {
    marginTop: -12,
    top: "50%",
    right: 8,
    overflow: "hidden",
  },
  bigOutlineselect: {
    left: 24,
  },
  bigOutlinedefault3: {
    left: 203,
  },
  bigOutlinedefault4: {
    top: 497,
    left: 24,
  },
  button1: {
    fontSize: FontSize.titlePoppinsMedium_size,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.lightGray0,
    textAlign: "center",
  },
  button: {
    top: 571,
    backgroundColor: Color.lightGray11,
    paddingVertical: Padding.p_smi_5,
    borderRadius: Border.br_5xs,
    width: 342,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    left: 24,
  },
  bigOutlinedefault5: {
    left: 0,
    top: 0,
  },
  usUnitedStatesOfAmericaUs: {
    height: "49.6%",
    width: "9.68%",
    top: "25.4%",
    right: "83.3%",
    bottom: "25%",
    left: "7.02%",
  },
  bigOutlinedefaultParent: {
    top: 349,
    left: 24,
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
  editProfile: {
    shadowColor: "rgba(0, 0, 0, 0.21)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    overflow: "hidden",
    height: 852,
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightGray0,
  },
});

export default EditProfile;
