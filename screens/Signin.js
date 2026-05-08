import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';

const Signin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Sign in</Text>

      <CustomInput placeholder="Email address or phone" />
      <CustomInput placeholder="Password" secureTextEntry />

      <Text style={styles.small}>Remember me                     Forgot password?</Text>

      <CustomButton title="Sign in" onPress={() => navigation.navigate('GetOtp')} />

      <Text style={styles.or}>Or Signin with</Text>
      <Text style={styles.social}>Google        Github        OTP</Text>

      <Text style={styles.bottom}>
        Don't have an account? <Text style={styles.blue}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:Colors.white, justifyContent:'center', padding:25 },
  logo:{ width:130, height:50, resizeMode:'contain', alignSelf:'center', marginBottom:10 },
  heading:{ textAlign:'center', fontSize:28, fontWeight:'700', marginBottom:20 },
  small:{ fontSize:12, color:Colors.gray, marginTop:10 },
  or:{ textAlign:'center', marginTop:20, color:Colors.gray },
  social:{ textAlign:'center', marginTop:15, fontSize:14 },
  bottom:{ textAlign:'center', marginTop:25, color:Colors.gray },
  blue:{ color:Colors.primary }
});

export default Signin;