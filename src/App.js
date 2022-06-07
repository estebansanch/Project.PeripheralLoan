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
import IBMLogo from './assets/img/ibm_logo.png';

import AuthApi from './AuthApi';
import jsCookie from 'js-cookie';

import MainPageScreen from './screens/MainPageScreen';
import PeripheralsScreen from './screens/PeripheralsScreen';
import AddPeripheralScreen from './screens/AddPeripheralScreen';
import PeriInfoScreen from './screens/PeriInfoScreen';
import GenerateQR from './screens/GenerateQR';
import ReaderQR from './screens/ReadQR';
import RequestScreen from './screens/RequestScreen';
import UserCreateScreen from './screens/UserCreateScreen';
import UserListScreen from './screens/UserListScreen';
import MyPeripheralsScreen from './screens/MyPeripheralsScreen';
import EditUserScreen from './screens/EditUserScreen';

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

const role = jsCookie.get("role");

const Routing = () => {
  
  function allAccess(){
    return (
      <>
        {/* <Route exact path="/" element={<LandingPageScreen />}/> */}
        <Route path="/" element={<ProtectedLogin />}>
          <Route path="/" element={<LoginScreen />}/>
        </Route>
        <Route path="/mainPage" element={<ProtectedRoute />}>
          <Route path="/mainPage" element={<MainPageScreen />}/>
        </Route>
        <Route path="/myPeripherals" element={<ProtectedRoute />}>
          <Route path="/myPeripherals" element={<MyPeripheralsScreen />}/>
        </Route> 
      </>
    )
  }

  function allButNorm(){
    if (role !== '1'){
    return(
        <Route path="/info" element={<ProtectedRoute />}>
          <Route path="/info" element={<PeriInfoScreen />} />
        </Route>
      )
    }
    else{
      return(
        <Route path="/info" element={<ProtectedRoute />}>
          <Route path="/info" element={<AccessDenied />} />
        </Route>
      )
    }
  }


  function adminsNfocals(){
    if (role === '4' || role === '2'){
      return(
        <>
        <Route path="/peripheralAdd" element={<ProtectedRoute />}>
          <Route path="/peripheralAdd" element={<AddPeripheralScreen />}/>
        </Route>
        <Route path="/peripheralList" element={<ProtectedRoute />}>
          <Route path="/peripheralList" element={<PeripheralsScreen />}/>
        </Route>
        </>
      )
    }
    else{
      return(
        <>
        <Route path="/peripheralAdd" element={<ProtectedRoute />}>
          <Route path="/peripheralAdd" element={<AccessDenied />}/>
        </Route>
        <Route path="/peripheralList" element={<ProtectedRoute />}>
          <Route path="/peripheralList" element={<AccessDenied />}/>
        </Route>
        </>
      )
    }    
  }

  function adminNsecurity(){
    if (role === '4' || role === '3'){
      return(
        <>
          {/* <Route path="/itemTicket" element={<ProtectedRoute />}>
            <Route path='/itemTicket' element={<GenerateQR />} />
          </Route> */}
          <Route path="/ticketReader" element={<ProtectedRoute />}>
            <Route path='/ticketReader' element={<ReaderQR />} />
          </Route>
          <Route path="/requestScreen" element={<ProtectedRoute />}>
            <Route path="/requestScreen" element={<RequestScreen />}/>
          </Route>
        </>
      )
    }
    else{
      return(
        <>
          <Route path="/peripheralAdd" element={<ProtectedRoute />}>
            <Route path="/peripheralAdd" element={<AccessDenied />}/>
          </Route>
          {/* <Route path="/itemTicket" element={<ProtectedRoute />}>
            <Route path='/itemTicket' element={<AccessDenied />} />
          </Route> */}
          <Route path="/ticketReader" element={<ProtectedRoute />}>
            <Route path='/ticketReader' element={<AccessDenied />} />
          </Route>
          <Route path="/requestScreen" element={<ProtectedRoute />}>
            <Route path="/requestScreen" element={<AccessDenied />}/>
          </Route>
        </>
      )
    }
  }

  function adminOnly(){
    if (role === '4'){
      return(
        <>
          <Route path="/userCreate" element={<ProtectedRoute />}>
            <Route path='/userCreate' element={<UserCreateScreen />} />
          </Route>
          <Route path="/userList" element={<ProtectedRoute />}>
            <Route path='/userList' element={<UserListScreen />} />
          </Route>
          <Route path="/editUser" element={<ProtectedRoute />}>
            <Route path='/editUser' element={<EditUserScreen />} />
          </Route>
        </>
      )
    }
    else{
      return(
        <>
          <Route path="/userCreate" element={<ProtectedRoute />}>
            <Route path='/userCreate' element={<AccessDenied />} />
          </Route>
          <Route path="/userList" element={<ProtectedRoute />}>
            <Route path='/userList' element={<AccessDenied />} />
          </Route>
          <Route path="/editUser" element={<ProtectedRoute />}>
            <Route path='/editUser' element={<AccessDenied />} />
          </Route>
        </>
      )
    }
  }

  return (
    <Routes>
      {allAccess()}
      {allButNorm()}
      {adminsNfocals()}
      {adminNsecurity()}
      {adminOnly()}    
      <Route path="*" element={<RouteNotFound />}/>
    </Routes>
  )
}

const ProtectedRoute = () => {
  const Auth = React.useContext(AuthApi)
  if (Auth.isLoaded) {
    return Auth.auth ? <Outlet /> : <Navigate to="/" />
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
        <img src={IBMLogo} alt="IBM Logo" className='imgIbmNotFound'/>
        <h1>404 NOT FOUND - URL NOT FOUND</h1>
      </div>
    </div>
  )
}

const AccessDenied = () => {
  return(
    <div className='routeNotFound'>
      <div>
        <img src={IBMLogo} alt="IBM Logo" className='imgIbmNotFound'/>
        <h1>403 - FORBIDDEN ACCESS</h1>
      </div>
    </div>
  )
}

export default App;
