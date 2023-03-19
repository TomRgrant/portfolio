import './App.css';
import NavBar from './Components/NavBar';
import PortfolioContainer from './Containers/PortfolioContainer';
// import { BrowserRouter as Router, Routes, Route } from ""

function App() {
  return (
    <div className="App">
      <NavBar />
      <PortfolioContainer />
    </div>
  );
}

export default App;
