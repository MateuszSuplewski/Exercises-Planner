import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Select from './Select'
import { Stack, Button } from '@mui/material'
import validateForm from '../helpers/validateForm'
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { createActionAdd } from '../state/trainingPlan'
import { createActionRemove } from '../state/cart'

const CartForm = ({ exercise, fields }) => {
  const data = {
    select: Select,
    input: Input,
    number: Input,
    date: Input
  }

  const initialState = {
    dayOfWeek: ''
  }

  const storeDispatch = useDispatch()
  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(initialState)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const foundedErrors = validateForm(fields, values)

    if (Object.keys(foundedErrors).length !== 0) {
      setErrors(foundedErrors)
      return
    }

    storeDispatch(createActionAdd(exercise, values.dayOfWeek.toLowerCase()))
    storeDispatch(createActionRemove(exercise.id))
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
              variant={'standard'}
            />
          )
        })}
      </Stack>
      <Button
        variant={'contained'}
        sx={{ mt: 0.75 }}
        size={'small'}
        fullWidth
        type={'submit'}
      >
        ADD TO PLAN
      </Button>
    </form>
  )
}

CartForm.propTypes = {
  exercise: PropTypes.object,
  fields: PropTypes.array
}

export default CartForm
