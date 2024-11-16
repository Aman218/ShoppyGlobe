import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
       addItem:(state,action)=>{
          let item=state.items.find((item)=>item.id==action.payload.id);
          const data={...action.payload,quantity:1};
          if(!item){
            state.items.push(data);
          }
          else{
            item.quantity++;
          }
       },
     incrementItem:(state,action)=>{
        let item=state.items.find((item)=>item.id==action.payload.id);
        if(item){
            item.quantity++;
        }
     },
     decrementItem:(state,action)=>{
        console.log('Action',action)
        let item=state.items.find((item)=>item.id==action.payload.id);
        console.log('item',item)
        item.quantity--;
        if(item.quantity==0){
              let newItem=state.items.filter((item)=>{
                if(item.id!=action.payload.id){
                    return true;
                }
              })
              state.items=newItem;
        }
     }
    }
})

export const {addItem,incrementItem,decrementItem}=cartSlice.actions;

export default cartSlice.reducer;