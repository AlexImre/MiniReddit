import './App.css';
import { Board } from './Components/Board/Board';
import { Navbar } from './Components/Navbar/Navbar';
import { Sidebar } from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="AppContainer">
      <Navbar />
      <div className='AppWrapper'>
        <Board />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
