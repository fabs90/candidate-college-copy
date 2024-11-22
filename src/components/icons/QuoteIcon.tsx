interface QuoteIconProps {
  width: string,
  height: string,
  fill: string
}

const QuoteIcon = ({width, height, fill} : QuoteIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.5 21H36V15C36 11.6906 38.6906 9 42 9H42.75C43.9969 9 45 7.99687 45 6.75V2.25C45 1.00312 43.9969 0 42.75 0H42C33.7125 0 27 6.7125 27 15V37.5C27 39.9844 29.0156 42 31.5 42H43.5C45.9844 42 48 39.9844 48 37.5V25.5C48 23.0156 45.9844 21 43.5 21ZM16.5 21H9V15C9 11.6906 11.6906 9 15 9H15.75C16.9969 9 18 7.99687 18 6.75V2.25C18 1.00312 16.9969 0 15.75 0H15C6.7125 0 0 6.7125 0 15V37.5C0 39.9844 2.01562 42 4.5 42H16.5C18.9844 42 21 39.9844 21 37.5V25.5C21 23.0156 18.9844 21 16.5 21Z" fill={fill}/>
    </svg>
  )
}

export default QuoteIcon