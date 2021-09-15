import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import ToDoCard from './components/ToDoCard';

const App = () => {
  const [status, setStatus] = useState('');
  const [text, setText] = useState([]);
  const setNewText = () => {
    setText(text.push(status));
  };
  return (
    <SafeAreaView>
      <View style={styles.head_container}>
        <Text style={styles.text}>Yapılacaklar</Text>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.body_container}>
        <ToDoCard />
      </View>
      <View style={styles.inner_container}>
        <TextInput
          style={styles.input}
          onChangeText={d => setStatus(d)}
          value={status}
        />
        <Button title="Kaydet" onPress={setNewText} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  body_container: {},
  text: {
    fontSize: 40,
    color: 'orange',
    fontWeight: 'bold',
  },
  inner_container: {},
});

export default App;
