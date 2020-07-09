import React from 'react'
import Home from './page/Home.js'
import Detail from './page/Detail.js'
export default function Tabbar() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Detail" component={Detail} />
        </Tab.Navigator>
    );
}
