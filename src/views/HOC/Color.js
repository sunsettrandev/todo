import React from 'react'


// Higher Order Compononet

let getRandomColor = () => {
  let letter = '0123456789ABCDEF'
  let color = '#'
  for (let i = 1; i <= 6; i++) {
    color += letter[Math.floor(Math.random() * 16)]
  }
  return color
}

const Color = (WappedComponent) => {
  const getColor = getRandomColor()
  return (props) => (
    <div style={{ color: getColor }}>
      <WappedComponent {...props} />
    </div>
  )

}
export default Color;