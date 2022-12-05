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