import React from 'react'
import Exercise from './components/Exercise'
import doomyData from './doomyData'

export const App = () => {
  return (
    <Exercise exercise={doomyData}/>
  )
}

export default App
