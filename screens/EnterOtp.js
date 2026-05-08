import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

const EnterOtp = ({ navigation, route }) => {
  const { userValue, otp } = route.params;

  const [enteredOtp, setEnteredOtp] = useState('');
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (enteredOtp.length === 4) {
      verifyOtp();
    }
  }, [enteredOtp]);

  const maskValue = (value) => {
    if (value.includes('@')) {
      const parts = value.split('@');
      return parts[0].slice(0, 2) + '******@' + parts[1];
    }
    return '+91 ' + value.slice(0, 2) + '******' + value.slice(-2);
  };

  const verifyOtp = () => {
    if (enteredOtp === otp) {
      navigation.replace('LoggedIn');
    } else {
      Alert.alert('Invalid OTP', `Correct OTP for testing is ${otp}`);
      setEnteredOtp('');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Enter OTP</Text>
      <Text style={styles.sub}>Code has been sent to {maskValue(userValue)}</Text>

      <TextInput
        style={styles.otpInput}
        keyboardType="number-pad"
        maxLength={4}
        value={enteredOtp}
        onChangeText={setEnteredOtp}
      />

      <TouchableOpacity disabled={timer !== 0}>
        <Text style={styles.resend}>Resend code in {timer}s {'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    padding: 25,
    justifyContent: 'center',
  },
  back: {
    fontSize: 24,
    marginBottom: 100,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  sub: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 12,
    marginTop: 15,
  },
  otpInput: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#B8B8FF',
    alignSelf: 'center',
    width: 160,
    height: 45,
    textAlign: 'center',
    letterSpacing: 18,
    fontSize: 20,
    backgroundColor: '#fff',
  },
  resend: {
    textAlign: 'center',
    marginTop: 20,
    color: '#4B4BFF',
    fontSize: 12,
  },
});

export default EnterOtp;