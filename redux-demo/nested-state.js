//  How redux work in js

const redux = require("redux")
const produce = require("immer").produce



const initialState = {
  name: 'beko',
  address: {
    street: '122 test',
    city: 'kenana',
    state: 'su'
  }
}

const STREET_UPDATED = 'STREET_UPDATED'

function updateStreet(street) {
  return {
    type: STREET_UPDATED,
    payload: street
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case STREET_UPDATED:
      //  old method
      // return {
      // ...state,
      // //  hard to handle nested state bu using sprite state
      // address: {
      //   ...state.address,
      //   street: action.payload
      // }
      // }

      //  new  method using immer produce to update state direct muted
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })

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
store.dispatch(updateStreet("old test"))

//  unsubscribe to register listener
unsubscribe()