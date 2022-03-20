import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";

export default ({progress, ...rest}) => {

    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    return (
        <DrawerContentScrollView {...rest}>
            <Animated.View style={{ transform: [{ translateX }] }}>
                <DrawerItemList {...rest} />
                <DrawerItem label="Help" onPress={() => alert('Link to help')} />
            </Animated.View>
        </DrawerContentScrollView>
    );
}
