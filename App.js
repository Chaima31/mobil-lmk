const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RicriminalFill from "./screens/RicriminalFill";
import Intro from "./screens/Intro";
import Welcome from "./screens/Welcome";
import Start from "./screens/Start";
import Road from "./screens/Road";
import Pickpockets from "./screens/Pickpockets";
import Pickpockets1 from "./screens/Pickpockets1";
import Pickpockets2 from "./screens/Pickpockets2";
import CROWDINGONTHELINE from "./screens/CROWDINGONTHELINE";
import CROWDINGONTHELINE1 from "./screens/CROWDINGONTHELINE1";
import CROWDINGONTHELINE2 from "./screens/CROWDINGONTHELINE2";
import CROWDINGONTHELINE3 from "./screens/CROWDINGONTHELINE3";
import CROWDINGONTHELINE4 from "./screens/CROWDINGONTHELINE4";
import CROWDINGONTHELINE5 from "./screens/CROWDINGONTHELINE5";
import CROWDINGONTHELINE6 from "./screens/CROWDINGONTHELINE6";
import CROWDINGONTHELINE7 from "./screens/CROWDINGONTHELINE7";
import CROWDINGONTHELINE8 from "./screens/CROWDINGONTHELINE8";
import CROWDINGONTHELINE9 from "./screens/CROWDINGONTHELINE9";
import CROWDINGONTHELINE10 from "./screens/CROWDINGONTHELINE10";
import CROWDINGONTHELINE11 from "./screens/CROWDINGONTHELINE11";
import CROWDINGONTHELINE12 from "./screens/CROWDINGONTHELINE12";
import CROWDINGONTHELINE13 from "./screens/CROWDINGONTHELINE13";
import Setings from "./screens/Setings";
import EditProfile from "./screens/EditProfile";
import Notifications from "./screens/Notifications";
import Language from "./screens/Language";
import DeleteMyAccount from "./screens/DeleteMyAccount";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Menu from "./screens/Menu";
import CROWDINGONTHELINE14 from "./screens/CROWDINGONTHELINE14";
import CROWDINGONTHELINE15 from "./screens/CROWDINGONTHELINE15";
import Road1 from "./screens/Road1";
import Pickpockets3 from "./screens/Pickpockets3";
import Road2 from "./screens/Road2";
import Road3 from "./screens/Road3";
import Road4 from "./screens/Road4";
import Road5 from "./screens/Road5";
import Road6 from "./screens/Road6";
import Road7 from "./screens/Road7";
import Road8 from "./screens/Road8";
import Start1 from "./screens/Start1";
import Login from "./screens/Login";
import RescoverPassword from "./screens/RescoverPassword";
import ChangePassword from "./screens/ChangePassword";
import RescoverPassword1 from "./screens/RescoverPassword1";
import RescoverPassword2 from "./screens/RescoverPassword2";
import RescoverPassword3 from "./screens/RescoverPassword3";
import RescoverPassword4 from "./screens/RescoverPassword4";
import Register from "./screens/Register";
import Group from "./screens/Group";
import Group1 from "./screens/Group1";
import Group2 from "./screens/Group2";
import Group3 from "./screens/Group3";
import Group4 from "./screens/Group4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="RicriminalFill"
              component={RicriminalFill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road"
              component={Road}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pickpockets"
              component={Pickpockets}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pickpockets1"
              component={Pickpockets1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pickpockets2"
              component={Pickpockets2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE"
              component={CROWDINGONTHELINE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE1"
              component={CROWDINGONTHELINE1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE2"
              component={CROWDINGONTHELINE2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE3"
              component={CROWDINGONTHELINE3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE4"
              component={CROWDINGONTHELINE4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE5"
              component={CROWDINGONTHELINE5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE6"
              component={CROWDINGONTHELINE6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE7"
              component={CROWDINGONTHELINE7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE8"
              component={CROWDINGONTHELINE8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE9"
              component={CROWDINGONTHELINE9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE10"
              component={CROWDINGONTHELINE10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE11"
              component={CROWDINGONTHELINE11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE12"
              component={CROWDINGONTHELINE12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE13"
              component={CROWDINGONTHELINE13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setings"
              component={Setings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Language"
              component={Language}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeleteMyAccount"
              component={DeleteMyAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrivacyPolicy"
              component={PrivacyPolicy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE14"
              component={CROWDINGONTHELINE14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CROWDINGONTHELINE15"
              component={CROWDINGONTHELINE15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road1"
              component={Road1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pickpockets3"
              component={Pickpockets3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road2"
              component={Road2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road3"
              component={Road3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road4"
              component={Road4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road5"
              component={Road5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road6"
              component={Road6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road7"
              component={Road7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Road8"
              component={Road8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start1"
              component={Start1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RescoverPassword"
              component={RescoverPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RescoverPassword1"
              component={RescoverPassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RescoverPassword2"
              component={RescoverPassword2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RescoverPassword3"
              component={RescoverPassword3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RescoverPassword4"
              component={RescoverPassword4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group2"
              component={Group2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group3"
              component={Group3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group4"
              component={Group4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
