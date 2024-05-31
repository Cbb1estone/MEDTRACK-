import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  ImageBackground
} from 'react-native';

import Formulario from './src/components/Formulario';
import InfoPacientes from './src/components/InfoPacientes';
import Informacion from './src/components/Informacion';
import Calendario from './src/components/Calendario';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCalendario, setModalCalen] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modaPaciente, setModalPaciente] = useState(false);
  const [identificado, setIdentificado] = useState(true);
  const [itemsCalendario, setItemsCalendario] = useState({});

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>+ MEDTRACK</Text>
      </View>
      <Modal visible={identificado} animationType='slide'>
        <Informacion setIdentificado={setIdentificado} />
      </Modal>
      <View style={styles.redBackground}>
        <View style={styles.textContainer}>
          <ImageBackground source={require('./src/img/pildo.png')} style={styles.backgroundImage} />
        </View>
      </View>

      <Pressable onPress={() => setModalCalen(true)} style={styles.button}>
        <Text style={styles.buttonText}>Calendario</Text>
      </Pressable>

      <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Planeación</Text>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          itemsCalendario={itemsCalendario}
          setItemsCalendario={setItemsCalendario}
        />
      </Modal>

      <Modal visible={modaPaciente} animationType='slide'>
        <InfoPacientes
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>

      <Modal visible={modalCalendario} animationType="slide">
        <Calendario items={itemsCalendario} setItems={setItemsCalendario} />
        <Pressable onPress={() => setModalCalen(false)} style={styles.button}>
          <Text style={styles.buttonText}>Cerrar Calendario</Text>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f0ea',
    flex: 1,
    paddingTop: 0
  },
  banner: {
    backgroundColor: '#832603',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800'
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#757e2b',
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 40,
    marginTop: 30
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  redBackground: {
    backgroundColor: '#832603',
    alignItems: 'center'
  },
  textContainer: {
    paddingHorizontal: 0,
    paddingVertical: 30,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: 0
  },
  backgroundImage: {
    width: 350,
    height: 300,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});

export default App;
