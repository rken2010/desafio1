import React from "react";
import { View, Text, StyleSheet  } from "react-native";
import { TextInput } from 'react-native-paper';

const CreateTask = () =>{ 


  return(
    <View style={styles.container} >
      <Text style={{ fontSize: 30 }}>Pendientes 🛍️</Text>
        <TextInput
          mode="outlined"
          label="Nueva Tarea"
          placeholder="Nombre Tarea"
          value="nombre"
          right={<TextInput.Affix text="/100" />}
        />
        <TextInput
          mode="outlined"
          label="Prioridad"
          placeholder="Ingrese la prioridad de la tarea"
          value="prioridad"
          right={<TextInput.Affix text="/100" />}
        />
        <TextInput
          mode="outlined"
          label="Duracion"
          placeholder="ingrese el tiempo que demanda la tarea"
          value="duracion"
          right={<TextInput.Affix text="/100" />}
        />
    </View>
  )
}

export default CreateTask

const styles = StyleSheet.create({
  container: {
    padding:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "SonoRegular"
  }
})