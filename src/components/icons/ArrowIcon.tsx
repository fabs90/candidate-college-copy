interface ArrowIcon {
  width: string,
  height: string,
  stroke: string,
  direction: 'up' | 'down' | 'left' | 'right'
}

const ArrowIcon = ({width, height, stroke, direction} : ArrowIcon) => {
  let path
  
  switch(direction) {
    case "up": 
      path = "M13.2807 10.0332L8.93404 5.68654C8.4207 5.1732 7.5807 5.1732 7.06737 5.68654L2.7207 10.0332"
      break
    case "down": 
      path = "M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
      break
    case "left":
      path = "M10.0332 13.2807L5.68654 8.93404C5.1732 8.4207 5.1732 7.5807 5.68654 7.06737L10.0332 2.7207"
      break
    case "right":
      path = "M5.9668 13.2807L10.3135 8.93404C10.8268 8.4207 10.8268 7.5807 10.3135 7.06737L5.9668 2.7207" 
      break
    default:
      path = "M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
      break
  }
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={path} stroke={stroke} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ) 
}

export default ArrowIcon