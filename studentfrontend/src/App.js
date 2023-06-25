import './App.css';
import Appbar from './layout/Appbar';
import Student from './students/Student';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Appbar/>
     <Home/>
    </div>
  );
}

export default App;
