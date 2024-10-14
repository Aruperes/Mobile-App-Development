import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer} />
      <View style={styles.container}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
      <View style={styles.bottomContainer} />
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'purple',
    flex: 1,
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  redBox: {
    borderRadius: 300,
    borderWidth: 5,
    borderColor: 'white',
    height: 100,
    width: 100,
    backgroundColor: 'red',
    elevation: 10,
  },
  greenBox: {
    borderRadius: 300,
    borderWidth: 5,
    borderColor: 'white',
    height: 100,
    width: 100,
    backgroundColor: 'green',
    elevation: 10,
  },
  blueBox: {
    borderRadius: 300,
    borderWidth: 5,
    borderColor: 'white',
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    elevation: 10,
  },
});