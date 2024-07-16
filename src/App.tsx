import React, { useContext, useEffect, useState } from 'react';
import { I_PopupContext, PopUpContext } from './store/context';

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './Page/Root';
import './App.module.css';


function App() {
  const [popup, setPopup] = useState<I_PopupContext>({message:null});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
  ]);
  
  return (
    <PopUpContext.Provider value={[popup, setPopup]}>
      <RouterProvider router={router}/>
    </PopUpContext.Provider>
  )
}


export default App;