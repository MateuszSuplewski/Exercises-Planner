import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page404 from './components/Page404'
import ExercisePage from './pages/ExercisePage'
import ExercisesListPage from './pages/ExercisesListPage'

export const App = () => {
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
