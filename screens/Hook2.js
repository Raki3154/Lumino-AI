import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import ProgressDots from '../components/ProgressDots';
import Colors from '../constants/Colors';

const Hook2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/hook2.png')} style={styles.image} />
      <Text style={styles.title}>Ask AI anything.</Text>
      <Text style={styles.subtitle}>
        Explains concepts, answers doubts, gives examples, breaks down tough topics
      </Text>
      <ProgressDots active={2} />
      <CustomButton title="Next >" onPress={() => navigation.navigate('Hook3')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:Colors.white, justifyContent:'center', padding:25 },
  image:{ width:220, height:220, resizeMode:'contain', alignSelf:'center', marginBottom:20 },
  title:{ textAlign:'center', fontSize:28, fontWeight:'700', color:Colors.text },
  subtitle:{ textAlign:'center', color:Colors.gray, fontSize:14, marginTop:10, lineHeight:20, paddingHorizontal:20 }
});

export default Hook2;