import './App.css';

import Count from './components/count'
import Controller from './components/controller'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>This is a counter Application with React-Redux</h1>
        <Count />
        <Controller />
      </div>
    </Provider>
  );
}

export default App;
