import React from 'react'

type Props = {
  children: string
  className?: string
}
function Text({ children, className }: Props) {
  return (
    <div className={className}>
      {children.split('\n').map((str, idx, array) => (
        <React.Fragment key={idx}>
          {str}
          {idx !== array.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Text
