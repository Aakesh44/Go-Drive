import {createSlice} from '@reduxjs/toolkit'

export const carOrder= createSlice({
    name:'carOrder',
    initialState:
        {value:{
                vehicle:'car',
                pickUpDate:'no',
                pickUpPlace:'no',
                dropOfDate:'no',
                dropOfPlace:'no',
                link:'no',
                type:'no',
                rent:'no',
                model:'no',
                year:'no',
                ac:'no',
                fuel:'no',
                order:false
                }},
        reducers:{
            Order:(state,action)=>{
                state.value = action.payload
            }
        }
});
export const {Order}=carOrder.actions
export default carOrder.reducer