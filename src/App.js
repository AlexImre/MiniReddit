import './App.css';
import { Board } from './Components/Board/Board';
import { Navbar } from './Components/Navbar/Navbar';
import { SubReddits } from './Components/SubReddits/SubReddits';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Board />
      <SubReddits />
    </div>
  );
}

export default App;
