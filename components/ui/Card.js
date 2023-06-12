import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors.ios';

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 32,
    backgroundColor: Colors.primary800,
    elevation: 12,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
