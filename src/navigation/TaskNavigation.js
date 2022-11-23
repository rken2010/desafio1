import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import Task from "../components/Task";

const Stack = createNativeStackNavigator();

export default TaskNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Task" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};