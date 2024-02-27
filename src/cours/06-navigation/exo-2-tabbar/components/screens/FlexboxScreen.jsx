import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const FlexboxScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.redBox} />
      <View style={styles.greenBox}>
        <View style={styles.yellowBox} />
        <View style={styles.yellowBox} />
        <View style={styles.yellowBox} />
      </View>
      <View style={styles.blueBox} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  redBox: {
    flex: 1,
    backgroundColor: 'red',
  },
  greenBox: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  yellowBox: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderColor: '#000',
    borderWidth: 3,
  },
  blueBox: {
    flex: 3,
    backgroundColor: 'blue',
  },
});

export default FlexboxScreen;
