import Header from './components/header/Header';
import WakeUpRoutes from './components/routes/WakeUpRoutes';
import Footer from './components/footer/Footer';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <WakeUpRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
