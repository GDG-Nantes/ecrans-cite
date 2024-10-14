import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Img, Sequence, staticFile,} from 'remotion';

import {GhostBackground} from './GhostBackground';
import {Logo} from './Logo';
import {Moon} from './Moon';
import {Trees} from './Trees';

const {fontFamily} = loadFont();

export const DevfestNantesDefault = () => {

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
				<GhostBackground />
			</Sequence>
			<Sequence from={110}>
				<Moon />
			</Sequence>
			<Sequence from={30}>
				<Trees />
			</Sequence>
			<Sequence>
				<Logo />
			</Sequence>
      <div style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}><Img
        src={staticFile(
          '/images/showcases/devfestNantes/logo-devfest-2024.svg',
        )}
        width={"600px"}
        height="auto"
      />
      </div>
		</AbsoluteFill>
	);
};
