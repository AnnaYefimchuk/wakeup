import Header from './components/header/Header';
import WakeUpRoutes from './components/routes/WakeUpRoutes';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WakeUpRoutes />
    </div>
  );
}

export default App;
