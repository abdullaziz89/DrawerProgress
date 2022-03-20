import {StyleSheet, Text, View} from "react-native";
import Animated, {useAnimatedStyle} from "react-native-reanimated";
import {useEffect} from "react";


export default (props) => {

    return (
        <Animated.View style={[styles.container]}>
            <Text>Feed View</Text>
            <Text>Drawer Progress:</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
