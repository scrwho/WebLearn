import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Navbar />

        <div className="container">
       <Routes>  
         <Route path="/" element={<Home />} />
       </Routes>
     </div>
      
      </BrowserRouter>

    </div>
  ); 
}

export default App;