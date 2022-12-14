
import { Text, TextInput, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/actions/addTask.action';

export default function Task() {  

  const dispatch = useDispatch()
  const items = useSelector((state) => state.task.items)

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );

 function addItem() { dispatch (addTask( items )) }

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