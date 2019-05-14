import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image, Button } from 'react-native'
import bgimg from '../img/coder.jpg';
import logo from '../img/logo.png';

export default class HomeScreens extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={bgimg}>

            <Image source={logo} style={styles.logocont}></Image>

    <Text style={styles.txt}>Welcome to HomeScreen</Text>

        <View style={styles.btn}>
        <Button title="GoBack to Login"
        onPress={()=> this.props.navigation.goBack()}
        ></Button>
     
      
        <Button title="GoBack popToTop"
        onPress={()=> this.props.navigation.popToTop()}
        ></Button>
        </View>
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      txt: {
          fontSize: 25,
          color: 'white',
          fontWeight: '900'
          
      },
      btn: {
          display: 'flex',
          flexDirection: 'row',
        alignContent: 'space-around'
        },
     logocont:{
         width: 150,
         height: 150
     }
})
