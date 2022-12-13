import React from 'react'
import { AppBar, Toolbar, Typography, Container, Badge, IconButton } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import PropTypes from 'prop-types'

export const Navbar = ({ appName }) => {
  return (
    <AppBar position={'sticky'}>
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters>
          <FitnessCenterIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
          <Typography
            variant={'h5'}
            noWrap
            component={'a'}
            href={''}
            sx={{
              mr: 2,
              display: 'flex',
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            {appName}
          </Typography>
          <IconButton>
            <Badge
              badgeContent={20}
              color={'error'}
            >
              <ListAltIcon color={'action'} />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Navbar.propTypes = {
  appName: PropTypes.string
}

export default Navbar
