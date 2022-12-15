import React from 'react'
import useExercises from './hooks/useExercises'
import { fetchData } from './api/fetchData'
import exercisesContext from './contexts'
import ListedExercises from './components/ListedExercises'
import { Routes, Route } from 'react-router-dom'
import Exercise from './components/Exercise'
import Page404 from './components/Page404'

export const App = () => {
  const [exercises, isLoading, error] = useExercises(fetchData)

  return (
    <exercisesContext.Provider value={{ exercises, isLoading, error }}>
      <Routes>
        <Route
          path={'/'}
          element={<ListedExercises />}
        />
        <Route
          path={'/exercise/:exerciseid'}
          element={<Exercise/>}
        />
        <Route
          path={'/page/:page'}
          element={<ListedExercises/>}
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
