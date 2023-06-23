import './App.css';
import Loader from './Loader';
import GramCard from './GramCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './LoginContext';
import SignUp from './SignUp';


function App() {

  
  const [user, setUser] = useState();

  const handleLogout = () => {
    setUser();
  }

  return (
    <LoginContext.Provider value={{user, handleLogout}} >
      <div>
          {
            user?
            <GramCard loginUser={user} handleLogout={handleLogout} /> :
            <div className='loginBody'>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Login setUser={setUser} />}></Route>
                  <Route path='/signup' element={<SignUp />}></Route>
                </Routes>
              </BrowserRouter>
            </div>
          }
      </div>
    </LoginContext.Provider>
  );
}

export default App;
