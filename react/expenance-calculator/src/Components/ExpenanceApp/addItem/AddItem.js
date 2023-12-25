import React, { useState } from 'react'
import './AddItem.css';
const AddItem = (props) => {

const [enterDate,SetEnterDate] = useState('');
const [enterTitle,SetEnterTitle] = useState('');
const [enterPrice,SetEnterPrice] = useState('');


    let AddDateData = (e) =>{
        SetEnterDate(e.target.value)
    }
    let AddItemData = (e) =>{
        SetEnterTitle(e.target.value)
    }
    let AddPrice = (e) =>{
        SetEnterPrice(e.target.value)
    }

    let submitData = (event) =>{
   event.preventDefault();
   const FormDateObj = {
    Date:new Date(enterDate),
    Item:enterTitle,
    Price:enterPrice
   }
   console.log(FormDateObj)
   props.PropetyForSend(FormDateObj)

   SetEnterDate('');
   SetEnterTitle('');
   SetEnterPrice('');
    }
  return (
    <div>
        <form onSubmit={submitData}>
            <ul>
                <li>
                    <input type="date" placeholder='date' onChange={AddDateData} value={enterDate}></input>
                </li>
                <li>
                    <input type="text" placeholder='item' onChange={AddItemData} value={enterTitle}></input>
                </li>
                <li>
                    <input type="text" placeholder='price' onChange={AddPrice} value={enterPrice}></input>
                </li>
                <li>
                    <input type="submit"></input>
                </li>
            </ul>
        </form>
    </div>
  )
}

export default AddItem