import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <div className="bg-white">
        <Header/>
        <Slider/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
