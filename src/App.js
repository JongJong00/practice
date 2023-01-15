import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';
import Loginpage from './page/post/Loginpage';
import React, { useState, useEffect } from 'react';
import Nav from './component/table/Nav';

function App() {
  
  const [auth, setAuth] = useState(false);
  useEffect(()=>{
    console.log('로그인인증값', auth);
  }, [auth])

  return (
    <div className="App">
      <BrowserRouter>
      <Nav auth={auth} setAuth={setAuth} />
        <Routes>
        <Route path='/postView/:no' component={PostView} />
        <Route path='/' component={PostMain} />
        <Route path='/Loginpage' element={<Loginpage setAuth={setAuth} />} />
        </Routes>
        
      </BrowserRouter>  
    </div>
  );
}

export default App;
