import {useSearchParams} from "react-router-dom";
import React from "react";

export function useCurrentDate(): Date {
  const [searchParams] = useSearchParams()
  const dateSearch = searchParams.get("date");
  const date = dateSearch ? new Date(dateSearch) : new Date()
  const deltaDates = date.getTime() - new Date().getTime()
  const [time, setTime] = React.useState<Date>(date)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(dateSearch ? new Date(new Date().getTime() + deltaDates) : new Date())
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  return time
}
