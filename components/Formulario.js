import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({citas, setCitas, setVista}) => {

    const [paciente, setPaciente] = useState('');
    const [dueño, setDueño] = useState('');
    const [telefono, setTelefono] = useState('');
    const [sintoma, setSintoma] = useState('');
    const [fecha, setFecha] = useState(' --/--/-- ');
    const [hora, setHora] = useState(' --:-- ');


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        const opciones = {weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'};
        hideDatePicker();
        setFecha(date.toLocaleDateString('es-Es', opciones));

    };

    //Muestra u oculta el time picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (hora) => {
        const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
        hideTimePicker();
        setHora(hora.toLocaleString('en-US', opciones));
    };

    //Crea una nueva cita
    const crearCita = () => {
        if(paciente.trim() === '' || dueño.trim() === '' || telefono.trim() === '' || sintoma.trim() === '' || fecha.trim() === '--/--/--' || hora.trim() === '--:--'){
            mostrarAlerta();
            return;
        }
        const cita = { paciente, dueño, telefono, fecha, hora, sintoma};
        cita.id = shoritd.generate(); //Me va a crear un id corto
        //Agregamos al state
        const citasNew = [...citas, cita];
        setCitas(citasNew);
        //Ocultar formulario
        setVista(false);
        //Resetear formulario

    };

    //Muestra la alerta si falla la validacion
    const mostrarAlerta = () => {
        Alert.alert(
            'Error', //Titulo
            'Todos los campos son obligatorios', //mensaje
            [{
                text: 'OK' //Arreglo de botones
            }]
        )
    }

    return(
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Ingrese nombre del paciente'
                        onChangeText={ text => setPaciente(text)}
                    /> 
                </View>
                <View>
                    <Text style={styles.label}>Dueño:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Ingrese nombre del dueño'
                        onChangeText={ text => setDueño(text)}
                    /> 
                </View>
                <View>
                    <Text style={styles.label}>Contacto:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Ingrese numero de telefono'
                        onChangeText={(texto) => console.log(texto)}
                        keyboardType='numeric'
                        onChangeText={ text => setTelefono(text)}
                    /> 
                </View>
                <View>
                    <Text style={styles.label}>Fecha: {fecha}</Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale="es_ES"
                        headerTextIOS="Elige la fecha"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                </View>
                <View>
                    <Text style={styles.label}>Hora: {hora}</Text>
                    <Button title="Seleccionar hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale="es_ES"
                        headerTextIOS="Elige la hora"
                        cancelTextIOS="Cancelar"
                        confirmTextIOS="Confirmar"
                    />
                </View>
                <View>
                    <Text style={styles.label}>Sintomas:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Ingrese los sintomas del paciente'
                        onChangeText={(texto) => console.log(texto)}
                        multiline
                        onChangeText={ text => setSintoma(text)}
                    /> 
                </View> 
                <View>
                    <TouchableHighlight
                        onPress={() => crearCita()}
                        style={styles.btnCrear}>
                        <Text style={styles.txtCrear}> Crear Cita </Text>
                    </TouchableHighlight>
                </View> 
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    input: {
        borderColor: '#e1e1e1',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    fecha: {
        textAlign: 'center',
        fontSize: 15,
    },
    btnCrear: {
        padding: 6,
        borderRadius: 20,
        borderColor: '#ffa41b',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffa41b',
        marginVertical: 10, 
    },
    txtCrear: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default Formulario;
