
import Count from './Count';
import {Provider} from "react-redux"
import Store from './states/Store';

function App() {
  return (
    <Provider store={Store} >  
      <Count />
    </Provider>
  );
}

export default App;
