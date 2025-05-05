import Home from './Compontent/Home';
import About from './Compontent/About';
import Procedure from './Compontent/Procedure';
import Game from './Compontent/Game';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (

 
    <div className="App">

<BrowserRouter>
<Routes>
  <Route index element={<Home/>}/>
  <Route path='Home' element={<Home/>}/>
  <Route path='About' element={<About/>}/>
  <Route path='Game' element={<Game/>}/>
  <Route path='Procedure' element={<Procedure/>}/>
</Routes>
</BrowserRouter> 
    </div>
  );
}

export default App;
