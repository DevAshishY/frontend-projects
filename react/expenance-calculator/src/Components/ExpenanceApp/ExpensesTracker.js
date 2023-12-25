import "./ExpensesTracker.css";
import ExpensesItem from "./ExpensesItem";
import AddItem from "./addItem/AddItem";
import { useState } from "react";

let dummyExpence = [
    {
        Date: new Date(2022,5,10),
        Item:"Mobile",
        Price:100
    },
    
];

let ExpensesTracker = () =>{
const [expencessOld,expencessUpdate] = useState(dummyExpence)
  let   sendFunctionChild = (receiveData) =>{
   
    const receivedOject = {
        ...receiveData,
        id:Math.random().toString(),
    }
    let updatedArray = [receivedOject,...expencessOld];
    expencessUpdate(updatedArray)
    console.log(updatedArray)
  }

    
return (
    <div>

    <AddItem PropetyForSend={sendFunctionChild}/>
    <div className="wrapperExpensessCover">
        <ExpensesItem
      
        Item={expencessOld}
        
        />
    </div>
    </div>
)

}
export default ExpensesTracker;