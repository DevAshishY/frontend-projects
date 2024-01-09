import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Bag from "./components/Bag";
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store.js';
import Home from './components/Home.jsx';


const router = createBrowserRouter([
  {path:'/',element:<App />,children:[
    {
      path:'/', element:<Home />
    },
    {
      path:'/bag',element:<Bag/>
    }
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
 
    <Provider store={store}>
    <RouterProvider router={router}/>
        </Provider>
  
  
  </React.StrictMode>,
)
