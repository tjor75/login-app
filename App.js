import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, ImageBackground, TouchableOpacity, Pressable, Image, View } from 'react-native';
import Background from './assets/images/background.png';
import Verificado from './assets/images/icons/verificado.png';
import NoVerificado from './assets/images/icons/no-verificado.png';

export default function App() {
  const [username, handleUsernameChange] = useState('');
  const [contrasenia, handleContraseniaChange] = useState('');
  const [logueado, setLogueado] = useState(false);
  const [verificado, setVerificado] = useState(false);

  const mantenerPresionado = () => setVerificado(true);
  const loguearse = () => {
    if (verificado && username.toLowerCase() === 'jorge.luis' && contrasenia === 'Kapow123')
      setLogueado(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenHeaderText}>Portal de Socios</Text>
      </View>

      <ImageBackground source={Background} style={styles.formulario}>
        <View style={styles.formularioContainer}>
          <View>
            <Text style={styles.label}>Usuario:</Text>
            <TextInput
              placeholder="Jorge.luis"
              value={username}
              onChangeText={handleUsernameChange}
              style={styles.input}
            />
          </View>

          <View>
            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
              placeholder="Kapow123"
              value={contrasenia}
              onChangeText={handleContraseniaChange}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <Pressable style={styles.pressable} onLongPress={mantenerPresionado}>
            <Image source={verificado ? Verificado : NoVerificado} style={styles.verificado} />
            <Text>Mantener apretado para verificar</Text>
          </Pressable>

          <View>
            <Button title="INGRESAR" onPress={loguearse} color="#ecbe00" />

            <TouchableOpacity>
              <Text style={styles.link}>¿Olvidaste la clave?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.link}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>

          {logueado && <Text style={styles.logueadoText}>¡Logueado!</Text>}
        </View>
      </ImageBackground>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  screenHeader: {
    backgroundColor: '#344589',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (10 + 30),
    paddingBottom: 10
  },
  screenHeaderText: {
    color: '#f3f3f3'
  },
  formulario: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%'
  },
  formularioContainer: {
    gap: 12,
    alignItems: 'stretch',
    backgroundColor: '#f3f3f3dd',
    padding: 20,
    borderRadius: 10
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  link: {
    textAlign: 'center',
    marginTop: 7
  },
  logueadoText: {
    marginTop: 15,
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  pressable: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10
  },
  verificado: {
    width: 35,
    height: 35
  }
});