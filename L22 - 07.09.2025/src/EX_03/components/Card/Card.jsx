import React from 'react'

const Card = (props) => {
  return (
    <div style={{border: "2px solid white", margin: "20px", padding: "5px"}}>
        {
            props.children
        }
    </div>
  )
}

export default Card