import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const RescoverPassword2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rescoverPassword6}>
      <Image
        style={[
          styles.screenshot20240419At1506,
          styles.rescoverPassword6ChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/screenshot-20240419-at-1506-1.png")}
      />
      <View
        style={[
          styles.rescoverPassword6Child,
          styles.rescoverPassword6ChildPosition,
        ]}
      />
      <View style={styles.forms}>
        <View style={[styles.boutonSignIn, styles.boutonPosition]}>
          <View style={[styles.boutonSignInChild, styles.childLayout]} />
        </View>
      </View>
      <View style={[styles.enterName, styles.enterPosition]}>
        <View style={[styles.enterNameChild, styles.childLayout]} />
        <Text style={styles.enterEmail}>Enter New Password</Text>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-icon.png")}
        />
      </View>
      <View style={[styles.enterName1, styles.enterPosition]}>
        <View style={[styles.enterNameChild, styles.childLayout]} />
        <Text style={styles.enterEmail}>Confirm New Password</Text>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-icon.png")}
        />
      </View>
      <Pressable
        style={[styles.confirm, styles.confirmPosition]}
        onPress={() => navigation.navigate("Setings")}
      >
        <Text style={styles.confirm1}>Confirm</Text>
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
        style={[styles.rescoverPassword6Item, styles.rescoverLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.rescoverPassword6Inner, styles.rescoverLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.rescoverLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <View style={[styles.changePasswordWrapper, styles.changeLayout]}>
        <Text style={[styles.changePassword, styles.changeLayout]}>
          Change Password
        </Text>
      </View>
      <Pressable
        style={[styles.header, styles.rescoverLayout]}
        onPress={() => navigation.navigate("RescoverPassword4")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/header.png")}
        />
      </Pressable>
      <Image
        style={[styles.logoTypography3, styles.confirmPosition]}
        resizeMode="cover"
        source={require("../assets/logo-typography-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rescoverPassword6ChildPosition: {
    left: 0,
    position: "absolute",
  },
  boutonPosition: {
    marginLeft: -166.15,
    marginTop: -24.9,
    height: 50,
    width: 332,
    left: "50%",
    top: "50%",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  enterPosition: {
    height: 64,
    width: 332,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  confirmPosition: {
    left: "50%",
    position: "absolute",
  },
  yourEmailPosition: {
    width: 149,
    lineHeight: 20,
    letterSpacing: 1.4,
    fontSize: FontSize.bodyMedium_size,
    marginTop: -226,
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
    height: 50,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rescoverLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  textTypo: {
    letterSpacing: 1.3,
    fontSize: FontSize.size_smi,
    marginTop: -283,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 77,
    left: "50%",
    top: "50%",
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
  rescoverPassword6Child: {
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
    marginLeft: -166.15,
    marginTop: -24.9,
    height: 50,
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
    marginTop: 6.5,
    height: 50,
    width: 332,
    left: "50%",
    top: "50%",
    marginLeft: -165.5,
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
    color: Color.colorDimgray,
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
    marginTop: -163,
    marginLeft: -165.5,
    height: 64,
  },
  enterName1: {
    marginTop: -86,
    marginLeft: -166.5,
  },
  confirm1: {
    marginTop: -7,
    marginLeft: -46.5,
    fontSize: FontSize.size_lgi,
    letterSpacing: 1.7,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 77,
  },
  confirm: {
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
  rescoverPassword6Item: {
    marginLeft: -133.5,
    marginTop: -256,
    width: 24,
    left: "50%",
    top: "50%",
  },
  rescoverPassword6Inner: {
    marginLeft: -11.5,
    marginTop: -256,
    width: 24,
    left: "50%",
    top: "50%",
  },
  ellipseIcon: {
    marginLeft: 110.5,
    marginTop: -256,
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
  changePassword: {
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
  icon: {
    height: "100%",
    width: "100%",
  },
  header: {
    left: 24,
    top: 69,
  },
  logoTypography3: {
    marginLeft: -94.5,
    bottom: 28,
    width: 190,
    height: 190,
  },
  rescoverPassword6: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_400,
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

export default RescoverPassword2;
