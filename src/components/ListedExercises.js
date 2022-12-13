import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Button, Grid, Stack, Box } from '@mui/material'
import PropTypes from 'prop-types'

export const ListedExercises = ({ exercises }) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ mt: 2 }}
    >
      {exercises.map((exercise) => {
        return (
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            justifyContent={'center'}
            key={exercise.id}
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
                  >
                    Go to exercise
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

ListedExercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object)
}

export default ListedExercises
