import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  isPress: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 3,
  },
  notPress: {
    backgroundColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 3,
  },
  text: {
    color: 'white',
    textDecorationLine: 'none',
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: 'white',
  },
});
