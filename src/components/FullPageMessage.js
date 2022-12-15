import React from 'react'
import PropTypes from 'prop-types'
import FullPageLayout from './FullPageLayout'
import { Typography } from '@mui/material'

const FullPageMessage = ({ color, variant, children }) => (
  <FullPageLayout >
    <Typography
      color={color}
      variant={variant}
    >
      {children}
    </Typography>
  </FullPageLayout>
)

FullPageMessage.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node
}

export default FullPageMessage
