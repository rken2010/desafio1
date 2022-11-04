import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [textTarea, setTextTarea] = useState("");
  const [list, setList] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Pendientes 🛍️</Text>
      <View>
        <TextInput
          placeholder="Agregar Tarea"
          placeholderTextColor="black"
          style={styles.input}
          value={textTarea}
        />
        <Button title="Agregar" />
      </View>
      <View>
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
  },
  input:{
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 250,
    marginBottom:15
  }
});
