import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const ProgressDots = ({ active }) => {
  return (
    <View style={styles.container}>
      {[1,2,3].map((item)=>(
        <View
          key={item}
          style={[
            styles.dot,
            active === item && styles.activeDot
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:20,
  },
  dot:{
    width:20,
    height:4,
    borderRadius:10,
    backgroundColor:'#D9D9D9',
    marginHorizontal:3,
  },
  activeDot:{
    backgroundColor:Colors.primary,
  }
});

export default ProgressDots;