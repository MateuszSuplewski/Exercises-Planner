import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FullPageLayout from './FullPageLayout'

const Page404 = () => {
  const navigate = useNavigate()
  const [time, setTime] = useState(5)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((actualTime) => actualTime - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (time === 0) navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return (
    <FullPageLayout>
      <p>Ooops! Something went wrong :/ (...) It looks like the page you are looking for does not exist!</p>
      <p>{`You will be automatically redirected to home page in ${time} s`}</p>
    </FullPageLayout>
  )
}

export default Page404
