import React, { useState } from 'react'
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PropTypes from 'prop-types'

const DailyPlan = ({ day, exercises }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            size={'small'}
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align={'center'}>{day}</TableCell>
        <TableCell align={'center'}>{exercises.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          sx={{ p: 0, pt: 0, borderBottom: 0 }}
          colSpan={3}
        >
          <Collapse
            in={open}
            timeout={'auto'}
            unmountOnExit
          >
            <Box sx={{ margin: 1 }}>
              <Typography
                variant={'h6'}
                gutterBottom
                component={'div'}
              >
                {`Training for ${day}`}
              </Typography>
              <Table
                size={'small'}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Exercise name</TableCell>
                    <TableCell>Sets</TableCell>
                    <TableCell align={'right'}>Weight</TableCell>
                    <TableCell align={'right'}>Repetitions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {exercises.map(({ name, sets, weight, repetitions }, index) => (
                    <TableRow key={index}>
                      <TableCell>{name}</TableCell>
                      <TableCell>{sets}</TableCell>
                      <TableCell align={'right'}>{weight}</TableCell>
                      <TableCell align={'right'}>{repetitions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

DailyPlan.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object),
  day: PropTypes.string
}

export default DailyPlan
