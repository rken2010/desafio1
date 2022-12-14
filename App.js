import { useFonts } from 'expo-font';
import TaskTabNavigation from './src/navigation/TaskTabNavigation';
import { Provider } from "react-redux"
import store from "./src/store"

export default function App() {
  
  const [ loaded ] = useFonts ({
    SonoRegular: require("./assets/fonts/Sono/static/Sono/Sono-Medium.ttf"),
    SonoBold: require("./assets/fonts/Sono/static/Sono/Sono-Bold.ttf")
  })
  if(!loaded) return null

  return (  
    <Provider store={ store }>
      <TaskTabNavigation/>
    </Provider>
  );
}

