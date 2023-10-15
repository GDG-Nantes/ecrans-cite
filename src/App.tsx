import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import React from "react";

let buildTime: string

function App() {

  React.useEffect(() => {
    const intervalReload = setInterval(() => {
      void fetch('/buildTime.txt').then(async (response) => {
        const dateText = await response.text();
        if (buildTime == null) {
          buildTime = dateText
        } else if (buildTime !== dateText) {
          window.location.reload()
        }
      })
    }, 60 * 1000)
    return () => clearInterval(intervalReload)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
