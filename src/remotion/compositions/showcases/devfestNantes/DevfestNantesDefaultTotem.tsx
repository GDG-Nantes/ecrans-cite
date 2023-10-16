import { loadFont } from '@remotion/google-fonts/CrimsonText';
import {
    AbsoluteFill,
    Easing,
    Img,
    interpolate,
    Sequence,
    staticFile,
    useCurrentFrame,
} from 'remotion';

import { BackgroundFiller } from '../../../design/atoms/BackgroundFiller';
import { DefaultProps } from '../../../types/defaultProps.types';

import { Android } from './Android';
import { Details } from './Details';
import { Dino } from './Dino';
import { Logo } from './Logo';
import { TalkTitle } from './TalkTitle';

const { fontFamily } = loadFont();

export const DevfestNantesDefaultTotem = ({
    title,
    time,
    location,
}: DefaultProps) => {
    const frame = useCurrentFrame();

    const SlideDown = interpolate(frame, [300, 330], [0, 1300], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.bezier(0.51, -0.75, 0.99, 0.75),
    });

    return (
        <AbsoluteFill
            style={{
                backgroundColor: 'white',
                overflow: 'hidden',
                fontFamily,
                textTransform: 'uppercase',
            }}
        >
            <Sequence>
                <BackgroundFiller
                    imageUrl={staticFile(
                        '/images/showcases/devfestNantes/fond-visuel-etoiles.png',
                    )}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Sequence>
            <Sequence from={30}>
                <Dino />
            </Sequence>
            <Sequence from={110}>
                <Android isTotemDisplayMode />
            </Sequence>
            <div style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "75%",
            }}><Img
              src={staticFile(
                '/images/showcases/devfestNantes/logo-devfest-mgm_transparent.svg',
              )}
              width={"600px"}
              height="auto"
            />
            </div>
        </AbsoluteFill>
    );
};