interface WarningIconProps {
  width: string,
  height: string,
  fill: string,
}

const WarningIcon = ({width, height, fill} : WarningIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99935 13.3337C10.2077 13.3337 12.8327 10.7087 12.8327 7.50033C12.8327 4.29199 10.2077 1.66699 6.99935 1.66699C3.79102 1.66699 1.16602 4.29199 1.16602 7.50033C1.16602 10.7087 3.79102 13.3337 6.99935 13.3337Z" stroke={fill} stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 5.16699V8.08366" stroke={fill} stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.99805 9.83301H7.00329" stroke={fill} stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default WarningIcon