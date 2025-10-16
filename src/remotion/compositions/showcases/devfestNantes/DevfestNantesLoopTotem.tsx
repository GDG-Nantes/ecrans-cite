import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
  useVideoConfig,
  Video,
} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';

import {Details} from './Details';
import {Speakers} from './Speakers';
import {TalkTitle} from './TalkTitle';
import { Fireflies } from './Fireflies';
import { DefaultProps } from 'src/remotion/types/defaultProps.types';

const {fontFamily} = loadFont();

export const DevfestNantesLoopTotem = ({
	title,
	speakers,
	date,
	time,
	location,
  titleFontSize,
}: DefaultProps) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const videoOpacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	// Slow, centered zoom for BackgroundFiller appearing at frame 110
	const bgStart = 110;
	const bgLocalFrame = Math.max(0, frame - bgStart);
	const bgZoom = interpolate(bgLocalFrame, [0, 180], [1, 1.4], {
		extrapolateRight: 'clamp',
	});

	// White overlay that fades out to reveal the library image
	const whiteFlashStart = 118;
	const whiteFlashLocal = Math.max(0, frame - whiteFlashStart);
	const whiteOpacity = interpolate(whiteFlashLocal, [0, 5, 30], [1, 1, 0], {
		extrapolateRight: 'clamp',
	});

	// Darken the library image at the beginning to improve text readability
	const darkenStart = 110;
	const darkenLocal = Math.max(0, frame - darkenStart);
	const darkenOpacity = interpolate(darkenLocal, [30, 65], [0, 0.5], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	// Fireflies fade-in
	const firefliesStart = 120;
	const firefliesLocal = Math.max(0, frame - firefliesStart);
	const firefliesOpacity = interpolate(firefliesLocal, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	// Fade out to base color for seamless loop
	const fadeOutOpacity = interpolate(
		frame,
		[durationInFrames - 50, durationInFrames - 15],
		[0, 1],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		},
	);


	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
				fontFamily,
				textTransform: 'uppercase',
				backgroundColor: '#22170D',
			}}
		>
			<Sequence from={110}>
				<BackgroundFiller
					imageUrl={staticFile(
						'images/showcases/devfestNantes/library.png',
					)}
					style={{
						transform: `scale(${bgZoom})`,
						transformOrigin: 'center center',
					}}
				/>
			</Sequence>
			<Sequence from={110}>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundColor: '#000000',
						opacity: darkenOpacity,
					}}
				/>
			</Sequence>
			<Sequence from={0} durationInFrames={118}>
				<Video
					src={staticFile('images/showcases/devfestNantes/background.mp4')}
					style={{
						opacity: videoOpacity,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
					playbackRate={1.6}
					endAt={188}
					muted
				/>
			</Sequence>
			<Sequence from={118}>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundColor: '#FFFFFF',
						opacity: whiteOpacity,
					}}
				/>
			</Sequence>
			<Sequence from={120}>
				<Fireflies count={25} opacity={firefliesOpacity} />
			</Sequence>
			<div
				style={{
					height: '100%',
				}}
			>
				<Sequence name="Speakers" from={135}>
					<Speakers speakers={speakers} isTotemDisplayMode />
					<TalkTitle
						title={title}
						style={{
							fontSize: titleFontSize ?? 45,
						}}
						isTotemDisplayMode
					/>
				</Sequence>
				<Sequence from={175}>
					<Details
						date={date}
						time={time}
						location={location}
						isTotemDisplayMode
						withLeaves={false}
					/>
				</Sequence>
			</div>
			<Sequence>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundColor: '#22170D',
						zIndex: 1000,
						opacity: fadeOutOpacity,
					}}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
