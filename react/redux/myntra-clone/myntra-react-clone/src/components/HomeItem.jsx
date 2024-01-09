import { useDispatch,useSelector } from "react-redux";
import { cartsActions } from "../redux/cart";

const HomeItem = ({item}) => {
 const checkItem = useSelector((state)=> state.carts)

    const dispatch = useDispatch()
    function addTObag(){
   dispatch(cartsActions.addTocart(item.id))
    }
    function removeTObag(){
   dispatch(cartsActions.removeToCart(item.id))
    }

 const  elementFound = checkItem.indexOf(item.id) >= 0

    return (
       
       
            
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                {/* <div className="rating">{item.rating.stars} ⭐ | {item.rating.count}
                </div> */}
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                 </div>
                {
                    elementFound ? <button className="btn-add-bag btn-remove-bag" onClick={()=>removeTObag(item.id)}>remove to Bag</button>  :
                    <button className="btn-add-bag" onClick={()=> addTObag()}>Add to Bag</button>
                    
                }
                
            </div>
          
           
        
    )
}

export default HomeItem;