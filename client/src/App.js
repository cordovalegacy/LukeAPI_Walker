import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Params from './components/params';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Params />} />
          <Route path='/:peopleOrPlanets/:id' element={<Params />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
