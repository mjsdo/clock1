import { Provider } from 'react-redux';
import Clock from '~/components/Clock';
import { store } from '~/store';

import '~/App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Clock />
      </div>
    </Provider>
  );
}

export default App;
