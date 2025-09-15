import { motion, AnimatePresence } from 'framer-motion'
import { Link2, ChevronDown } from 'lucide-react'
import { WORK_EXPERIENCE } from './data'
import { useState } from 'react'
import Image from 'next/image'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const TRANSITION_SECTION = { duration: 0.3 }

function WorkExperienceListItem({
  item,
  expandAll,
}: {
  item: (typeof WORK_EXPERIENCE)[0]
  expandAll: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const open = expandAll || isOpen
  return (
    <div className="avoid-break rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80">
      <motion.div
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-start justify-between"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-white">
            <Image
              src={`/images/${item.image}`}
              alt={item.company}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div>
            <h4 className="font-medium text-zinc-900 dark:text-zinc-50">
              {item.title}
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.company}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.start} - {item.end}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="pt-1"
        >
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-4">
              {item.project.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-lg border border-slate-200 p-3 shadow-sm dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium text-zinc-800 dark:text-zinc-200">
                      {proj.name}
                    </h5>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link2 className="h-4 w-4 text-zinc-500" />
                      </a>
                    )}
                  </div>
                  <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {proj.description}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc space-y-1 pl-4">
                    {proj.detail.map((detail, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function WorkExperience({ expandAll }: { expandAll: boolean }) {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
      <div className="mb-8 space-y-4">
        {WORK_EXPERIENCE.map((job) => (
          <WorkExperienceListItem
            key={job.id}
            item={job}
            expandAll={expandAll}
          />
        ))}
      </div>
    </motion.section>
  )
}
