import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Container/Home'
import About from './Container/About';
import Header from './Components/Header';
import { UserDetail } from './Container/UserDetail';


function App() {
  return (
       <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/apiResponse/:id" element={<UserDetail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
