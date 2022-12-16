import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Page404 from './components/Page404'
import ExercisePage from './pages/ExercisePage'
import ExercisesListPage from './pages/ExercisesListPage'
import { actionCreators } from './state/getExercises'
import { useDispatch } from 'react-redux'

export const App = () => {
  const storeDispatch = useDispatch()

  useEffect(() => {
    storeDispatch(actionCreators.getExercises())
  }, [])

  return (
    <Routes>
      <Route
        path={'/'}
        element={<ExercisesListPage />}
      />
      <Route
        path={'/exercise/:exerciseid'}
        element={<ExercisePage/>}
      />
      <Route
        path={'/page/:page'}
        element={<ExercisesListPage/>}
      />
      <Route
        path={'*'}
        element={<Page404 />}
      />
    </Routes>
  )
}

export default App
