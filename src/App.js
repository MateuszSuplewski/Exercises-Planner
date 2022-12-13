import React from 'react'
import useExercises from './hooks/useExercises'
import { fetchData } from './api/fetchData'
import exercisesContext from './contexts'

import Navbar from './components/Navbar'
import ListedExercises from './components/ListedExercises'

export const App = () => {
  const [exercises, isLoading, error] = useExercises(fetchData)

  return (
    <exercisesContext.Provider value={exercises}>
      <div>
        {isLoading
          ? (
            <p>Loading...</p>
            )
          : error
            ? (
              <p>{error}</p>
              )
            : exercises.length === 0
              ? (
                <p>No exercises to display</p>
                )
              : (
                <>
                  <Navbar appName={'Fit Planner'}/>
                  <ListedExercises exercises={exercises}/>
                </>
                )}
      </div>
    </exercisesContext.Provider>
  )
}

export default App
