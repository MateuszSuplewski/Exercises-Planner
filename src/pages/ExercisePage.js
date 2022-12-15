import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import Exercise from '../components/Exercise'

export const ExercisePage = () => {
  return (
    <>
      <Navbar appName={'Fit Planner'}/>
      <Exercise/>
    </>
  )
}

ExercisePage.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object)
}

export default ExercisePage
