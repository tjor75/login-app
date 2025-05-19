import { useState } from "react";
import { Text, TextInput, Button, TouchableOpacity, View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig.js";
import Verificador from "../UI/Verificador";
import styles from "./styles.jsx";

export default function FormularioLogin({ user, setUser }) {
  const [email, handleEmailChange] = useState("");
  const [contrasenia, handleContraseniaChange] = useState("");
  const [verificado, setVerificado] = useState(false);
  
  const loguearse = async () => {
    if (user === null && email !== null && contrasenia !== null && verificado) {
      signInWithEmailAndPassword(auth, email, contrasenia)
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.formularioLogin}>
      <View>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="jorge.luis@ort.edu.ar"
          value={email}
          onChangeText={handleEmailChange}
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

      <Verificador verificado={verificado} setVerificado={setVerificado} />

      <View>
        <Button title="INGRESAR" onPress={loguearse} color="#ecbe00" />

        <TouchableOpacity>
          <Text style={styles.link}>¿Olvidaste la clave?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>

      {user && <Text style={styles.logueadoText}>¡Logueado!</Text>}
    </View>
  );
}
