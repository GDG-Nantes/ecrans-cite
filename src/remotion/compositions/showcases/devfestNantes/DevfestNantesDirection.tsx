import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Sequence, staticFile,} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';
import {Logo} from './Logo';
import {Direction} from "src/types.ts";
import {DirectionComponent} from "src/remotion/compositions/showcases/devfestNantes/DirectionComponent.tsx";
import { Trees } from './Trees';
import { Moon } from './Moon';

const {fontFamily} = loadFont();

export const DevfestNantesDirection = ({directions}: { directions: Direction[] }) => {

  return (
    <AbsoluteFill
			style={{
				backgroundColor: '#e4595c',
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
				boxShadow:
					'inset 0 0px 200px rgba(0, 0, 0, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.5)',
			}}
		>
      <Sequence from={30}>
        <Trees/>
      </Sequence>
      <Sequence from={110}>
        <Moon/>
      </Sequence>
      <Sequence>
        <Logo/>
      </Sequence>
      <div style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "70%",
        left: "30%",
        height: "100%"
      }}>
        {directions.map((direction, index) => <DirectionComponent direction={direction} key={index}/>)}
      </div>
    </AbsoluteFill>
  );
};
