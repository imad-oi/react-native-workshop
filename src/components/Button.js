import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: 10,
  },
  btnText: {
    color: COLORS.white,
  },
});
