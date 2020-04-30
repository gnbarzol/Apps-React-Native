import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Cita from './components/Cita';

const App = () => {
  //Definimos el state
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Chiki', propietario: 'Gary', sintomas: 'No come'},
    {id: '2', paciente: 'Niño', propietario: 'Gary', sintomas: 'Es bobo'},
    {id: '3', paciente: 'Fran', propietario: 'Gary', sintomas: 'No hace nada'},
  ]);

  const eliminarCita = id => {
    console.log('Eliminado...', id);
    setCitas(citasActuales => citasActuales.filter(cita => cita.id !== id));
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Administrador de citas</Text>

        {citas.length > 0 ? (
          <Text style={styles.subtitulo}>Administra tus citas</Text>
        ) : (
          <Text style={styles.subtitulo}>No hay citas</Text>
        )}

        <FlatList
          data={citas}
          renderItem={cita => (
            <Cita cita={cita.item} eliminarCita={eliminarCita} />
          )}
          keyExtractor={cita => cita.id}
        />
        {/* {citas.map(cita => (
          <Text key={cita.id}>{cita.paciente}</Text>
        ))} */}
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
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitulo: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
