import './App.css';
import PrimaryNavBar from './components/PrimaryNavBar';
import NavBar from './components/NavBar.js';
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js';
import HOTAccessoriesMenu from './components/HOTAccessoriesMenu.js';
import HotAccessories from './components/hotAccessories.js'; 
import ProductReviews from './components/ProductReviews.js'; 
import Videos from './components/Videos.js'; 
import Banner from './components/Banner.js'; 
import Footer from './components/Footer.js'; 
import NavOptions from './components/NavOptions.js'; 

import {  BrowserRouter as Router,Route,Routes } from "react-router-dom"
import data from "./data/data.json";


function App() {

  return (
    <Router>
   <PrimaryNavBar/>
   <NavBar logo={data.logo}/>

<NavOptions 
miPhones={data.miPhones}
redmiPhones={data.redmiPhones}
tv={data.tv}
laptop={data.laptop}
fitnessAndLifeStyle={data.fitnessAndLifeStyle}
home={data.home}
audio={data.audio}
accessories={data.accessories}
       />

   <Slider start={data.banner.start} />
   <Offers offer={data.offer}/>
   <Heading text="Start Product " />
   <StarProduct starProduct={data.starProduct}></StarProduct>
   <Heading text="HOT Accessories" />
   <HOTAccessoriesMenu/>
   <Routes>

   <Route exact path="/music" element={
   <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}
   />

<Route exact path="/smartDevice" element={
   <HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />}
   />

<Route exact path="/home" element={
   <HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />}
   />
   
   <Route exact path="/lifestyle" element={
   <HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />}
   />
   <Route exact path="/mobileAccessories" element={
   <HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />}
   />


</Routes>
<Heading text="PRODUCT REVIEWS" />

<ProductReviews productReviews={data.productReviews}/>

<Heading text="VIDEOS" />

<Videos video={data.videos}/>
  
<Heading text="IN THE PRESS" />

<Banner end={data.banner.end}/>
<Footer footer={data.footer}/>
   
   </Router>
  );
}


export default App;
