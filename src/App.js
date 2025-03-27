import './App.css';
import Home from './components/pages/Home';
import Course from './components/pages/Course';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/course' element={<Course />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;