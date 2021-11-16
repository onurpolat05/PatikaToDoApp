import React, {useState} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({toDo, onSelect, donePress}) => {
  const [isPress, setIsPress] = useState(true);
  const onPress = () => {
    setIsPress(!isPress);
  };

  return (
    <View>
      <TouchableHighlight
        style={isPress ? styles.isPress : styles.notPress}
        onPress={() => {
          onPress();
          donePress(toDo.text);
        }}
        onLongPress={onSelect}>
        <Text style={isPress ? styles.text : styles.textDone}>{toDo.text}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ToDoCard;
