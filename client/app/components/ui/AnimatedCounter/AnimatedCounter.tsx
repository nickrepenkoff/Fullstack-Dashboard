import { animate, motion } from 'framer-motion'
import React, { FC, useCallback, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import { FADE_IN } from '../../../utils/animation/fade'

interface IAnimatedCounterProps {
	to: number
}

const AnimatedCounter: FC<IAnimatedCounterProps> = ({ to }) => {
	const nodeRef = useRef<HTMLSpanElement>(null)
	const [inViewRef, inView] = useInView()

	const from = (20 * to) / 100

	useEffect(() => {
		if (!inView) return

		const node = nodeRef.current

		const controls = animate(from, to, {
			duration: 1.9,
			onUpdate(value) {
				if (node) node.textContent = Math.round(value).toLocaleString()
			},
		})

		return () => controls.stop()
	}, [from, inView, to])

	const setRefs = useCallback(
		(node: HTMLSpanElement) => {
			if (nodeRef) {
				// @ts-ignore
				nodeRef.current = node
			}
			inViewRef(node)
		},
		[inViewRef]
	)

	return <motion.span {...FADE_IN} ref={setRefs} />
}

export default AnimatedCounter
