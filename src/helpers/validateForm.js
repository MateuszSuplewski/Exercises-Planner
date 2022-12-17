const validateForm = (fields, state) => {
  const errors = {}

  fields.forEach(({ required, name, label, error, pattern }) => {
    if (required && state[name].length === 0) { errors[name] = `${label} is required` }
    if (pattern) {
      if (!pattern.test(state[name]) && state[name]) errors[name] = error
    }
  })

  return errors
}

export default validateForm
