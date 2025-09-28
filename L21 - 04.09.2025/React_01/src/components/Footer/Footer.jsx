import React from 'react'
import Button from '../Button/Button'

const Footer = () => {
  return (
    <footer style={{
        border: "2px solid blue",
        backgroundColor: "white",
        padding: "20px"
    }}>
        <Button text={"כפתור ששייך לחלק התחתון"} />
    </footer>
  )
}

export default Footer