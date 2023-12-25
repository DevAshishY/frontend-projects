import React,{useState,useEffect} from 'react';
import NavCard from '../components/NavCard.js';
import '../styles/NavOptions.css';

const NavOptions = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

const [miPhoneToggle, setMiPhoneToggle] = useState(false);
const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
const [tvToggle, settvToggle] = useState(false);
const [laptopToggle, setlaptopToggle] = useState(false);
const [fitnessAndLifeStyleToggle, setfitnessAndLifeStyleToggle] = useState(false);
const [homeToggle, sethomeToggle] = useState(false);
const [audioToggle, setaudioToggle] = useState(false);
const [accessoriesToggle, setaccessoriesToggle] = useState(false);


useEffect(() => {
  if(window.location.pathname === "/miphones"){
    setMiPhoneToggle(true);
  }
  if(window.location.pathname === "/redmiphones"){
    setredmiPhonesToggle(true);
  }
  if(window.location.pathname === "/tv"){
    settvToggle(true);
  }
  if(window.location.pathname === "/laptops"){
    setlaptopToggle(true);
  }
  if(window.location.pathname === "/lifestyle"){
    setfitnessAndLifeStyleToggle(true);
  }
  if(window.location.pathname === "/home"){
    sethomeToggle(true);
  }
  if(window.location.pathname === "/audio"){
    setaudioToggle(true);
  }
  if(window.location.pathname === "/accessories"){
    setaccessoriesToggle(true);
  }

}, [])


  return (
    <div className='navOptions'>
        {miPhoneToggle? miPhones.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}

        {redmiPhonesToggle? redmiPhones.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
      
        {tvToggle? tv.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
      
        {laptopToggle? laptop.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
      
        {fitnessAndLifeStyleToggle? fitnessAndLifeStyle.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
      
        {homeToggle? home.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
      
        {audioToggle? audio.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
      
        {accessoriesToggle? accessories.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
      
    </div>
  )
}

export default NavOptions
