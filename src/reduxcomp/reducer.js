import { AddToCart, RemoveToCart } from "./constant";

export const cartData=(data=[],action)=>{
    // if (action.type === 'AddToCart') {
    //     console.warn("reducer called",action);
    //     return action.data;
        
    // } else {
    //     return "No action matched"
        
    // }

    switch(action.type) {
        case AddToCart:
            //addtocartlogic
            console.warn("Reducer",action);
            return [action.data,...data];        
        default:
         //no case matched
         return data;
            

   

}}