import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Button, Grid, Stack, Box } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  const { name, bodyPart, target, gifUrl, id } = exercise
  return (
    <Grid
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
            image={gifUrl}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant={'h5'}
              component={'div'}
            >
              {name}
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
                  {bodyPart}
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
                  {target}
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
              to={`/exercise/${id}`}
            >
              Go to exercise
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

ExerciseCard.propTypes = {
  exercise: PropTypes.object
}

export default ExerciseCard
