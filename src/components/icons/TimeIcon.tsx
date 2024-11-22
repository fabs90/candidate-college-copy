interface TimeIconProps {
  width: string,
  height: string,
  stroke: string,
}

const TimeIcon = ({width, height, stroke} : TimeIconProps) => { 
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
      <path d="M14.6673 8.00016C14.6673 11.6802 11.6807 14.6668 8.00065 14.6668C4.32065 14.6668 1.33398 11.6802 1.33398 8.00016C1.33398 4.32016 4.32065 1.3335 8.00065 1.3335C11.6807 1.3335 14.6673 4.32016 14.6673 8.00016Z" stroke={stroke} stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.4739 10.1197L8.40724 8.88635C8.04724 8.67301 7.75391 8.15968 7.75391 7.73968V5.00635" stroke={stroke} stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  )
}

export default TimeIcon
