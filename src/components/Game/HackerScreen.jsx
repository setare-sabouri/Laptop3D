import React, { useState, useEffect } from 'react'
import SnakeGame from './SnakeGame' 
import styles from './GameStyles.module.scss'

const HackerScreen = () => {
  const [showGame, setShowGame] = useState(false)
  const [log, setLog] = useState([])

  useEffect(() => {
    const lines = [
      "booting system...",
      "locating backdoor...",
      "bypassing firewall...",
      "establishing secure channel...",
      "injecting payload...",
      "ACCESS GRANTED ✓",
      "Launching game..."
    ]

    let i = 0
    const interval = setInterval(() => {
      setLog((prev) => [...prev, lines[i]])
      i++
      if (i >= lines.length) {
        clearInterval(interval)
        setTimeout(() => setShowGame(true), 1500)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (showGame) {
    return <SnakeGame />
  }

  return (
    <div className={styles.terminal}>
      {log.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
      <span className="blink">█</span>
    </div>
  )
}


export default HackerScreen
