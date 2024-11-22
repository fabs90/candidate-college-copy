interface CloseIconProps {
  width: string,
  height: string,
  fill: string,
}

const CloseIcon = ({width, height, fill} : CloseIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 1L1 13M1 1L13 13" stroke={fill} stroke-opacity="0.56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default CloseIcon