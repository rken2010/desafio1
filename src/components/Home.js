import React from "react";
import { Button, StyleSheet, View } from "react-native";


const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Button title="Task" onPress={() => navigation.navigate("Task")} />
        </View>

    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF724C",
        alignItems: "center",
        justifyContent: "center",
      },
})