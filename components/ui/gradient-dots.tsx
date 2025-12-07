'use client';

import React from 'react';
import { motion } from 'framer-motion';

type GradientDotsProps = React.ComponentProps<'div'> & {
	dotSize?: number;
	spacing?: number;
	duration?: number;
	colorCycleDuration?: number;
	backgroundColor?: string;
	vignetteColor?: string;
};

export function GradientDots({
	dotSize = 8,
	spacing = 10,
	duration = 30,
	colorCycleDuration = 6,
	backgroundColor = 'var(--background)',
	vignetteColor = 'var(--background)', 
	className,
	...props
}: GradientDotsProps) {
	const hexSpacing = spacing * 1.732;

	return (

		<div 
			className={`absolute z-0 w-full h-[60vh] md:h-screen overflow-hidden ${className}`} 
			{...props}
		>
			{/* 1. The Animated Dots Layer */}
			<motion.div
				className="absolute inset-0 z-0"
				style={{
					backgroundColor,
					backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, #f00, transparent 60%),
          radial-gradient(circle at 50% 50%, #ff0, transparent 60%),
          radial-gradient(circle at 50% 50%, #0f0, transparent 60%),
          radial-gradient(ellipse at 50% 50%, #00f, transparent 60%)
        `,
					backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
					backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0px
        `,
				}}
				animate={{
					backgroundPosition: [
						`0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
						`0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
					],
					filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
				}}
				transition={{
					backgroundPosition: {
						duration: duration,
						ease: 'linear',
						repeat: Number.POSITIVE_INFINITY,
					},
					filter: {
						duration: colorCycleDuration,
						ease: 'linear',
						repeat: Number.POSITIVE_INFINITY,
					},
				}}
			/>


			<div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-white via-white/20 to-transparent dark:from-neutral-950 dark:via-neutral-950/10 dark:to-transparent" />
		</div>
	);
}