import React from 'react'
import Navbar from '../components/Navbar'
import ExercisesPlan from '../components/ExercisesPlan'
import Cart from '../components/Cart'

export const PlannerPage = () => {
  return (
    <>
      <Navbar appName={'Fit Planner'}/>
      <Cart/>
      <ExercisesPlan/>
    </>
  )
}

export default PlannerPage
