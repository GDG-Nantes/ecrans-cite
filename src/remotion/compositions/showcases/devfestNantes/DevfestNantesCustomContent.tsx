import {loadFont} from "@remotion/google-fonts/CrimsonText";
import {AbsoluteFill, interpolate, Sequence, staticFile, useCurrentFrame} from "remotion";
import {BackgroundFiller} from "../../../design/atoms/BackgroundFiller";

import { Fireflies } from "./Fireflies";

const {fontFamily} = loadFont();
export const DevfestNantesCustomContent: React.FC<React.PropsWithChildren> = ({children}) => {

  const frame = useCurrentFrame();
	const videoOpacity = interpolate(frame, [0, 30], [0.2, 0.4], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	// Slow, centered zoom for BackgroundFiller appearing at frame 110
	const bgStart = 0;
	const bgLocalFrame = Math.max(0, frame - bgStart);
	const bgZoom = interpolate(bgLocalFrame, [0, 250], [1, 1.4], {
		extrapolateRight: 'clamp',
	});

	// Fireflies fade-in
	const firefliesStart = 10;
	const firefliesLocal = Math.max(0, frame - firefliesStart);
	const firefliesOpacity = interpolate(firefliesLocal, [10, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});

  return (
    <AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
				backgroundColor: '#22170D',
			}}
		>
			<Sequence from={0}>
				<BackgroundFiller
					imageUrl={staticFile(
						'images/showcases/devfestNantes/library.png',
					)}
					style={{
						opacity: videoOpacity,
						transform: `scale(${bgZoom})`,
						transformOrigin: 'center center',
					}}
				/>
			</Sequence>
			<Sequence from={20}>
				<Fireflies count={25} opacity={firefliesOpacity} />
			</Sequence>
			{/*<Sequence from={22}>*/}
			{/*	<SweepFirefly*/}
			{/*		y={180}*/}
			{/*		size={70}*/}
			{/*		durationInFrames={120}*/}
			{/*		opacity={firefliesOpacity}*/}
			{/*		direction="ltr"*/}
			{/*		driftAmp={10}*/}
			{/*		driftFreq={1.2}*/}
			{/*		flickerAmp={0.18}*/}
			{/*	/>*/}
			{/*</Sequence>*/}
			{/*<Sequence from={38}>*/}
			{/*	<SweepFirefly*/}
			{/*		y={420}*/}
			{/*		size={60}*/}
			{/*		durationInFrames={140}*/}
			{/*		opacity={firefliesOpacity}*/}
			{/*		direction="rtl"*/}
			{/*		driftAmp={6}*/}
			{/*		driftFreq={2.0}*/}
			{/*		flickerAmp={0.12}*/}
			{/*	/>*/}
			{/*</Sequence>*/}
			{/*<Sequence from={50}>*/}
			{/*	<SweepFirefly*/}
			{/*		y={300}*/}
			{/*		size={52}*/}
			{/*		durationInFrames={120}*/}
			{/*		opacity={firefliesOpacity}*/}
			{/*		direction="ltr"*/}
			{/*		driftAmp={14}*/}
			{/*		driftFreq={0.9}*/}
			{/*		flickerAmp={0.2}*/}
			{/*	/>*/}
			{/*</Sequence>*/}
      {children}
    </AbsoluteFill>
  );
};
