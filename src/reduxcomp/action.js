import { AddToCart } from "./constant";
export const addToCart=(data)=>{
    console.warn("action called",data);
    return {
        type:AddToCart,
        data
    }
}