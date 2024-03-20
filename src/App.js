import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <div>
      {/* step 5: wrap the body with provider and pass store to provider */}
      <Provider store={appStore}>
        <Body/>
      </Provider>
     
    </div>
  );
}

export default App;
