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
      //TODO:INSERT ERROR ELEMENT
      //errorElement:<INSERTERRORELEMENT/>
      // children:[
      //   {
      //     path:"events",
      //     children: [
      //       {
      //         index:true,
      //         element:<Gevents/>,
      //         loader: async () => {
      //           return await loaderGeventsPage();
      //         }
      //       },
      //       {
      //         path: ":name",
      //         element: <Gevent/>,
      //         loader: async ({params}) => {
      //           return await loaderGeventPage(params.name)
      //         }
      //       },
      //       {
      //         path: ":name/play",
      //         element:<Game/>,
      //         loader: async ({params}) => {
      //           return await loaderGamePage(params.name)
      //         }
      //       }
      //     ],
      //   },
      // ]
    },
  ]);
  
  return (
    <PopUpContext.Provider value={[popup, setPopup]}>
      <RouterProvider router={router}/>
    </PopUpContext.Provider>
  )
}


export default App;