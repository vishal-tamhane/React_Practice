import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import {Header,Footer} from "./components/index"
import { Outlet } from 'react-router-dom'

function App() {
  const [loading ,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.currentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login(userData));
      }
      else{
        dispatch(logout());
      }
    })
    
    .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ?(
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
         <div className='w-full block'>
           <Header />
           <main>
            {/* TODo{outlet} */}
           </main>
           <Footer />
         </div>
      </div>
    ): null

  
}

export default App
