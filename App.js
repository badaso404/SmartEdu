import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import SignInScreen from './src/screens/SignInScreen';

const App = () => {
  return (
    <View style={styles.root}>
    <SignInScreen/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
