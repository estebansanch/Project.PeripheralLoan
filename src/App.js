import React from 'react'
import './App.scss';
import LoginScreen from './screens/LoginScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import {
  BrowserRouter,
  Route,
  Navigate, 
  Routes,
  Outlet
} from "react-router-dom";

import AuthApi from './AuthApi';
import jsCookie from 'js-cookie';

import MainPageScreen from './screens/MainPageScreen';
import PeripheralsScreen from './screens/PeripheralsScreen';
import AddPeripheralScreen from './screens/AddPeripheralScreen';
import PeriInfoScreen from './screens/PeriInfoScreen';
import GenerateQR from './screens/GenerateQR';

function App() {


  const [auth, setAuth] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const readCookie = () => {
    const user = jsCookie.get("user");
    if (user) {
      setAuth(true);
    }
  }

  React.useEffect(() => {
    readCookie();
    setIsLoaded(true);
  }, [])

  return (
    <div className='AppStyle'>
    <AuthApi.Provider value={{auth, isLoaded, setAuth}}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AuthApi.Provider>
    </div>
    
  );
}

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPageScreen />}/>
      <Route path="/loginPage" element={<ProtectedLogin />}>
        <Route path="/loginPage" element={<LoginScreen />}/>
      </Route>
      <Route path="/mainPage" element={<ProtectedRoute />}>
        <Route path="/mainPage" element={<MainPageScreen />}/>
      </Route>
      <Route path="/peripheralList" element={<ProtectedRoute />}>
        <Route path="/peripheralList" element={<PeripheralsScreen />}/>
      </Route>
      <Route path="/peripheralAdd" element={<ProtectedRoute />}>
        <Route path="/peripheralAdd" element={<AddPeripheralScreen />}/>
      </Route>
      <Route path="/info" element={<ProtectedRoute />}>
        <Route path="/info" element={<PeriInfoScreen />} />
      </Route>
      <Route path="/itemTicket" element={<ProtectedRoute />}>
        <Route path='/itemTicket' element={<GenerateQR />} />
      </Route>
      <Route path="*" element={<RouteNotFound />}/>
    </Routes>
  )
}

const ProtectedRoute = () => {
  const Auth = React.useContext(AuthApi)
  if (Auth.isLoaded) {
    return Auth.auth ? <Outlet /> : <Navigate to="/loginPage" />
  }
}

const ProtectedLogin = () => {
  const Auth = React.useContext(AuthApi)

  return !Auth.auth ? <Outlet /> : <Navigate to="/mainPage" />
}

const RouteNotFound = () => {
  return(
    <div className='routeNotFound'>
      <div>
        <img src="https://myleanacademy.com/wp-content/uploads/2020/01/logo-ibm-png-ibm-logo-png-4464.png" alt="IBM Logo" className='imgIbmNotFound'/>
        <h1>404 NOT FOUND - URL NOT FOUND</h1>
      </div>
    </div>
  )
}

export default App;
