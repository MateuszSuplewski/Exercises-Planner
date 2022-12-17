import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Select from './Select'
import { Stack, Button } from '@mui/material'
import validateForm from '../helpers/validateForm'
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { createActionAdd } from '../state/cart'
import { v4 as uuidv4 } from 'uuid'

const ExerciseForm = ({ exerciseName, fields }) => {
  const data = {
    select: Select,
    input: Input,
    number: Input,
    date: Input
  }

  const initialState = {
    weight: '',
    sets: '',
    repetitions: ''
  }

  const storeDispatch = useDispatch()
  const { values, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialState)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const foundedErrors = validateForm(fields, values)

    if (Object.keys(foundedErrors).length !== 0) {
      setErrors(foundedErrors)
      return
    }

    const exercise = { ...values, name: exerciseName, id: uuidv4() }
    storeDispatch(createActionAdd(exercise))
    resetForm()
  }

  return (
    <form
      style={{ maxWidth: '420px', padding: '1rem' }}
      onSubmit={handleFormSubmit}
    >
      <Stack spacing={2}>
        {fields.map((field, index) => {
          const FieldComponent = data[field.type]
          return (
            <FieldComponent
              key={index}
              {...field}
              value={values[field.name]}
              onChange={handleInputChange}
              error={errors[field.name]}
            />
          )
        })}
      </Stack>
      <Button
        variant={'contained'}
        sx={{ mt: 0.75 }}
        size={'large'}
        fullWidth
        type={'submit'}
      >
        ADD EXERCISE
      </Button>
    </form>
  )
}

ExerciseForm.propTypes = {
  exerciseName: PropTypes.string,
  fields: PropTypes.array
}

export default ExerciseForm
