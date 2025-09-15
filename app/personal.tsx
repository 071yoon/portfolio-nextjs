import { motion } from 'framer-motion'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const TRANSITION_SECTION = { duration: 0.3 }

export default function Personal() {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="flex-1">
        <p className="text-m mb-4 text-zinc-600 dark:text-zinc-400">
          2년차 Software 개발자 윤영기 입니다. Next.js 및 Spring 을 주력으로
          사용하며 MariaDB 및 On-Premise 환경의 System Architecture 설계를
          해본적이 있으며 최대 10,000 대 동시 통신 환경에서의 서비스 운영 경험이
          있습니다.
        </p>
        <p className="text-m text-zinc-600 dark:text-zinc-400">
          단순히 지금 눈 앞에 문제만 해결하는 것이 아닌 장기적인 관점에서 문제를
          바라보고 접근하는것이 중요하다고 생각합니다.
        </p>
      </div>
    </motion.section>
  )
}
