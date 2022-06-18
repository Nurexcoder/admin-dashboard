import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
// import DashboardApplicationGraph from "./components/Dashboard/DashboardApplicationGraph";
import Dashboard from "./components/Dashboard/Dashboard";
import Employees from "./components/Employees/Employees";

function App() {
    return (
        <>
        
            <Login />
            <Dashboard/>
            <Employees/>
        </>
    );
}

export default App;
