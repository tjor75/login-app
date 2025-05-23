import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";
import ScreenHeader from "../../components/UI/ScreenHeader";
import FormularioLogin from "../../components/FormularioLogin";
import Background from "../../assets/images/background.png";
import styles from "./styles.jsx";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader texto="Portal de Socios" />

      <ImageBackground source={Background} resizeMode="cover" style={styles.formularioLoginIB}>
        <FormularioLogin />
      </ImageBackground>

      <StatusBar style="light" />
    </View>
  );
}
