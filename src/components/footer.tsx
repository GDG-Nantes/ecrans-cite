import {format} from "date-fns"
import React from "react"
import {useCurrentDate} from "src/helpers.ts";

export const Footer: React.FC<{ room?: string }> = ({room}) => {
  const date = useCurrentDate()

  return <footer className={room ? "with-room" : undefined}>
    <div className='clock'>{format(date, 'HH:mm:ss')}</div>
    {room && <div className='room-name'>{room}</div>}
  </footer>
}
