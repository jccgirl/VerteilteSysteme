import './App.css';
import Appbar from './layout/Appbar';
import Student from './students/AddStudent';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddStudent from './students/AddStudent';

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addstudent" element={<AddStudent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
