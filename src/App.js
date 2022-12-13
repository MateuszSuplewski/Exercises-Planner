import React from 'react'
import { AppBar, Toolbar, Typography, Container, Badge, IconButton, Card, CardActions, CardContent, CardMedia, Button, Grid, Stack, Box } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import doomyData from './doomyData'

export const App = () => {
  return (
    <>
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
                display: { xs: 'flex' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Fit Planner
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
      <Grid
        container
        spacing={4}
        sx={{ marginTop: '32px' }}
      >
        {
        doomyData.map((exercise) => {
          return (
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
              justifyContent={'center'}
              key={exercise.id}
            >
              <Grid item>
                <Card
                  sx={{ maxWidth: 345, margin: '1rem' }}
                >
                  <CardMedia
                    component={'img'}
                    image={exercise.gifUrl}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant={'h5'}
                      component={'div'}
                    >
                      {exercise.name}
                    </Typography>
                    <Typography
                      variant={'body2'}
                      color={'text.secondary'}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Stack
                      direction={'row'}
                      spacing={2}
                      justifyContent={'flex-end'}
                      sx={{ marginTop: '0.5rem' }}
                    >
                      <Box
                        sx={{ backgroundColor: 'info.main', padding: '0.1rem 0.7rem', borderRadius: '0.3rem' }}
                      >
                        <Typography
                          variant={'subtitle1'}
                          color={'ButtonShadow'}
                        >
                          {exercise.bodyPart}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ backgroundColor: 'info.main', padding: '0.1rem 0.7rem', borderRadius: '0.3rem' }}
                      >
                        <Typography
                          variant={'subtitle1'}
                          color={'ButtonShadow'}
                        >
                          {exercise.target}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{ width: '100%' }}
                      size={'medium'}
                      variant={'outlined'}
                    >Go to exercise
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          )
        })
      }
      </Grid>
    </>
  )
}

export default App
