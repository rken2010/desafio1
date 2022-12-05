import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { StyleSheet,View } from "react-native";

const CardTask = () => (
  <View style={styles.card}>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      style= {styles.card}
      left={(props) => <Avatar.Icon {...props} icon="alien-outline" />}
      right={(props) => <IconButton {...props} icon="delete" onPress={() => {}} />}
    />
  </View>
);

export default CardTask;

const styles = StyleSheet.create({
  card: {
    margin:10,
    backgroundColor:"white",
    shadowColor:"·7f5df0",
    shadowOffset:{ width:0, height:10},
    shadowOpacity:0.25,
    shadowRadius:0.25,
    elevation:5
  }
})