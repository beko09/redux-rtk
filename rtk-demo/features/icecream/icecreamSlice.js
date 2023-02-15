const rtk = require('@reduxjs/toolkit')
const { cakeActions } = require('../cake/cakeSlice')
const initialState = {
  numOficecreams: 10
}

//  slice accept some args like [name - initialState - reducer - extraReducer]
const icecreamSlice = rtk.createSlice({
  name: 'icecream',
  initialState,
  //  her rtk generate by default action type & action creators
  reducers: {
    order_icecream: (state, action) => { 
      action.payload = 3
      //  you can mutate state normal not need pkg immer to handle complex state
      state.numOficecreams -= action.payload
    },
    rest_icecream: (state, action) => {
      state.numOficecreams += action.payload
    }
  },

  //  this method is deprecated
  // extraReducers: {
  //   ['cake/order_cake']: (state) => {
  //     state.numOficecreams--
  //   }
  // }

  //  new method in rtk
  extraReducers: (builder) => {
    builder.addCase(cakeActions.order_cake, state => {
      state.numOficecreams--
    })
  }

})


//  export reducer & action
module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions

