import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const LoggedIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>You've logged in! 🎉</Text>

        <Text style={styles.sub}>
          Take a moment to complete your{"\n"}profile for a better experience.
        </Text>

        <Text style={styles.avatar}>👤</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Onboarding1')}
        >
          <Text style={styles.btnText}>Customize my profile</Text>
        </TouchableOpacity>

        <Text style={styles.skip}>I'll do it later {'>'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ECECEC',
    justifyContent:'center',
    padding:25,
  },
  card:{
    backgroundColor:'#fff',
    borderRadius:15,
    padding:25,
    alignItems:'center',
  },
  title:{
    fontSize:24,
    fontWeight:'700',
  },
  sub:{
    textAlign:'center',
    color:'gray',
    fontSize:12,
    marginVertical:15,
    lineHeight:18,
  },
  avatar:{
    fontSize:70,
    marginBottom:20,
  },
  btn:{
    backgroundColor:Colors.primary,
    width:'100%',
    padding:14,
    borderRadius:4,
    alignItems:'center',
  },
  btnText:{
    color:'#fff',
    fontWeight:'600',
  },
  skip:{
    marginTop:15,
    color:'gray',
    fontSize:12,
  }
});

export default LoggedIn;