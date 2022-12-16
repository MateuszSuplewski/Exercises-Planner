import { createAsyncDuck } from '../helpers/createAsyncDuck'
import ExercisesAPI from '../api/exercisesProvider'

const api = new ExercisesAPI('https://exercisedb.p.rapidapi.com', process.env.REACT_APP_API_KEY)

export const { actionTypes, actionCreators, reducer, selector } = createAsyncDuck('getExercises', api.getExercises)

export default reducer
