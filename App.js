/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  ActionSheetIOS
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
//
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

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

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      time: 2
    }
  }

  share(){
    console.log('弹窗');
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

export default App;
