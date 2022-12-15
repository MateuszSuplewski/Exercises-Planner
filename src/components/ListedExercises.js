import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import exercisesContext from '../contexts'
import Pagination from './Pagination'
import { Grid } from '@mui/material'
import FullPageLoader from './FullPageLoader'
import FullPageMessage from './FullPageMessage'
import ExerciseCard from './ExerciseCard'

export const ListedExercises = () => {
  const { exercises, isLoading, error } = useContext(exercisesContext)
  return (
    <>
      {isLoading
        ? (
          <FullPageLoader />
          )
        : error
          ? (
            <FullPageMessage
              color={'error.main'}
              variant={'h4'}
            >
              {error}
            </FullPageMessage>
            )
          : exercises.length === 0
            ? (
              <FullPageMessage
                color={'warning.main'}
                variant={'h4'}
              >
                No exercises to display
              </FullPageMessage>
              )
            : (
              <Grid
                container
                spacing={4}
                sx={{ mt: 2 }}
              >
                <Pagination
                  limit={12}
                  path={'/page'}
                >
                  {exercises.map((exercise) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise}
                    />
                  ))}
                </Pagination>
              </Grid>
              )}
    </>
  )
}

ListedExercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object)
}

export default ListedExercises
