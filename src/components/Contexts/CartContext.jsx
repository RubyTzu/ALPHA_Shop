import { createContext } from 'react'

//Cart Context
export const CartContext = createContext([
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  }
]);

//set Card Context 
export const SetCardContext = createContext({
  cartItem: [
     {
       id: "1",
       name: "貓咪罐罐",
       img: "https://picsum.photos/300/300?text=1",
       price: 100,
       quantity: 2,
     },
     {
       id: "2",
       name: "貓咪干干",
       img: "https://picsum.photos/300/300?text=2",
       price: 200,
       quantity: 1,
     },
   ],
  setCardItem: () => {},
});
