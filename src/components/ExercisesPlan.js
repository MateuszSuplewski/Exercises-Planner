import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import DailyPlan from './DailyPlan'
import { useSelector } from 'react-redux'

const ExercisesPlan = () => {
  const trainingPlanState = useSelector((state) => state.trainingPlan)
  console.log(Object.keys(trainingPlanState))
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: '1024px', margin: '0 auto' }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align={'center'}>Day of week</TableCell>
            <TableCell align={'center'}>Total exercises</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(trainingPlanState).map((day, index) => (
            <DailyPlan
              key={index}
              day={day}
              exercises={trainingPlanState[day]}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExercisesPlan
