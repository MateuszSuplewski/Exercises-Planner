import React, { useState } from 'react'
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { createActionRemove, createActionSetExercisesByDay } from '../state/trainingPlan'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import { changeArrayOrder } from '../helpers/mainHelper'

const DailyPlan = ({ day, exercises }) => {
  const [open, setOpen] = useState(false)
  const storeDispatch = useDispatch()
  const trainingPlanState = useSelector((state) => state.trainingPlan)

  const handleOrderChange = (itemPosition, changePositionBy) => {
    const orderedData = changeArrayOrder(trainingPlanState[day], itemPosition, itemPosition + changePositionBy)

    storeDispatch(createActionSetExercisesByDay(orderedData, day))
  }

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
            <Box sx={{ margin: 1, backgroundColor: '#f5f5f5' }}>
              <Typography
                variant={'h6'}
                gutterBottom
                component={'div'}
                sx={{ pl: 0.5 }}
              >
                {`Training for ${day}`}
              </Typography>
              <Table size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Exercise name</TableCell>
                    <TableCell>Sets</TableCell>
                    <TableCell align={'right'}>Weight</TableCell>
                    <TableCell align={'right'}>Repetitions</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {exercises.map(
                    ({ name, sets, weight, repetitions, id }, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ minWidth: '130px' }}>{name}</TableCell>
                        <TableCell>{sets}</TableCell>
                        <TableCell align={'right'}>{weight}</TableCell>
                        <TableCell align={'right'}>{repetitions}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>
                          <IconButton
                            color={'primary'}
                            disabled={index === 0}
                            onClick={() => handleOrderChange(index, -1)}
                          >
                            <ArrowCircleUpIcon />
                          </IconButton>
                          <IconButton
                            color={'primary'}
                            disabled={exercises.length - 1 === index}
                            onClick={() => handleOrderChange(index, 1)}
                          >
                            <ArrowCircleDownIcon />
                          </IconButton>
                          <IconButton
                            color={'error'}
                            onClick={() => storeDispatch(createActionRemove({ name, sets, weight, repetitions, id }, day))}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  )}
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
