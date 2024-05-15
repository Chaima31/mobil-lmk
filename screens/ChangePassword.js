import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.changePassword}>
      <Image
        style={[
          styles.screenshot20240419At1506,
          styles.changePasswordChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View
        style={[styles.changePasswordChild, styles.changePasswordChildPosition]}
      />
      <View style={styles.changePasswordInner}>
        <View style={[styles.formsParent, styles.enterNamePosition]}>
          <View style={styles.forms}>
            <View style={[styles.boutonSignIn, styles.boutonPosition]}>
              <View style={[styles.boutonSignInChild, styles.childLayout]} />
            </View>
          </View>
          <View style={[styles.enterName, styles.enterNamePosition]}>
            <View style={[styles.enterNameChild, styles.childLayout]} />
            <Text style={styles.enterEmail}>Enter Email</Text>
            <Image
              style={styles.xIcon}
              resizeMode="cover"
              source={require("../assets/x-icon.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.next, styles.nextPosition]}
        onPress={() => navigation.navigate("RescoverPassword4")}
      >
        <Text style={styles.next1}>Next</Text>
      </Pressable>
      <Text style={[styles.yourEmail, styles.yourEmailPosition]}>{`Your
Email`}</Text>
      <Text
        style={[styles.verificationCode, styles.yourEmailPosition]}
      >{`Verification 
Code`}</Text>
      <Text style={[styles.newPassword, styles.yourEmailPosition]}>{`New 
Password`}</Text>
      <Image
        style={[styles.changePasswordItem, styles.changeLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.changeLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.changePasswordChild1, styles.changeLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Image
        style={[styles.logoTypography3, styles.nextPosition]}
        resizeMode="cover"
        source={require("../assets/logo-typography-1.png")}
      />
      <Pressable
        style={[styles.header, styles.changeLayout1]}
        onPress={() => navigation.navigate("Setings")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/header.png")}
        />
      </Pressable>
      <View style={[styles.changePasswordWrapper, styles.changeLayout]}>
        <Text style={[styles.changePassword1, styles.changeLayout]}>
          Change Password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changePasswordChildPosition: {
    left: 0,
    position: "absolute",
  },
  enterNamePosition: {
    marginLeft: -166.15,
    marginTop: -72.7,
    width: 332,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  boutonPosition: {
    marginTop: -24.9,
    height: 50,
    marginLeft: -166.15,
    width: 332,
    left: "50%",
    top: "50%",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  nextPosition: {
    left: "50%",
    position: "absolute",
  },
  yourEmailPosition: {
    width: 149,
    lineHeight: 20,
    letterSpacing: 1.4,
    fontSize: FontSize.bodyMedium_size,
    marginTop: -168,
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
    height: 50,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  changeLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  textTypo: {
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    top: 201,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 77,
    left: "50%",
    position: "absolute",
  },
  changeLayout: {
    width: 221,
    position: "absolute",
  },
  screenshot20240419At1506: {
    width: 954,
    top: 0,
    left: 0,
    height: 852,
  },
  changePasswordChild: {
    top: -9,
    backgroundColor: Color.colorGray_200,
    width: 401,
    height: 861,
  },
  boutonSignInChild: {
    shadowColor: "rgba(68, 97, 242, 0.15)",
    shadowRadius: 21,
    elevation: 21,
    backgroundColor: Color.colorMediumturquoise,
    marginTop: -24.9,
    height: 50,
    marginLeft: -166.15,
    width: 332,
    left: "50%",
    top: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xs,
  },
  boutonSignIn: {
    position: "absolute",
  },
  forms: {
    marginTop: 22.8,
    height: 50,
    marginLeft: -166.15,
    width: 332,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  enterNameChild: {
    height: "77.81%",
    top: "10.31%",
    right: "0%",
    bottom: "11.88%",
    left: "0%",
    backgroundColor: Color.colorGainsboro_100,
    width: "100%",
  },
  enterEmail: {
    top: "-10.94%",
    left: "5%",
    fontSize: FontSize.size_lg,
    letterSpacing: 1.6,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 77,
    position: "absolute",
  },
  xIcon: {
    height: "31.09%",
    width: "5.99%",
    top: "33.75%",
    right: "5.78%",
    bottom: "35.16%",
    left: "88.23%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  enterName: {
    height: 64,
  },
  formsParent: {
    height: 145,
  },
  changePasswordInner: {
    marginTop: -105,
    marginLeft: -165.5,
    height: 145,
    width: 332,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  next1: {
    marginTop: -24,
    marginLeft: -24.5,
    fontSize: FontSize.size_lgi,
    letterSpacing: 1.7,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 77,
  },
  next: {
    top: "50%",
    left: "50%",
  },
  yourEmail: {
    marginLeft: -196.5,
  },
  verificationCode: {
    marginLeft: -73.5,
  },
  newPassword: {
    marginLeft: 52.5,
  },
  changePasswordItem: {
    marginLeft: -133.5,
    marginTop: -198,
    width: 24,
    left: "50%",
    top: "50%",
  },
  ellipseIcon: {
    marginLeft: -11.5,
    marginTop: -198,
    width: 24,
    left: "50%",
    top: "50%",
  },
  changePasswordChild1: {
    marginLeft: 110.5,
    marginTop: -198,
    width: 24,
    left: "50%",
    top: "50%",
  },
  text: {
    marginLeft: -124.5,
  },
  text1: {
    marginLeft: -3.5,
  },
  text2: {
    marginLeft: 118.5,
  },
  logoTypography3: {
    marginLeft: -94.5,
    bottom: 28,
    width: 190,
    height: 190,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  header: {
    left: 24,
    top: 69,
  },
  changePassword1: {
    fontSize: FontSize.titlePoppinsLarge_size,
    lineHeight: 28,
    textAlign: "center",
    color: Color.lightGray11,
    width: 221,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  changePasswordWrapper: {
    top: 65,
    left: 87,
    height: 28,
  },
  changePassword: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.lightGray0,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default ChangePassword;
