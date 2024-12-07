import { ReactNode } from "react";

type Props =  {
    children: ReactNode;
    color?: string;
}

const CardTitle: React.FC<Props> = ({children, color}) => {
  return (
    <h4 style={{color: color }}>{children}</h4>
  )
}

export default CardTitle