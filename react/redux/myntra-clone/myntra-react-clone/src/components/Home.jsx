import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";

const Home = () =>{
   
const data = useSelector((state)=> state.itemsSlice)
console.log(data);
    return(
        <main>
             <div className="items-container">
             {
            data.map((item)=>(
                <HomeItem key={item.id} item={item}/>

            ))
        }
             </div>
        </main>
        
    )
}

export default Home;