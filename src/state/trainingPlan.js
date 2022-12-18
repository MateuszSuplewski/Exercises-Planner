export const ADD = 'trainingPlan/ADD'
export const REMOVE = 'trainingPlan/REMOVE'
export const SET_EXERCISES_BY_DAY = 'trainingPlan/SET_EXERCISES_BY_DAY'

export const createActionAdd = (exercise, dayOfWeek) => {
  return {
    type: ADD,
    payload: exercise,
    dayOfWeek
  }
}

export const createActionRemove = (exerciseId, dayOfWeek) => {
  return {
    type: REMOVE,
    payload: exerciseId,
    dayOfWeek
  }
}

export const createActionSetExercisesByDay = (dailyExercises, dayOfWeek) => {
  return {
    type: SET_EXERCISES_BY_DAY,
    payload: dailyExercises,
    dayOfWeek
  }
}

export const initialState = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
}

export const reducer = (state = initialState, action) => {
  const { dayOfWeek } = action
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [dayOfWeek]: [...state[dayOfWeek], action.payload]
      }
    case REMOVE:
      return {
        ...state,
        [dayOfWeek]: [...state[dayOfWeek].filter(
          (exercise) => exercise.id !== action.payload.id
        )]
      }
    case SET_EXERCISES_BY_DAY:
      return {
        ...state,
        [dayOfWeek]: [...action.payload]
      }
    default:
      return state
  }
}

export default reducer
