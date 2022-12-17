import React from 'react'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'

const Input = ({ name, label, value = '', type, error = null, onChange }) => {
  return (
    <TextField
      sx={{ minWidth: '200px' }}
      variant={'outlined'}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error || ''}
      type={type}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
  type: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
