import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from 'react-native-paper';


const Home = ({navigation}) =>{ 
    return(
        <View>
                <FAB
                    icon="application-edit-outline"
                    style={styles.fab}
                    onPress={() => navigation.navigate("Task")}
                    label="Crear nueva Tarea"
                    animated= "true"
                />
                <FAB
                    icon="application-edit-outline"
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                    label="Iniciar Tarea"
                    animated= "true"
                />
                <FAB
                    icon="application-edit-outline"
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                    label="Terminar Tarea"
                    animated= "true"
                /> 
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    fab: {
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor:"blue"
    },
  })
  export default Home