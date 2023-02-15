const redux = require('redux')
const axios = require('axios')
const reduxThunkMiddleware = require('redux-thunk').default

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS'
const FETCH_REQUEST_FAIL = 'FETCH_REQUEST_FAIL'

function fetchRequest() {
  return {
    type: FETCH_REQUEST
  }
}

function fetchRequestSuccess(users) {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: users
  }
}

function fetchRequestFail(error) {
  return {
    type: FETCH_REQUEST_FAIL,
    payload: error
  }
}



const reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case FETCH_REQUEST:
      return {
        loading: true,
      }

    case FETCH_REQUEST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_REQUEST_FAIL:
      return {
        loading: false,
        users: [],
        error: action.payload
      }

    default:
      return state
  }

}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data.map((user) => user.id)
        console.log(users)
        dispatch(fetchRequestSuccess(users))
      })
      .catch((err) => {
        console.log(err)
        dispatch(fetchRequestFail(err.message))
      })
  }
}
const store = redux.createStore(reducer, redux.applyMiddleware(reduxThunkMiddleware))

store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())
