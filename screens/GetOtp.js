import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const GetOtp = ({ navigation }) => {
  const [credential, setCredential] = useState('');

  const handleSendOtp = () => {
    if (!credential.trim()) {
      Alert.alert('Please enter email or phone');
      return;
    }

    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

    navigation.navigate('EnterOtp', {
      userValue: credential,
      otp: generatedOtp,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Get OTP</Text>

      <CustomInput
        placeholder="Email address or phone"
        icon="mail"
        value={credential}
        onChangeText={setCredential}
      />

      <CustomButton title="Send otp" onPress={handleSendOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#F3F3F3', padding:25, justifyContent:'center' },
  back:{ fontSize:24, marginBottom:120 },
  heading:{ textAlign:'center', fontSize:20, fontWeight:'700', marginBottom:20 }
});

export default GetOtp;