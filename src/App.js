import { Routes, Route, Link } from "react-router-dom";
import { makeStyles} from '@mui/styles';
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Transaction } from "./components/Transaction";
import { Contracts } from "./components/Contracts";

function App() {

  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      <SideNav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/contracts" element={<Contracts />} />
      </Routes>
    </div>
  );
}

const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    background: '#161d30',
  }
})

export default App;
