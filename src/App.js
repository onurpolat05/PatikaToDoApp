import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ToDoCard from './components/ToDoCard';

const App = () => {
  const [text, setText] = useState('');
  const [toDo, setToDo] = useState([]);
  const handleChange = item => setText(item);
  const setNewText = () => {
    setToDo([...toDo, {text}]);
    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.head_container}>
          <Text style={styles.text}>Yapılacaklar</Text>
          <Text style={styles.text}> {toDo.length} </Text>
        </View>
        <FlatList
          data={toDo}
          renderItem={({item}) => <ToDoCard toDo={item} />}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
      <View style={styles.inner_container}>
        <View style={styles.inputInnerContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange}
            value={text}
            placeholder="Yapılacak..."
            placeholderTextColor="#eaeaea"
          />

          <TouchableOpacity style={styles.input_button} onPress={setNewText}>
            <Text style={styles.button_text}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  head_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  text: {
    fontSize: 40,
    color: 'orange',
    fontWeight: 'bold',
  },
  inner_container: {
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    margin: 10,
  },
  inputInnerContainer: {
    width: '100%',
    alignItems: 'center',

    backgroundColor: 'gray',
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'gray',
    color: 'white',
    fontSize: 17,
  },
  input_button: {
    width: '90%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  button_text: {
    color: 'white',
  },
});

export default App;
