import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import KycDetail from './Pages/KycDetail';
import LoginForm from './Pages/LoginForm';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import DashboardSideBar from './components/DashboardSideBar';




function App() {
  return (
    <>
      <BrowserRouter>
      <DashboardSideBar/>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/login" exact element={<LoginForm/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/kyc" exact element={<KycDetail/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
