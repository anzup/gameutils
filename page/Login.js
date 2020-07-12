import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

class Login extends React.Component{
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={styles.formTitle}>用户登陆</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    formTitle: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'blod',
        color: 'blue'
    }
})
