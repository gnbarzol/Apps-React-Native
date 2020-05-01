import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  //Definimos el state
  const [citas, setCitas] = useState([]);

  const [vistaFormulario, setVistaFormulario] = useState(false);

  const eliminarCita = id => {
    console.log('Eliminado...', id);
    setCitas(citasActuales => citasActuales.filter(cita => cita.id !== id));
  };

  const mostrarContenido = () => {
    setVistaFormulario(!vistaFormulario);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Administrador de citas</Text>

        <View style={styles.contenido}>
          <View>
            <TouchableHighlight
              onPress={() => mostrarContenido()}
              style={styles.btnMostrarForm}>
              <Text style={styles.txtMostrarForm}>{vistaFormulario ? 'Ver Citas':'Crear nueva Cita'}</Text>
            </TouchableHighlight>
          </View>
          {vistaFormulario ? (
            <>
              <Text style={styles.subtitulo}>Crea una nueva Cita</Text>
              <Formulario 
                citas={citas}
                setCitas={setCitas}
                setVista={setVistaFormulario}
              />
            </>
          ) : (
            <>
              <Text style={styles.subtitulo}>
                {citas.length > 0
                  ? 'Administra tus citas'
                  : 'Agrega una nueva cita'}
              </Text>
              <FlatList
                data={citas}
                renderItem={cita => (
                  <Cita cita={cita.item} eliminarCita={eliminarCita} />
                )}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: Platform.OS === 'ios' ? 45 : 20,
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
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  btnMostrarForm: {
    padding: 6,
    borderColor: '#ffa41b',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffa41b',
    marginVertical: 10,
  },
  txtMostrarForm: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default App;
