import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import exercisesContext from '../contexts'
import Pagination from './Pagination'
import { Typography, Card, CardActions, CardContent, CardMedia, Button, Grid, Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import FullPageLoader from './FullPageLoader'
import FullPageMessage from './FullPageMessage'

export const ListedExercises = () => {
  const { exercises, isLoading, error } = useContext(exercisesContext)
  return (
    <>
      {isLoading
        ? (
          <FullPageLoader/>
          )
        : error
          ? (
            <FullPageMessage
              color={'error.main'}
              variant={'h4'}
            >{error}
            </FullPageMessage>
            )
          : exercises.length === 0
            ? (
              <FullPageMessage
                color={'warning.main'}
                variant={'h4'}
              >No exercises to display
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
                  {exercises.map(exercise => (
                    <Grid
                      key={exercise.id}
                      container
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      xl={3}
                      justifyContent={'center'}
                    >
                      <Grid item>
                        <Card sx={{ maxWidth: 345, m: 1 }}>
                          <CardMedia
                            component={'img'}
                            image={exercise.gifUrl}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant={'h5'}
                              component={'div'}
                            >
                              {exercise.name}
                            </Typography>
                            <Stack
                              direction={'row'}
                              spacing={2}
                              justifyContent={'flex-end'}
                              sx={{ mt: 0.5 }}
                            >
                              <Box
                                sx={{
                                  backgroundColor: 'info.main',
                                  padding: '0.1rem 0.7rem',
                                  borderRadius: '0.3rem'
                                }}
                              >
                                <Typography
                                  variant={'subtitle1'}
                                  color={'ButtonShadow'}
                                >
                                  {exercise.bodyPart}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  backgroundColor: 'info.main',
                                  padding: '0.1rem 0.7rem',
                                  borderRadius: '0.3rem'
                                }}
                              >
                                <Typography
                                  variant={'subtitle1'}
                                  color={'ButtonShadow'}
                                >
                                  {exercise.target}
                                </Typography>
                              </Box>
                            </Stack>
                          </CardContent>
                          <CardActions>
                            <Button
                              sx={{ width: '100%' }}
                              size={'medium'}
                              variant={'outlined'}
                              component={Link}
                              to={`/exercise/${exercise.id}`}
                            >
                              Go to exercise
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Grid>
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
