const store = require('./app/store')
const cakeAction = require('./features/cake/cakeSlice').cakeActions
const icecreamAction = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log('initialState', store.getState())

const unSubscribe = store.subscribe(() => { console.log('initialState', store.getState()) })

store.dispatch(fetchUsers())
// store.dispatch(cakeAction.order_cake())
// store.dispatch(cakeAction.order_cake(4))
// store.dispatch(cakeAction.order_cake())
// store.dispatch(cakeAction.rest_cake(20))


// store.dispatch(icecreamAction.order_icecream())
// store.dispatch(icecreamAction.order_icecream(4))
// store.dispatch(icecreamAction.order_icecream())
// store.dispatch(icecreamAction.rest_icecream(20))

// unSubscribe()

// 24