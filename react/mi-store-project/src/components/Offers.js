import React from 'react';
import Offer from './Offer.js';

import '../styles/Offers.css';

const Offers = ({offer}) => {
  return (
    <div>
      <div className="offersSection"> 
        {offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    </div>
  )
}

export default Offers
