import React, {useState} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = props => {
  const [isPress, setIsPress] = useState(true);
  const onPress = () => setIsPress(!isPress);
  return (
    <View>
      <TouchableHighlight
        style={isPress ? styles.isPress : styles.notPress}
        onPress={onPress}>
        <Text style={isPress ? styles.text : styles.textDone}>
          ALKJSDASDJLAJLSDADSJLASLJDJLS
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default ToDoCard;
