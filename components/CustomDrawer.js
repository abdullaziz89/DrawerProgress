import {DrawerContentScrollView, DrawerItemList, useDrawerProgress} from "@react-navigation/drawer";
import {useEffect} from "react";

export default () => {

    const progress = useDrawerProgress()

    useEffect(() => {
        console.log(progress)
    }, []);

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
