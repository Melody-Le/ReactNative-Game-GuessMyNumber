import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnterNumber] = useState('');
  const { width, height } = useWindowDimensions();
  function numberInputHandler(enteredText) {
    setEnterNumber(enteredText);
  }
  function resetInputHandler() {
    setEnterNumber('');
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber); // convert sting into number
    // validate input
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert ...
      Alert.alert(
        'Invalid number!',
        'Number has to be a number betweekn 1 and 99',
        [{ text: 'Okay', style: 'cancel', onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  const marginTopDistance = height < 500 ? 30 : 100;
  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <Title style={styles.rootContainer}>Guess My Number</Title>
      <Card>
        {/* <Text style={styles.instructionText}>Enter a number</Text> */}
        <InstructionText>Enter a number</InstructionText>

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
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
const deviceHeight = Dimensions.get('window').height;

export default StartGameScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight < 350 ? 30 : 100,
    alignItems: 'center',
  },
  inputContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonContainer: { flex: 1 },
});
