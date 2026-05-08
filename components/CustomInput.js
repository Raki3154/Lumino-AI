import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomInput = ({ placeholder, secureTextEntry, icon, value, onChangeText }) => {
  return (
    <View style={styles.wrapper}>
      <Ionicons name={icon} size={14} color="#888" style={{marginRight:8}} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#DADADA',
    borderRadius:4,
    paddingHorizontal:10,
    marginTop:12,
    height:42,
    backgroundColor:'#fff'
  },
  input:{ flex:1, fontSize:12 }
});

export default CustomInput;