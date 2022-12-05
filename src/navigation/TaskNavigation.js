import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CreateTask from "../screens/CreateTask";


const Stack = createNativeStackNavigator();

const TaskNavigation = () => {
  return (
    
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{title: "Tareas"}} />
      <Stack.Screen name="Task" component={CreateTask} options={{title: "Nueva Tarea"}} />
    </Stack.Navigator>
    
  );
};

export default TaskNavigation