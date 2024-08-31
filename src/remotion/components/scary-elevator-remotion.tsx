import React from "react";
import {Howl} from 'howler';
import {DefaultRemotion} from "src/remotion/components/default-remotion.tsx";


export const ScaryElevatorRemotion: typeof DefaultRemotion = (props) => {

  const sound = React.useMemo(() => new Howl({
    src: ['scary-elevator-short.mp3'],
    volume: 0.1
  }), [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      sound.play()
    }, 60000)
    return () => {
      sound.stop()
      clearInterval(interval)
    }
  }, [])
  return <>
    <div style={{height: '100%', width: '100%', position: 'absolute', zIndex: 1000}} onClick={() => sound.play()}></div>
    <DefaultRemotion {...props}/>
  </>
}