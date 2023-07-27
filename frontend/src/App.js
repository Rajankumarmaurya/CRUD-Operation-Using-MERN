import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Create from './component/Create'
import Read from './component/Read'
import Update from './component/Update'

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route exact path='/' element={<Create/>} />
      <Route exact path='/all' element={<Read/>} />
      <Route exact path='/:id' element={<Update/>} />
    </Routes>
     
     
     
    </div>
  );
}

export default App;
