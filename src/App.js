import './App.css';
import Banner from './Banner';
import { Provider } from 'react-redux';
import store from './store';
import Rocket from './components/Rocket';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Provider store={store}>
      <Rocket />
    </Provider>
      
    </div>
  );
}

export default App;
