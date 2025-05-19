import { Text, Image, Pressable } from "react-native";
import Verificado from "../assets/images/icons/verificado.png";
import NoVerificado from "../assets/images/icons/no-verificado.png";
import styles from "./styles.jsx";

export default function Verificador({ verificado, setVerificado }) {
  const mantenerPresionado = () => setVerificado(true);

  return (
    <Pressable style={styles.pressable} onLongPress={mantenerPresionado}>
      <Image
        source={verificado ? Verificado : NoVerificado}
        style={styles.verificado}
      />
      <Text>Mantener apretado para verificar</Text>
    </Pressable>
  );
}
