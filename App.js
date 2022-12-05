import { useFonts } from 'expo-font';
import TaskTabNavigation from './src/navigation/TaskTabNavigation';

export default function App() {
  
  const [ loaded ] = useFonts ({
    SonoRegular: require("./assets/fonts/Sono/static/Sono/Sono-Medium.ttf"),
    SonoBold: require("./assets/fonts/Sono/static/Sono/Sono-Bold.ttf")
  })
  if(!loaded) return null

  return (  
      <TaskTabNavigation/>
  );
}

