import { format } from "date-fns"
import React from "react"
import {useCurrentDate} from "./helpers.ts";

export const Footer: React.FC = () => {
    const date = useCurrentDate()

    return <footer>
        <div className='clock'>{format(date, 'HH:mm:ss')}</div>
    </footer>
  }
