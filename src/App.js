import './App.scss';
import LoginScreen from './screens/LoginScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPageScreen from './screens/MainPageScreen';
import DevicesScreen from './screens/DevicesScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />}/>
        <Route path="/landingPage" element={<LandingPageScreen />}/>
        <Route path="/mainPage" element={<MainPageScreen />}/>
        <Route path="/devices" element={<DevicesScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
