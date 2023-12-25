import "./ExpensesItem.css";

let ExpensesItem = (props) =>{
    // console.log(props.Item)
    // const Month = props.Date.toLocaleString('en-us',{month:'long'});
    // const Year = props.Date.getFullYear();
    // const Day = props.Date.toLocaleString('en-us',{day:'2-digit'});
    // console.log('aaa',props)
return(
    <ul className="">

        {
            props.Item.map(
                expenseOne => (
                    <li>
                    <div className="date">
                   {expenseOne.Date.toLocaleString('en-us',{month:'long'})}/
                   {expenseOne.Date.getFullYear()}/
                   {expenseOne.Date.toLocaleString('en-us',{day:'2-digit'})}
                    </div>
                    <div className="name">
                    {expenseOne.Item}
                    </div>
                    <div className="Price"> { expenseOne.Price} INr</div>
                   </li>
                )
                
            )
            
        }

      
       
    </ul>
);
}

export default ExpensesItem;