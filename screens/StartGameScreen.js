import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  const [enteredNumber, setEnterNumber] = useState('');
  function numberInputHandler(enteredText) {
    setEnterNumber(enteredText);
  }
  function confirmInputHandler() {
    
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: '#4e0329',
    elevation: 12,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonContainer: { flex: 1 },
});
