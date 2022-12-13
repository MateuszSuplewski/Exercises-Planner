import React from 'react'
import useExercises from './hooks/useExercises'
import { fetchData } from './api/fetchData'
import { exercisesContext } from '../contexts'

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
                  exercises.map((exercise) => <p key={exercise.id}>{exercise.name}</p>)
                )}
      </div>
    </exercisesContext.Provider>
  )
}

export default App
