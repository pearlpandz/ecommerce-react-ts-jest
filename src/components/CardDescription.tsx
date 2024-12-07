import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const CardDescription:React.FC<Props> = ({children}) => {
  return (
    <p>{children}</p>
  )
}

export default CardDescription