import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from '../src/Components/Pages/Home.js';
import { Subreddit } from '../src/Components/Pages/Subreddit';
import { Comments } from '../src/Components/Pages/Comments';
import { Search } from './Components/Pages/Search';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
      <Routes>
        <Route path="/r/:subreddit" element={<Subreddit />} />
      </Routes>
    </Router>
  );
}

export default App;

