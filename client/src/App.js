import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import KycDetail from './Pages/KycDetail';
import LoginForm from './Pages/LoginForm';
import Register from './Pages/Register';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<KycDetail/>} />
          <Route path="/login" exact element={<LoginForm/>} />
          <Route path="/register" exact element={<Register/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
