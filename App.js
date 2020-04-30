import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Administrador de citas</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aa076b',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 45,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default App;
