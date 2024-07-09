import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import StudentLogin from './components/StudentLoginForm';
import ParentLogin from './components/ParentLogin';
import FacultyLogin from './components/FacultyLogin';

// import StudentList from './components/StudentList';
import Nav from './components/Nav';
// import EditStudent from './components/EditStudent';
import Notice from './components/Notice';
import Look from './components/Look';


function App() {
  return (
    <div class="containe-fluid" style={{backgroundColor:'lightgray'}}>
      <Look/>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/"/>
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/parent-login" element={<ParentLogin />} />
          <Route path="/faculty-login" element={<FacultyLogin />} />

        </Routes>
        
        
      </HashRouter>
      <Notice/>
    </div>
  );
}


export default App;
