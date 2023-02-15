const rtk = require('@reduxjs/toolkit')

const initialState = {
  numOfCakes: 10
}

//  slice accept some args like [name - initialState - reducer - extraReducer]
const cakeSlice = rtk.createSlice({
  name: 'cake',
  initialState,
  //  her rtk generate by default action type & action creators
  reducers: {
    order_cake: (state, action) => {
      //  default value when no value 
      action.payload = 3
      //  you can mutate state normal not need pkg immer to handle complex state
      state.numOfCakes -= action.payload
    },
    rest_cake: (state, action) => {
      state.numOfCakes += action.payload
    }
  }

})


//  export reducer & action
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions

