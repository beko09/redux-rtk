//  How redux work in js

const redux = require("redux")


// action type
const ORDER_CAKE = "ORDER_CAKE"
const CAKE_REST = "CAKE_REST"


//  action creator return action obj
function order_cake(q = 1) {
  return {
    type: ORDER_CAKE,
    q //payload
  }
}

function cake_rest(q) {
  return {
    type: CAKE_REST,
    payload: q
  }
}

//  initialState
const initialState = {
  numOfCake: 10
}

//  reducer 
//  reducer detriment how state change depend on action
const reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.q
      }
    case CAKE_REST:
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload
      }
    default:
      return state
  }
}


const store = redux.createStore(reducer) // old method
// const store = redux.configureStore(reducer) // from redux toolkit

//  allow to get state
//  in react ===> useSelector()
console.log("initialState", store.getState())

const unsubscribe = store.subscribe(
  //  register listener and return update in state
  () => console.log("update State", store.getState())
)

//  change state only by dispatch method
//  in react ===> useDispatch()
store.dispatch(order_cake())
store.dispatch(order_cake())
store.dispatch(order_cake(3))
store.dispatch(cake_rest(5))

//  unsubscribe to register listener
unsubscribe()