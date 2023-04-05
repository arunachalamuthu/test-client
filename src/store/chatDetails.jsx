import { createSlice } from '@reduxjs/toolkit'

const details= createSlice({
name:'user',
ID:'',
mycode:'',
Friendcode:'',
username:'',
initialState:{
  name:'details',
  itemsList: [],
},
reducers:{
    add(state,action) {
        const name=action.payload
        alert(name.name)
        const existing = state.itemsList.find((item) => item.name == name) 
        if (existing) {
            
        }
        else {
         
            // state.itemsList.push({
            //     name:name
            // })
         state.ID=name.name
         state.mycode=name.mycode
         state.Friendcode=name.Friendcode
        }
    },
    home(state,action){
        
        const name=action.payload
        alert(name)
            state.username=name
    }
}
})

export const detailsAction=details.actions

export default details;