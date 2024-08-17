import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [date, updateDate] = useState(new Date())

  useEffect(() => {
    const timeId = setInterval(() => {
      updateDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timeId)
    }
  }, [])

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time>{date.toLocaleTimeString()}</Time>
    </ClockContainer>
  )
}
export default Clock
