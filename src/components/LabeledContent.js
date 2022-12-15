import React from 'react'
import PropTypes from 'prop-types'

import { Typography, Chip, Box } from '@mui/material'

const LabeledContent = ({ startContent, labelContent }) => {
  return (
    <Box >
      <Typography sx={{ display: 'inline' }}>
        {startContent}
      </Typography>
      <Chip
        sx={{ ml: 1, fontWeight: '700', letterSpacing: '1px' }}
        color={'success'}
        label={labelContent.toUpperCase()}
      />
    </Box>
  )
}

LabeledContent.propTypes = {
  startContent: PropTypes.string,
  labelContent: PropTypes.string
}

export default LabeledContent
