import './App.css';
import { Provider } from 'react-redux'; 

import Books from './Components/Books';
import Store from './redux container/store';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
    <Books/>
    </div>
    </Provider>
  );
}

export default App;
