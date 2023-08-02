import { StyleSheet, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import MyText from './MyText'

type LiveTimeProps = {
  format?: string
  timeStyles?: Object
}

const LiveTime = ({ format = 'h:mm:ss A', timeStyles }: LiveTimeProps) => {
  const [time, setTime] = useState<string>(moment().format(format))

  useEffect(() => {
    const realTIme = setInterval(() => {
      setTime(moment().format(format))
    }, 1000)
    return () => clearInterval(realTIme)
  }, [])
  return (
    <MyText style={{ ...styles.time, ...timeStyles }} hasCustomColor>
      {time}
    </MyText>
  )
}

export default LiveTime

const styles = StyleSheet.create({
  time: {
    fontSize: 14,
    color: '#4363C6',
    fontWeight: 'bold',
  },
})
