import { useEffect, useRef } from 'react'
import { type MotionTransitionProps } from './MotionTransition.types'
import { useAnimation, useInView, motion } from 'framer-motion'
import { fadeIn } from '../../utils/transitions'

export function MotionTransition(props: MotionTransitionProps) {
  const { children, className } = props

  const ref = useRef(null)
  const isInView: boolean = useInView(ref, { once: false })
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (typeof isInView === 'boolean' && isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn()}
        initial='hidden'
        animate={mainControls}
        exit='hidden'
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
