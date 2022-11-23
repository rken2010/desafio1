import { useState } from 'react';
import { Text, TextInput, Button,TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';

export default function Task() {  

  /* State de Tareas Pendientes */

  const [textTarea, setTextTarea] = useState("");
  const [list, setList] = useState([]);

  /* State del Modal */

 
  /* Seleccionar Item */
  const [itemSelected, setItemSelected] = useState({});

  /* State del TextInput para borrarlo y escribirlo */

  /*Agregar un item */

  const addItem = () => {
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textTarea },
    ]);
    setTextTarea("");
    };

  const onHandleChange = (t) => setTextTarea(t);

  const selectedItem = (id) => {
  
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  const deleteItem = () => {
    
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );

 

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Pendientes 🛍️</Text>
        <View>
            <TextInput
            placeholder="Agregar Tarea"
            placeholderTextColor="black"
            style={styles.input}
            value={textTarea}
            onChangeText={onHandleChange}
            />
            <TouchableOpacity style={styles.button} onPress={addItem}>
            <Text> Agregar </Text>
            </TouchableOpacity>
        </View>
      <View>
       { !list.length ? <Text> No hay tareas pendientes</Text>  :
        <FlatList
          style={styles.FlatList}
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "SonoRegular"
  },
  input:{
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 250,
    marginBottom:15
  },
  FlatList:{
    marginTop:15,
    width: 300,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5, 
  }
});