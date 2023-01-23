import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import UseCallback from "./hooks/Usecallback";
import UseContext from "./hooks/Usecontext";
import UseMemo from "./hooks/Usememo";
import UseReducer from "./hooks/Usereducer";
import UseRef from "./hooks/Useref";
import AllHooks from './hooks/AllHooks';

function App() {

  const gotoContext = () =>{

  }
  return (

    <div>

        <Router>

          <Routes>

            <Route path='/' element={<AllHooks/>}></Route>
            

            <Route path="/hooks/usecallback" element={<UseCallback/>}></Route>
            <Route path="/hooks/usecontext" element={<UseContext/>}></Route>
            <Route path="/hooks/usememo" element={<UseMemo/>}></Route>
            <Route path="/hooks/usereducer" element={<UseReducer/>}></Route>
            <Route path="/hooks/useref" element={<UseRef/>}></Route>
            

          </Routes>

        </Router>
    </div>
    
  );
}

export default App;
