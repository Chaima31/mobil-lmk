import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Text style={styles.english}>English</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.boutonSignIn, styles.boutonPosition]}
        onPress={() => navigation.navigate("Start")}
      >
        <View style={[styles.boutonSignInChild, styles.childLayout]} />
      </Pressable>
      <Pressable
        style={[styles.forgetPasswordText, styles.passwordPosition]}
        onPress={() => navigation.navigate("RescoverPassword")}
      >
        <Text style={[styles.recoverPassword, styles.orContinueWithTypo]}>
          Recover Password ?
        </Text>
      </Pressable>
      <View style={[styles.line, styles.passwordPosition]}>
        <Text style={[styles.orContinueWith, styles.orContinueWithTypo]}>
          Or continue with
        </Text>
        <View style={[styles.lineChild, styles.linePosition]} />
        <View style={[styles.lineItem, styles.linePosition]} />
      </View>
      <Image
        style={[styles.googleIcon, styles.boutonPosition]}
        resizeMode="cover"
        source={require("../assets/google.png")}
      />
      <View style={[styles.enterName, styles.passwordPosition]}>
        <View style={[styles.enterNameChild, styles.childLayout]} />
        <Text style={[styles.enterEmail, styles.text1Typo]}>Enter Email</Text>
        <Image
          style={[styles.xIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/x-icon.png")}
        />
      </View>
      <View style={[styles.password, styles.passwordPosition]}>
        <View style={[styles.enterNameChild, styles.childLayout]} />
        <Text style={styles.text}>••••••••</Text>
        <Image
          style={[styles.xIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/x-icon1.png")}
        />
      </View>
      <Image
        style={[styles.logoTypography2, styles.logoTypography2Position]}
        resizeMode="cover"
        source={require("../assets/logo-typography-1.png")}
      />
      <Pressable
        style={[styles.ifYouDontContainer, styles.logoTypography2Position]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={[styles.text1, styles.text1Typo]}>
          <Text style={styles.ifYouDont}>{`if you don't an account 
you can `}</Text>
          <Text style={[styles.registerHere, styles.login1Typo]}>
            Register here!
          </Text>
        </Text>
      </Pressable>
      <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boutonPosition: {
    height: 50,
    top: "50%",
    left: "50%",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  passwordPosition: {
    height: 64,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  orContinueWithTypo: {
    fontFamily: FontFamily.gilroy,
    fontWeight: "500",
    fontSize: FontSize.bodyMedium_size,
    marginTop: -32,
    lineHeight: 77,
    height: 64,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  linePosition: {
    height: 1,
    width: 101,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    marginTop: -11.9,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "35.16%",
    width: "5.99%",
    height: "31.09%",
    top: "33.75%",
    position: "absolute",
    overflow: "hidden",
  },
  logoTypography2Position: {
    left: "50%",
    position: "absolute",
  },
  login1Typo: {
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  english: {
    top: 39,
    right: 46,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  vectorIcon: {
    top: 48,
    right: 31,
    width: 8,
    height: 5,
    position: "absolute",
  },
  boutonSignInChild: {
    marginTop: -24.9,
    marginLeft: -166.15,
    shadowColor: "rgba(68, 97, 242, 0.15)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 21,
    elevation: 21,
    shadowOpacity: 1,
    backgroundColor: Color.colorMediumturquoise,
    height: 50,
    top: "50%",
    left: "50%",
    width: 332,
  },
  boutonSignIn: {
    marginTop: -14.5,
    width: 332,
    marginLeft: -167.5,
    position: "absolute",
  },
  recoverPassword: {
    marginLeft: -62.7,
    letterSpacing: 1.4,
    color: "#c7c7c7",
    width: 125,
  },
  forgetPasswordText: {
    marginTop: -95.9,
    marginLeft: 24.2,
    width: 125,
  },
  orContinueWith: {
    marginLeft: -63.15,
    letterSpacing: 1.3,
    color: Color.colorDarkgray_100,
    width: 104,
  },
  lineChild: {
    marginLeft: -166.65,
  },
  lineItem: {
    marginLeft: 65.95,
  },
  line: {
    marginTop: 78,
    marginLeft: -163.5,
    width: 332,
  },
  googleIcon: {
    marginTop: 142,
    marginLeft: -45.5,
    width: 97,
    position: "absolute",
  },
  enterNameChild: {
    height: "77.81%",
    top: "10.31%",
    right: "0%",
    bottom: "11.88%",
    left: "0%",
    backgroundColor: Color.lightGray0,
    width: "100%",
    borderRadius: Border.br_3xs,
  },
  enterEmail: {
    top: "-10.94%",
    letterSpacing: 1.6,
    color: Color.colorDimgray,
    left: "5%",
    fontSize: FontSize.size_lg,
    lineHeight: 77,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  xIcon: {
    right: "5.78%",
    left: "88.23%",
  },
  enterName: {
    marginTop: -213,
    width: 332,
    marginLeft: -167.5,
  },
  text: {
    fontSize: FontSize.size_7xl,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSlategray,
    top: "33.75%",
    left: "5%",
    textAlign: "left",
    position: "absolute",
  },
  xIcon1: {
    right: "6.02%",
    left: "87.99%",
  },
  password: {
    marginTop: -146.5,
    width: 332,
    marginLeft: -167.5,
  },
  logoTypography2: {
    marginLeft: -94.5,
    bottom: 28,
    width: 190,
    height: 190,
  },
  ifYouDont: {
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
  },
  registerHere: {
    color: Color.colorPlum_100,
  },
  text1: {
    marginLeft: -105.5,
  },
  ifYouDontContainer: {
    bottom: 131,
  },
  login1: {
    marginTop: -31,
    marginLeft: -28.5,
    fontSize: FontSize.size_lgi,
    letterSpacing: 1.7,
    color: Color.lightGray0,
    lineHeight: 77,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  login: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
