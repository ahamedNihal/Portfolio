import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
import Routing from './Routing/Routing';




function App() {

  return (
    <div className="App">
      <Routing/> 
    </div>
  );
}

export default App;
