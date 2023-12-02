// import NavBar from "./components/NavBar/NavBar";
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import './App.css'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// function App() {

//   return (
//     <>
//       <NavBar />
//     </>
//   )
// }

// export default App
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login";  // Importă componenta Login
import Register from "../backend/views/Register";  // Importă componenta Register
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Switch>
      </>
    </Router>
  )
}

export default App;
