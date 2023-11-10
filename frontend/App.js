import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/pages/Login";
import Main from "./src/pages/Main";
import Apply from "./src/pages/Apply";
import My from "./src/pages/My";

import myIcon from "./src/images/home_icon.png";
import applyIcon from "./src/images/apply_icon.png";
import homeIcon from "./src/images/my_icon.png";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const getTabBarIcon = (routeName, focused) => {
    let iconSource;

    if (routeName === "Home") {
      iconSource = homeIcon;
    } else if (routeName === "Profile") {
      iconSource = myIcon;
    } else if (routeName === "Apply") {
      iconSource = applyIcon;
    }

    return (
      <Image
        source={iconSource}
        style={focused ? styles.activeIcon : styles.inactiveIcon}
      />
    );
  };
  const MainStack = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),
        tabBarStyle: {
          backgroundColor: "#F7FAEC",
          padding: 3,
          paddingHorizontal: 25,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          color: "#4C5C2D",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false, tabBarLabel: "홈" }}
        component={Main}
      />
      <Tab.Screen
        name="Apply"
        options={{ headerShown: false, tabBarLabel: "보관 요청" }}
        component={Apply}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false, tabBarLabel: "내 정보" }}
        component={My}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        /> */}
        <Stack.Screen name="MainStack" options={{ headerShown: false }}>
          {() => <MainStack />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activeIcon: {
    width: 30,
    height: 30,
    padding: 5,
  },
  inactiveIcon: {
    width: 25,
    height: 25,
    padding: 5,
  },
});

export default App;
