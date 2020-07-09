import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class Detail extends React.Component{
    constructor() {
        super();
    }
    goBack(){
        const { navigation } = this.props
        navigation.goBack()
    }
    render() {
        return (
            <View>
                <View>
                    <Text>页面1</Text>
                </View>
                <TouchableOpacity underlayColor='white' onPress={this.goBack.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonTxt}>返回</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
