import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView
} from 'react-native'

export default class Splash extends React.Component{
    render() {
        return (
            <SafeAreaView>
                <View style={styles.main}>
                    <Image
                        style={styles.splashImage}
                        source={require('../images/splash.jpg')}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%'
    },
    splashImage: {
      width: '100%',
      height: '100%'
    },
    loadingTxt: {
        fontSize: 16,
        color: 'blue',
        alignSelf: 'center'
    }
})
