import React from 'react'
import PropTypes from 'prop-types'
import Pagination from './Pagination'
import { Grid } from '@mui/material'
import FullPageLoader from './FullPageLoader'
import FullPageMessage from './FullPageMessage'
import ExerciseCard from './ExerciseCard'
import { useSelector } from 'react-redux'
import { selector } from '../state/getExercises'

export const ListedExercises = () => {
  const exercisesState = useSelector(selector)
  const { value, loading, error } = exercisesState

  return (
    <>
      {loading
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
          : value && value.length === 0
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
                  {value && value.map((exercise) => (
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
