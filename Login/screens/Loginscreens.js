import React, {Component} from 'react'
import { StyleSheet, Text, View, ImageBackground,
Image, TextInput, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import bgimg from '../img/coder.jpg';
import logo from '../img/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';



const { width: WIDTH} = Dimensions.get('window')

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if(this.state.press == false){
      this.setState({showPass : false, press : true})
    }
    else{
      this.setState({showPass : true, press : false})
    }
  }

  static navigationOptions = {
      header : null
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.keycont} behavior = "padding">
      <ImageBackground source={bgimg} style={styles.bgcont}>

      <View style={styles.logoCont}>
        <Image source={logo} style={styles.logoimg}>
        </Image>
         
          <Text style={styles.textcon}>REACT NATIVE HUB</Text>
      </View>

      <View style={styles.inputcont}>

        <Icon name={'ios-person-outline'} size={30} color={'rgb(255, 255, 255)'} style={styles.inputicon}></Icon>

        <TextInput style={styles.input}
          placeholder={"UserID"}
          placeholderTextColor={'#f4e044'}
          underlineColorAndroid='transparent'
          >
        </TextInput>
      </View>

        <View style={styles.inputcont}>

        <Icon name={'ios-lock-outline'} size={30} color={'rgb(255, 255, 255)'} style={styles.inputicon}></Icon>

        <TextInput style={styles.input}
          placeholder={"Password"}
          secureTextEntry={this.state.showPass}
          placeholderTextColor={'#f4e044'}
          underlineColorAndroid='transparent'
          >
        </TextInput>
       
       
      <TouchableOpacity style={styles.btneye}
      onPress={this.showPass.bind(this)}>
        <Icon name={ this.state.press == false ?  'ios-eye-outline' : 'ios-eye-off-outline'} size={30} color={'rgb(255, 255, 255)'} > 

        </Icon>

      </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnlogin}
        onPress={()=> this.props.navigation.navigate('Home')}
        >
        <Text style={styles.textlog}> GetIn. </Text>
        </TouchableOpacity>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
 keycont:{
  flex: 1,
},
  bgcont: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoimg:{
    width : 150,
    height: 150
  },
  logoCont: {
    alignItems: 'center'
  },
  textcon: {
    fontSize: 25,
    color: 'white',
    fontWeight: '500',
  },
  inputcont: {
    marginTop: 10,
  },
  input:{
    width:  WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'white',
    marginHorizontal: 25
  },
  inputicon: {
    position: 'absolute',
    top: 8,
    left: 40,
  },
  btneye: {
    position: 'absolute',
    top: 8,
    right: 40,
  },
  btnlogin: {
    backgroundColor: '#17ed42',
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
   width: WIDTH - 80,
   justifyContent: 'center',
  },
  textlog: {
    fontSize: 25,
    fontWeight: '500'
  }
});
