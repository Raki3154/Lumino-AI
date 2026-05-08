import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import ProgressDots from '../components/ProgressDots';
import Colors from '../constants/Colors';

const Hook1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/hook1.png')} style={styles.image} />
      <Text style={styles.title}>Stay consistent.</Text>
      <Text style={styles.subtitle}>
        Track streaks, earn achievements, and build habits
      </Text>
      <ProgressDots active={1} />
      <CustomButton title="Next >" onPress={() => navigation.navigate('Hook2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white,
    justifyContent:'center',
    padding:25,
  },
  image:{
    width:220,
    height:220,
    resizeMode:'contain',
    alignSelf:'center',
    marginBottom:20,
  },
  title:{
    textAlign:'center',
    fontSize:28,
    fontWeight:'700',
    color:Colors.text,
  },
  subtitle:{
    textAlign:'center',
    color:Colors.gray,
    fontSize:14,
    marginTop:10,
    lineHeight:20,
    paddingHorizontal:20,
  }
});

export default Hook1;