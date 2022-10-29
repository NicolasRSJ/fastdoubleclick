import { Routes ,Route } from 'react-router-dom'
import  Historic  from './Views/History/Index'
import  Stopwatch  from './Views/Stopwatch/Index'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Stopwatch/>} path="/" exact ></Route>
        <Route element={<Historic/>} path="/Historic" ></Route>
      </Routes>
    </div>
  );
}

export default App;
