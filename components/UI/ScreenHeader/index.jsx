import styles from "./styles.jsx";

export default function ScreenHeader({ texto }) {
  return (
    <View style={styles.screenHeader}>
      <Text style={styles.screenHeaderText}>{texto}</Text>
    </View>
  );
}
