import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Cita = ({cita, eliminarCita}) => {
  return (
    <View style={styles.cita}>
      <View style={styles.cita_item}>
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View style={styles.cita_item}>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View style={styles.cita_item}>
        <Text style={styles.label}>Sintomas: </Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      {/* <Button title="Eliminar" /> */}
      <View>
        <TouchableHighlight
          onPress={() => eliminarCita(cita.id)}
          style={styles.btnEliminar}>
          <Text style={styles.txtEliminar}> Eliminar &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  cita_item: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    width: 130,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 6,
    borderRadius: 20,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'red',
  },
  txtEliminar: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Cita;
