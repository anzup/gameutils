import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

export default class News extends React.Component{
    constructor() {
        super();
    }
    goBack(){
        const { navigation } = this.props
        navigation.goBack()
    }
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>新闻页</Text>
                </View>
                <TouchableOpacity underlayColor='white' onPress={this.goBack.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonTxt}>返回</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 60,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f44'
    },
    buttonTxt: {
        fontSize: 24,
        color: 'white'
    }
})
