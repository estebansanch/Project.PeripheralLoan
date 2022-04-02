import './App.scss';
import LoginScreen from './screens/LoginScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />}/>
        <Route path="/landingPage" element={<LandingPageScreen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
