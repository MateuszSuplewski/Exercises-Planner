import React from 'react'
import useExercises from './hooks/useExercises'
import { fetchData } from './api/fetchData'
import exercisesContext from './contexts'
import { Routes, Route } from 'react-router-dom'
import Page404 from './components/Page404'
import ExercisePage from './pages/ExercisePage'
import ExercisesListPage from './pages/ExercisesListPage'

export const App = () => {
  const [exercises, isLoading, error] = useExercises(fetchData)

  return (
    <exercisesContext.Provider value={{ exercises, isLoading, error }}>
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
    </exercisesContext.Provider>
  )
}

export default App
