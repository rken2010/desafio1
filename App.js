import { useFonts } from 'expo-font';
import { AppLoading } from 'expo-app-loading';
import TaskNavigation from './src/navigation/TaskNavigation';
import { View, Text } from 'react-native';

export default function App() {
  
  const [ loaded ] = useFonts ({
    SonoRegular: require("./assets/fonts/Sono/static/Sono/Sono-Medium.ttf"),
    SonoBold: require("./assets/fonts/Sono/static/Sono/Sono-Bold.ttf")
  })
  if(!loaded) return null

  return (
    
      <TaskNavigation/>
   
    

  );
}

