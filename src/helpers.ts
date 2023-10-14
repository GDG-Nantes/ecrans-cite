import {useSearchParams} from "react-router-dom";
import React from "react";
import {parseISO} from "date-fns";

export function useCurrentDate(): Date {
  const [searchParams] = useSearchParams()
  let dateSearch = searchParams.get("date");
  const date = dateSearch ? parseISO(dateSearch) : new Date()
  const deltaDates = date.getTime() - new Date().getTime()
  const [time, setTime] = React.useState<Date>(date)

  React.useEffect(() => {
    setInterval(() => {
      setTime(dateSearch ? new Date(new Date().getTime() + deltaDates) : new Date())
    }, 1000)
  }, [])

  return time
}
