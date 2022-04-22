import './App.scss';
import LoginScreen from './screens/LoginScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPageScreen from './screens/MainPageScreen';
import PeripheralsScreen from './screens/PeripheralsScreen';
import AddPeripheralScreen from './screens/AddPeripheralScreen';

function App() {
  return (
    <div className='AppStyle'>
    <BrowserRouter>
      <Routes>
        <Route path="/loginPage" element={<LoginScreen />}/>
        <Route exact path="/" element={<LandingPageScreen />}/>
        <Route path="/mainPage" element={<MainPageScreen />}/>
        <Route path="/peripheralList" element={<PeripheralsScreen />}/>
        <Route path="/addPeripheral" element={<AddPeripheralScreen />}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
