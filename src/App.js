
import './App.css';
import FnUseStatehook from './Components/FnUseStatehook';
import FnUseStateWithArray from './Components/FnUseStateWithArray';
import FnUseStateWithObj from './Components/FnUseStateWithObj';
import FnUseStateWithPrev from './Components/FnUseStateWithPrev';

function App() {
  return (
    <div className="App">
      <FnUseStatehook />
      <FnUseStateWithPrev />
      <FnUseStateWithObj />
      <FnUseStateWithArray />
    </div>
  );
}

export default App;
