import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@mui/material'
import PropTypes from 'prop-types'

const Select = ({ name, label, value = '', error = null, onChange, options }) => {
  return (
    <FormControl
      variant={'outlined'}
      error={!!error}
      sx={{ minWidth: '200px' }}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
  error: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array
}

export default Select
