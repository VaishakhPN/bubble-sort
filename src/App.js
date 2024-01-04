import { Provider } from 'react-redux';
import Bubblesort from './components/Bubblesort.js';
import store from './store.js';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Bubblesort />
    </div>
    </Provider>
  );
 
}

export default App;