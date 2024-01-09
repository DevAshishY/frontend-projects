import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";


const Bag=()=>{
  const mainItemList = useSelector((state)=>state.itemsSlice)
  const cardIdes = useSelector((state)=>state.carts)

const filteredItems = mainItemList.filter(item => cardIdes.includes(item.id));

    return(
        <>
   
    <main>
      <div class="bag-page">
        <div class="bag-items-container">
          {
            filteredItems.map((item)=>(
              <BagItem item={item}/>

            ))
          }
        </div>
        <BagSummary/>
         

      </div>
    </main>


        </>
    )
}
export default Bag;
