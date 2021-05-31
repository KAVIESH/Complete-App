import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PetRequest from '../Screens/PetRequest';
import GiveThePet from '../Screens/GiveThePet';
    
export const AppTabNavigator = createBottomTabNavigator({
    GiveThePet: {
        screen: GiveThePet,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/download.jpg")} style={{width:20, height:20}}/>,
            tabBarLable: "Give The Pet"
        }
    },
RequestAPet: {
screen: PetRequest,
navigationOptions: {
    tabBarIcon: <Image source={require("../assets/Dog.png")} style={{width:20, height:20}}/>,
    tabBarLable: "Request A Dog"
}
}

})