import { Box } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

export const FullPageLayout = ({ children }) => (
  <Box
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    width={'100vw'}
    height={'100vh'}
  >
    {children}
  </Box>
)

FullPageLayout.propTypes = {
  children: PropTypes.node
}

export default FullPageLayout
