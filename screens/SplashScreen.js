import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Hook1');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>HEXAWARE</Text>
      <Text style={styles.subText}>Lumino</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.primary,
    justifyContent:'center',
    alignItems:'center',
  },
  logoText:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
    letterSpacing:2,
  },
  subText:{
    color:'#fff',
    fontSize:24,
    marginTop:10,
    fontWeight:'500',
  }
});

export default SplashScreen;