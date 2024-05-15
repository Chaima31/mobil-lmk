import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const RescoverPassword3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rescoverPassword2, styles.rescoverPassword2ShadowBox]}>
      <Text style={[styles.english, styles.englishTypo]}>English</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.rescoverPassword2Inner, styles.formsParentPosition]}>
        <View style={[styles.formsParent, styles.enterNameSpaceBlock]}>
          <View style={styles.forms}>
            <View style={[styles.boutonSignIn, styles.boutonPosition]}>
              <Pressable
                style={[styles.boutonSignInChild, styles.childLayout]}
                onPress={() => navigation.navigate("RescoverPassword1")}
              />
            </View>
          </View>
          <View style={[styles.enterName, styles.linePosition1]}>
            <View style={[styles.enterNameChild, styles.childLayout]} />
            <Text style={[styles.enterEmail, styles.enterEmailLayout]}>
              Enter Code
            </Text>
            <Image
              style={styles.xIcon}
              resizeMode="cover"
              source={require("../assets/x-icon.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={styles.alreadyHaveAccountContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>
          <Text style={styles.alreadyHaveAccount}>{`Already have account?
`}</Text>
          <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
        </Text>
      </Pressable>
      <Text style={styles.next}>Next</Text>
      <Text style={[styles.resetPassword, styles.signInTypo]}>
        Reset Password
      </Text>
      <Text style={[styles.yourEmail, styles.yourEmailPosition]}>{`Your
Email`}</Text>
      <Text
        style={[styles.verificationCode, styles.yourEmailPosition]}
      >{`Verification 
Code`}</Text>
      <Text style={[styles.newPassword, styles.yourEmailPosition]}>{`New 
Password`}</Text>
      <Image
        style={[styles.rescoverPassword2Child, styles.rescoverPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.rescoverPassword2Item, styles.rescoverPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.rescoverPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.text1, styles.textPosition]}>1</Text>
      <Text style={[styles.text2, styles.textPosition]}>2</Text>
      <Text style={[styles.text3, styles.textPosition]}>3</Text>
      <View style={[styles.line, styles.linePosition1]}>
        <Text style={[styles.resendCode, styles.textPosition]}>
          Resend Code
        </Text>
        <View style={[styles.lineChild, styles.linePosition]} />
        <View style={[styles.lineItem, styles.linePosition]} />
      </View>
      <Image
        style={styles.logoTypography3}
        resizeMode="cover"
        source={require("../assets/logo-typography-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rescoverPassword2ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  englishTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  formsParentPosition: {
    height: 145,
    width: 332,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  enterNameSpaceBlock: {
    marginLeft: -166.15,
    marginTop: -72.7,
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
  linePosition1: {
    height: 64,
    width: 332,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  enterEmailLayout: {
    lineHeight: 77,
    position: "absolute",
  },
  signInTypo: {
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
  },
  yourEmailPosition: {
    width: 149,
    lineHeight: 20,
    letterSpacing: 1.4,
    marginTop: -168,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    height: 50,
    left: "50%",
    top: "50%",
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  rescoverPosition: {
    height: 24,
    width: 24,
    marginTop: -198,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    letterSpacing: 1.3,
    lineHeight: 77,
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
    color: Color.lightGray11,
    fontSize: FontSize.size_smi,
    textAlign: "left",
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
    backgroundColor: Color.lightGray0,
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
    marginLeft: -166.15,
    marginTop: -72.7,
  },
  formsParent: {
    height: 145,
    width: 332,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  rescoverPassword2Inner: {
    marginTop: -105,
    marginLeft: -165.5,
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
    bottom: 213,
    left: "50%",
    position: "absolute",
  },
  next: {
    marginTop: -24,
    marginLeft: -24.5,
    fontSize: FontSize.size_lgi,
    letterSpacing: 1.7,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    lineHeight: 77,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  resetPassword: {
    marginLeft: -171.5,
    top: 123,
    fontSize: FontSize.size_17xl,
    letterSpacing: 3.6,
    color: Color.colorDarkslategray_100,
    width: 341,
    height: 81,
    textAlign: "center",
    lineHeight: 77,
    position: "absolute",
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
  rescoverPassword2Child: {
    marginLeft: -133.5,
  },
  rescoverPassword2Item: {
    marginLeft: -11.5,
  },
  ellipseIcon: {
    marginLeft: 110.5,
  },
  text1: {
    marginLeft: -124.5,
    marginTop: -225,
    letterSpacing: 1.3,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  text2: {
    marginLeft: -3.5,
    marginTop: -225,
    letterSpacing: 1.3,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  text3: {
    marginLeft: 118.5,
    marginTop: -225,
    letterSpacing: 1.3,
    color: Color.lightGray0,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_smi,
  },
  resendCode: {
    marginTop: -32,
    marginLeft: -58.15,
    color: Color.colorDarkgray_100,
    width: 115,
    letterSpacing: 1.3,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    height: 64,
    fontFamily: FontFamily.poppinsRegular,
  },
  lineChild: {
    marginLeft: -166.65,
  },
  lineItem: {
    marginLeft: 65.95,
  },
  line: {
    marginTop: 53,
    marginLeft: -165.5,
  },
  logoTypography3: {
    marginLeft: -94.5,
    bottom: 28,
    width: 190,
    height: 190,
    left: "50%",
    position: "absolute",
  },
  rescoverPassword2: {
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

export default RescoverPassword3;
