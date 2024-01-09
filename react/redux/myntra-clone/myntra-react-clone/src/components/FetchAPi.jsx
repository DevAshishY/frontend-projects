import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsSliceAction } from "../redux/itemsSlice";
import { fetchStatusActions } from "../redux/fetchStatusSlice";


const FetchApi = () => {
    const fetchStatus = useSelector((state) => state.fetchStatus)
    const dispatch = useDispatch()
 

 
    useEffect(() => {
         if (fetchStatus.apiLoaded) return;


        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusActions.loderStart());
       fetch('http://localhost:8080/items')
       .then((res)=> res.json())
       .then((res)=>{
        const {items} = res

        dispatch(fetchStatusActions.isAPiLoad());
        dispatch(fetchStatusActions.loaderEnd());

        dispatch(itemsSliceAction.getItems(items[0]))
       })
         return () => {
      controller.abort();
    };
    }, [fetchStatus])
}


export default FetchApi;
