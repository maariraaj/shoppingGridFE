import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createRoot } from 'react-dom/client'
import './styles/index.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)