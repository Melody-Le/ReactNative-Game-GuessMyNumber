import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
  Pressable,
} from 'react-native';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
