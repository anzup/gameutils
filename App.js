import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './page/Home.js'  // 首页
import Detail from './page/Detail.js' //
import Splash from './page/Splash.js' // 加载引导页

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './js/reducers'

import Ionicons from 'react-native-vector-icons/Ionicons';


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
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ?'ios-book'
                                : 'ios-book-outline'
                        } else if (route.name === 'News') {
                            iconName = focused ?'ios-newspaper'
                                : 'ios-newspaper-outline'
                        }else if(route.name == 'Detail'){
                            iconName = focused ?'ios-library'
                                : 'ios-library-outline'
                        }else if(route.name == 'User'){
                            iconName = focused ?'ios-person-circle'
                                : 'ios-person-circle-outline'
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Home" component={Home} options={{ title: '首页' }}/>
                <Tab.Screen name="News" component={Detail} options={{ title: '新闻' }}/>
                <Tab.Screen name="Detail" component={Detail} options={{ title: '轻小说' }}/>
                <Tab.Screen name="User" component={Detail} options={{ title: '我的' }}/>
            </Tab.Navigator>
    )
}

export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        },1500)
    }

    render() {
        const store = createStore(Reducer)
        if(this.state.isLoading){
            return <Splash />
        }
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Tabbar" component={Tabbar} />
                    </Stack.Navigator>
                    {/*<RootStack />*/}
                </NavigationContainer>
            </Provider>
        );
    }
}
