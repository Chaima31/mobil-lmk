import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.register, styles.registerShadowBox]}>
      <Text style={styles.english}>English</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.forms, styles.formsPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.boutonSignIn, styles.boutonPosition]}>
          <View style={[styles.boutonSignInChild, styles.childLayout]} />
        </View>
      </Pressable>
      <View style={[styles.enterName, styles.enterPosition]}>
        <View style={[styles.enterNameChild, styles.childLayout]} />
        <Text style={[styles.enterEmail, styles.createLayout]}>Full name</Text>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-icon2.png")}
        />
      </View>
      <View style={[styles.enterName1, styles.enterPosition]}>
        <View style={[styles.enterNameChild, styles.childLayout]} />
        <Text style={[styles.enterEmail, styles.createLayout]}>Email</Text>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-icon2.png")}
        />
      </View>
      <View style={[styles.enterName2, styles.linePosition1]}>
        <View style={[styles.enterNameChild, styles.childLayout]} />
        <Text style={[styles.enterEmail, styles.createLayout]}>Password</Text>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-icon2.png")}
        />
      </View>
      <View style={[styles.enterName3, styles.enterPosition]}>
        <View style={[styles.enterNameChild, styles.childLayout]} />
        <Text style={[styles.enterEmail, styles.createLayout]}>
          Confirm Password
        </Text>
        <Image
          style={styles.xIcon}
          resizeMode="cover"
          source={require("../assets/x-icon2.png")}
        />
      </View>
      <Image
        style={styles.logoTypography4}
        resizeMode="cover"
        source={require("../assets/logo-typography-1.png")}
      />
      <Pressable
        style={styles.alreadyHaveAccountContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>
          <Text style={styles.alreadyHaveAccount}>{`Already have account?
`}</Text>
          <Text style={[styles.signIn, styles.createTypo]}>Sign in</Text>
        </Text>
      </Pressable>
      <Text style={[styles.createAccount, styles.createTypo]}>
        Create Account
      </Text>
      <Text style={[styles.createAccount1, styles.createTypo]}>
        Create Account
      </Text>
      <Text style={[styles.men, styles.menPosition]}>Men</Text>
      <Text style={[styles.other, styles.menPosition]}>Other</Text>
      <Text style={[styles.women, styles.menPosition]}>Women</Text>
      <Image
        style={[styles.registerChild, styles.registerPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.registerItem, styles.registerPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.registerInner, styles.registerPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={[styles.line, styles.linePosition1]}>
        <Text style={styles.orContinueWith}>Or continue with</Text>
        <View style={[styles.lineChild, styles.linePosition]} />
        <View style={[styles.lineItem, styles.linePosition]} />
      </View>
      <Image
        style={[styles.googleIcon, styles.formsPosition]}
        resizeMode="cover"
        source={require("../assets/google.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  formsPosition: {
    height: 50,
    left: "50%",
    top: "50%",
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
    marginLeft: -165.5,
    position: "absolute",
  },
  createLayout: {
    lineHeight: 77,
    textAlign: "left",
    position: "absolute",
  },
  linePosition1: {
    marginLeft: -166.5,
    height: 64,
    width: 332,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  createTypo: {
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  menPosition: {
    width: 149,
    lineHeight: 20,
    letterSpacing: 1.4,
    marginTop: -251,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    height: 50,
    left: "50%",
    top: "50%",
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  registerPosition: {
    height: 24,
    width: 24,
    left: "50%",
    top: "50%",
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
  },
  boutonSignIn: {
    position: "absolute",
  },
  forms: {
    marginTop: 77.5,
    width: 332,
    marginLeft: -165.5,
    height: 50,
  },
  enterNameChild: {
    height: "77.81%",
    top: "10.31%",
    right: "0%",
    bottom: "11.88%",
    left: "0%",
    backgroundColor: Color.lightGray0,
    width: "100%",
  },
  enterEmail: {
    top: "-10.94%",
    left: "5%",
    fontSize: FontSize.size_lg,
    letterSpacing: 1.6,
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 77,
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
    position: "absolute",
    overflow: "hidden",
  },
  enterName: {
    marginTop: -220,
  },
  enterName1: {
    marginTop: -150,
  },
  enterName2: {
    marginTop: -79,
  },
  enterName3: {
    marginTop: -8,
  },
  logoTypography4: {
    marginLeft: -94.5,
    bottom: 19,
    width: 190,
    height: 190,
    left: "50%",
    position: "absolute",
  },
  alreadyHaveAccount: {
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
  },
  signIn: {
    color: Color.colorPlum_100,
  },
  text: {
    marginLeft: -115.5,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  alreadyHaveAccountContainer: {
    bottom: 110,
    left: "50%",
    position: "absolute",
  },
  createAccount: {
    marginTop: 65,
    marginLeft: -86.5,
    fontSize: FontSize.size_lgi,
    letterSpacing: 1.7,
    color: Color.lightGray0,
    lineHeight: 77,
    textAlign: "left",
    position: "absolute",
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  createAccount1: {
    marginLeft: -151.5,
    top: 64,
    fontSize: FontSize.size_13xl,
    letterSpacing: 3.2,
    color: Color.colorDarkslategray_100,
    width: 302,
    height: 81,
    lineHeight: 77,
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  men: {
    marginLeft: -196.5,
  },
  other: {
    marginLeft: 42.5,
  },
  women: {
    marginLeft: -71.5,
  },
  registerChild: {
    marginLeft: -133.5,
    marginTop: -281,
    width: 24,
  },
  registerItem: {
    marginLeft: 103.5,
    marginTop: -281,
    width: 24,
  },
  registerInner: {
    marginTop: -280,
    marginLeft: -11.5,
  },
  orContinueWith: {
    marginTop: -32,
    marginLeft: -63.15,
    letterSpacing: 1.3,
    fontWeight: "500",
    fontFamily: FontFamily.gilroy,
    color: Color.colorDarkgray_100,
    width: 104,
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 77,
    height: 64,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  lineChild: {
    marginLeft: -166.65,
  },
  lineItem: {
    marginLeft: 65.95,
  },
  line: {
    marginTop: 126,
  },
  googleIcon: {
    marginTop: 190,
    marginLeft: -48.5,
    width: 97,
  },
  register: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke_400,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;
