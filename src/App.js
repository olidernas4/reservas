
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import SalaJuntas from './components/SalaJuntas';


function App() {
  return (
    <div className="App">
      <Router>
       
        <Routes>
          
          <Route path='/' element={<SalaJuntas/>}/>

        </Routes>
       
      </Router>
    </div>
  );
}
export default App;
