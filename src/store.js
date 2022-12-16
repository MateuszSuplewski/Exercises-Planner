import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import cartReducer from './state/cart'
import trainingPlanReducer from './state/trainingPlan'
import getExercisesReducer from './state/getExercises'

const LOCAL_STORAGE_KEY = 'FitPlanner'
const preloadedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined

const rootReducer = combineReducers({
  cart: cartReducer,
  trainingPlan: trainingPlanReducer,
  getExercises: getExercisesReducer
})

const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  const state = store.getState()
  const { cart, trainingPlan } = state
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ cart, trainingPlan }))
})

export default store
