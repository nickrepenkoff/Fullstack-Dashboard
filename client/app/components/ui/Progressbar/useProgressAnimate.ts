export const useProgressAnimate = (percent: number) => {
	const variants = {
		initial: {
			rotate: '49deg',
		},
		whileInView: {
			rotate: `${45 + percent * 1.8}deg`,
			transition: { type: 'easeInOut', duration: 2 },
		},
	}

	return { variants }
}
