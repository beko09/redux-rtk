const rtk = require('@reduxjs/toolkit')
// const rtkLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')
const store = rtk.configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  // logger middleware tel you what update in state
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkLogger.createLogger()),
})

module.exports = store