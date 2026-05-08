import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';

const LoginOption = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipBox}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>

      <Image source={require('../assets/images/loginoption.png')} style={styles.image} />

      <Text style={styles.bigTitle}>Learn{"\n"}Without{"\n"}Limits.</Text>

      <CustomButton title="Get started" onPress={() => navigation.navigate('Signup')} />

      <Text style={styles.bottomText}>
        Already have an account? <Text style={styles.sign}>Sign in</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:Colors.white, padding:25, justifyContent:'center' },
  skipBox:{ alignItems:'flex-end', marginBottom:10 },
  skip:{ color:Colors.gray, fontSize:13 },
  image:{ width:230, height:230, resizeMode:'contain', alignSelf:'center' },
  bigTitle:{ fontSize:34, fontWeight:'800', color:Colors.text, marginTop:10, lineHeight:38 },
  bottomText:{ textAlign:'center', marginTop:20, color:Colors.gray, fontSize:13 },
  sign:{ color:Colors.primary, fontWeight:'600' }
});

export default LoginOption;