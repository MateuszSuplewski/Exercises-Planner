import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from './api/fetchData'
import dataPlaceholder from './data/dataPlaceholder'

export const App = () => {
  const [exercisesData, setExercisesData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const exercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        const exercisesWithDescription = exercises && exercises.map(exercise => ({ ...exercise, description: dataPlaceholder }))
        setExercisesData(exercisesWithDescription)
      } catch (error) {
        setError(error.message)
      }
    })()
  }, [])

  return (
    <div>
      {
        exercisesData.map((exercise) => <p key={exercise.id}>{exercise.name}</p>)
      }
      <p>{error}</p>
    </div>
  )
}

export default App
