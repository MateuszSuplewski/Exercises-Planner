import { useEffect, useState } from 'react'
import exerciseDescriptionPH from '../data/exerciseDescriptionPH'

const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

const useExercises = (fetchFn) => {
  const [exercises, setExercises] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const exercises = await fetchFn(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        )
        const exercisesWithDescription = exercises.map((exercise) => ({
          ...exercise,
          description: exerciseDescriptionPH
        }))
        setExercises(exercisesWithDescription)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [exercises, isLoading, error]
}

export default useExercises
