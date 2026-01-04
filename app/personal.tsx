import { motion } from 'framer-motion'
import { ABOUT_ME } from './data'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const TRANSITION_SECTION = { duration: 0.3 }

export default function Personal() {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="flex-1">
        {ABOUT_ME.summary.map((text, index) => (
          <p
            key={index}
            className={`text-m text-zinc-600 dark:text-zinc-400 ${
              index < ABOUT_ME.summary.length - 1 ? 'mb-4' : ''
            }`}
          >
            {text}
          </p>
        ))}
      </div>
    </motion.section>
  )
}
