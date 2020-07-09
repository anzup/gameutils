import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TarBarIOS,
    NavigatorIOS,
    TouchableNativeFeedback,
    TouchableOpacity,
    ActionSheetIOS,
} from 'react-native';

class Line extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: '',
        }
    }

    componentDidMount(){
        const { removeLine } = this.props
        if(removeLine){
            this.setState({
                edit: '编辑'
            })
        }
    }

    deleteLine(){
        const { removeLine } = this.props
        removeLine?removeLine():null
    }

    render(){
        return (
            <View style={styles.line}>
                <Text style={styles.lineText}>{this.props.text}</Text>
                <Text style={styles.lineEdit} onPress={ () => { this.deleteLine() } }>{this.state.edit}</Text>
            </View>
        )
    }
}

export default class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            time: 2
        }
    }

    share(){
        ActionSheetIOS.showActionSheetWithOptions({
            options: [
                '拨打电话',
                '发送短信',
                '取消'
            ],
            cancelButtonIndex: 2,
            destructiveButtonIndex: 0
        },function(index){
            console.log('点击的索引' + index)
        })
    }

    toPage(){
        const { navigation } = this.props
        navigation.navigate('Detail')
    }

    openDraw(){
        const { navigation } = this.props
        navigation.openDrawer()
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.titleBox}>
                    <Text style={styles.titleText}>hellow world!</Text>
                </View>
                <Line text="今天是2020/7/1" />
                <Line text="我开始学习rn" />
                <Line text={`坚持每天练习${this.state.time}小时`} removeLine={ () => { this.setState({ time: this.state.time + 1 }) } }/>
                <TouchableOpacity underlayColor="white" onPress={this.share.bind(this)}>
                    <View style={styles.button} >
                        <Text style={styles.buttonText}>按钮</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity underlayColor="white" onPress={this.toPage.bind(this)}>
                    <View style={styles.button} >
                        <Text style={styles.buttonText}>跳转</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity underlayColor="white" onPress={this.openDraw.bind(this)}>
                    <View style={styles.button} >
                        <Text style={styles.buttonText}>抽屉</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    titleBox:{
        marginTop: 50,
        marginBottom: 20
    },
    titleText:{
        fontSize: 24,
        color: "#f40",
        textAlign: "center"
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 16,
        paddingRight: 16
    },
    lineText: {
        flex: 1,
        fontSize: 16,
        color: "#666",
    },
    lineEdit: {
        fontSize: 14,
        color: '#f44'
    },
    button:{
        marginTop: 60,
        width: 260,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#f44'
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 24,
        padding: 16,
        color: 'white'
    }
})
