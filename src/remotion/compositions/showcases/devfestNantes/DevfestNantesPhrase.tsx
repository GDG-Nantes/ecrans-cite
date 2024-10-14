import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Sequence} from 'remotion';

import {DefaultProps} from '../../../types/defaultProps.types';
import {TalkTitle} from './TalkTitle';

import {Logo} from './Logo';
import {Details} from "./Details";
import {GhostBackground} from './GhostBackground';
import {Moon} from './Moon';
import {Trees} from './Trees';

const {fontFamily} = loadFont();
export const DevfestNantesPhrase = ({title, location, time}: DefaultProps) => {
  

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
      <Sequence name="Speakers" from={30}>
          <TalkTitle
            title={title}
            style={{
              bottom: '300px',
            }}
          />
          
        </Sequence>
        <Sequence from={70}>
            <Details
              time={time}
              location={location}
              isTotemDisplayMode={false}
            />
			    </Sequence>
		</AbsoluteFill>
	);
};