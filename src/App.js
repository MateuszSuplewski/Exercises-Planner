import React from 'react'

import Navbar from './components/Navbar'
import ListedExercises from './components/ListedExercises'
import doomyData from './doomyData'

export const App = () => {
  return (
    <>
      <Navbar appName={'Fit Planner'}/>
      <ListedExercises exercises={doomyData}/>
    </>
  )
}

export default App
