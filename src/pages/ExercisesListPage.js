import React from 'react'
import PropTypes from 'prop-types'
import ListedExercises from '../components/ListedExercises'
import Navbar from '../components/Navbar'

export const ExercisesListPage = () => {
  return (
    <>
      <Navbar appName={'Fit Planner'}/>
      <ListedExercises/>
    </>
  )
}

ExercisesListPage.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object)
}

export default ExercisesListPage
