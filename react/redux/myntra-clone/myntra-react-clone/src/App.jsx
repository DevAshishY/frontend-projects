
import { useSelector } from "react-redux";
import FetchApi from "./components/FetchAPi";
import Footer from "./components/Footer"
import Header from "./components/Header"

import {Outlet} from 'react-router-dom';


function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
     <FetchApi/>
     {fetchStatus.apiFetchRequest ? <h2>loading</h2> : <Outlet />}
         
         
      
      <Footer />
    </>
  )
}

export default App
