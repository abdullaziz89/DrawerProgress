import {StyleSheet, View, Text, Platform} from 'react-native';
import {SafeAreaView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    useDrawerProgress
} from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import Feed from "./Screens/Feed";
import Article from "./Screens/Article";
import CustomDrawer from "./components/CustomDrawer";
import Animated, {useAnimatedStyle} from "react-native-reanimated";
import {useEffect, useState} from "react";

const Drawer = createDrawerNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                useLegacyImplementation
                drawerContant={(props) =>  <CustomDrawer {...props} />}
            >
                <Drawer.Screen name="Feed">
                    {props => <Feed {...props} />}
                </Drawer.Screen>
                <Drawer.Screen name="Article">
                    {props => <Article {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerStyles: {
        flex: 1,
        width: '50%',
        backgroundColor: 'transparent'
    },
    sceneContainerStyle: {
        backgroundColor: 'transparent'
    }
});
