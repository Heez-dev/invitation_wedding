type Props = {
  className?: string
}

function Heart({ className }: Props) {
  return (
    <svg
      className={className}
      fill="currentColor"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M429.9,95.6c-40.4-42.1-106-42.1-146.4,0L256,124.1l-27.5-28.6c-40.5-42.1-106-42.1-146.4,0c-45.5,47.3-45.5,124.1,0,171.4   L256,448l173.9-181C475.4,219.7,475.4,142.9,429.9,95.6z" />
      </g>
    </svg>
  )
}

export default Heart
