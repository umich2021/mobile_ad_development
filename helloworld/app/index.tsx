import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Linut work </Text>
      <Text>LMAO get screwed</Text>
      <Link href="/about" style={styles.button}>
        Go to about screen
      </Link>
      <Link href="https://www.linkedin.com/" style={styles.button}>
        Go to linkedin
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#",
  },
});
