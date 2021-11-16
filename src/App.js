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
    const item = {
      text: text,
      done: false,
    };
    setToDo([...toDo, item]);
    setText('');
  };
  const hanleDeleteToDo = item => {
    setToDo(toDo.filter(i => i !== item));
  };
  const handlePress = id => {
    setToDo(
      toDo.map(item =>
        item.text === id ? {...item, done: !item.done} : {...item},
      ),
    );
  };
  const unCompleted = () => {
    const unComletedToDo = toDo.filter(item => !item.done);

    return unComletedToDo;
  };
  console.log(toDo);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.head_container}>
          <Text style={styles.text}>Yapılacaklar</Text>
          <Text style={styles.text}> {unCompleted().length} </Text>
        </View>
        <FlatList
          data={toDo}
          renderItem={({item}) => (
            <ToDoCard
              donePress={handlePress}
              onSelect={() => hanleDeleteToDo(item)}
              toDo={item}
            />
          )}
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
          <View style={styles.seperator}></View>

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
    marginLeft: 18,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  button_text: {
    color: 'white',
  },
  seperator: {
    borderColor: '#c0c0c0',
    borderWidth: 1,
    margin: 10,
  },
});

export default App;
