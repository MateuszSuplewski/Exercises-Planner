import { useState } from 'react'

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  const resetForm = () => {
    setValues(initialState)
    setErrors({})
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
}

export default useForm
