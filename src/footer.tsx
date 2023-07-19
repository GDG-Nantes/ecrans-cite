import { format } from "date-fns"
import React from "react"

export const Footer: React.FC<{nom: string}> = ({nom}) => {
    const [time, setTime] = React.useState<Date>(new Date())
  
    React.useEffect(() => {
      setInterval(() => {
        setTime(new Date())
      }, 1000)
    }, [])
  
    return <footer>
        <h1>{nom}</h1>
        <div className='clock'>{format(time, 'HH:mm')}</div>
    </footer>
  }