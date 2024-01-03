
import './App.css';
import Garage from './Components/Car'
import HookUseState from './Components/HookUseState'
import HookUseEffct from './Components/HookUseEffct'
import HooksUseContext1 from './Components/HooksUseContext'
import HooksContextSimple from './Components/HooksContextSimple'
import HooksUseReducer from './Components/HooksUseReducer'
import HooksUseReduce2 from './Components/HooksUseReduce2'
function App() {
  return (
    <div className="App">
      <Garage/>
      <HookUseState/>
      <HookUseEffct/>
      <HooksContextSimple/>
      <HooksUseReducer/>
      <HooksUseReduce2/>
    </div>
  );
}

export default App;
