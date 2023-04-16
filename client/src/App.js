import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import KycDetail from './Pages/KycDetail';
import LoginForm from './Pages/LoginForm';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import DashboardSideBar from './components/DashboardSideBar';
import Upload from './Pages/Upload';




function App() {
  return (
    <>
      <BrowserRouter>
      <DashboardSideBar/>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/" exact element={<LoginForm/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/kyc" exact element={<KycDetail/>} />
          <Route path="/upload" exact element={<Upload/>}/>
          {/* <Route path="/upload" exact element={<Upload/>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
