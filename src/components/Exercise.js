import React, { useContext } from 'react'
import { Grid, Box, Divider, Typography, Stack, Button } from '@mui/material'
import PropTypes from 'prop-types'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import exercisesContext from '../contexts'
import { useParams, useNavigate } from 'react-router-dom'
import LabeledContent from './LabeledContent'

const Exercise = () => {
  const { exercises } = useContext(exercisesContext)
  const { exerciseid } = useParams()
  const navigate = useNavigate()

  const exercise = exercises.find((exercise) => exercise.id === exerciseid)
  const { name, description, gifUrl, equipment, bodyPart, target } = exercise

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Button
          variant={'text'}
          startIcon={<KeyboardReturnIcon />}
          onClick={() => navigate(-1)}
        >
          Return to list
        </Button>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          sx={{ textAlign: { xs: 'center', sm: 'center' } }}
        >
          <Box
            component={'img'}
            src={gifUrl}
            sx={{ width: '100%', maxWidth: '500px' }}
          >
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={7}
        >
          <Stack
            divider={<Divider />}
            spacing={2}
            sx={{ m: 1 }}
          >
            <Typography
              variant={'h4'}
              sx={{ fontWeight: 'bold' }}
            >
              {name}
            </Typography>
            <Typography component={'p'}>{description}</Typography>
            <LabeledContent
              startContent={'Equipment needed'}
              labelContent={equipment}
            />
            <LabeledContent
              startContent={'Trained part of the body'}
              labelContent={bodyPart}
            />
            <LabeledContent
              startContent={'Exercise is focused on muscles'}
              labelContent={target}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

Exercise.propTypes = {
  exercise: PropTypes.object
}

export default Exercise
