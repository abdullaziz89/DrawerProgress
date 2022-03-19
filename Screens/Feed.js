import {StyleSheet, Text, View} from "react-native";
import {useDrawerProgress} from "@react-navigation/drawer";

export default (props) => {



    return (
        <View style={styles.container}>
            <Text>Feed View</Text>
            <Text>Drawer Progress:</Text>
        </View>
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
