import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import ProgressDots from '../components/ProgressDots';
import Colors from '../constants/Colors';

const Hook3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/hook3.png')} style={styles.image} />
      <Text style={styles.title}>Built just for you.</Text>
      <Text style={styles.subtitle}>
        Get courses tailored to your goals and interests
      </Text>
      <ProgressDots active={3} />
      <CustomButton title="Next >" onPress={() => navigation.navigate('LoginOption')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:Colors.white, justifyContent:'center', padding:25 },
  image:{ width:220, height:220, resizeMode:'contain', alignSelf:'center', marginBottom:20 },
  title:{ textAlign:'center', fontSize:28, fontWeight:'700', color:Colors.text },
  subtitle:{ textAlign:'center', color:Colors.gray, fontSize:14, marginTop:10, lineHeight:20, paddingHorizontal:20 }
});

export default Hook3;