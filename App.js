import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './page/Home.js'
import Detail from './page/Detail.js'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createCompatNavigatorFactory(createStackNavigator)(
    {
        Home: { screen: Home },
        Detail: { screen: Detail },
    },
    {
        initialRouteName: 'Home',
    }
);

function Drawe({ navigation }){
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Detail" component={Detail} />
        </Drawer.Navigator>
    )
}

function Tabbar(){
    return(
        <Tab.Navigator>
            {/*<Tab.Screen name="Home" component={Home} />*/}
            <Tab.Screen name="Home" options={{ title: '首页' }}>
                {
                    () => (
                        // initialRouteName
                        <Drawe />
                    )
                }
            </Tab.Screen>
            <Tab.Screen name="Detail" component={Detail} options={{
                title: '页面1',
                headerStyle: {
                    backgroundColor: '#f44',
                },
                headerTintColor: '#fff',
                headerTitleStyle:{
                    // fontWeight: 'bold'
                }
            }}/>
        </Tab.Navigator>
    )
}

export default class App extends React.Component{
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Tabbar" component={Tabbar} />
                </Stack.Navigator>
                {/*<RootStack />*/}
            </NavigationContainer>
        );
    }
}
