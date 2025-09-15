import { motion, AnimatePresence } from 'framer-motion'
import { Github, ChevronDown } from 'lucide-react'
import { PROJECTS } from './data'
import { useState } from 'react'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const TRANSITION_SECTION = { duration: 0.3 }

function ProjectListItem({
  item,
  expandAll,
}: {
  item: (typeof PROJECTS)[0]
  expandAll: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const open = expandAll || isOpen
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80">
      <motion.div
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between"
      >
        <div>
          <h4 className="font-medium text-zinc-900 dark:text-zinc-50">
            {item.name}
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {item.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-5 w-5 text-zinc-500" />
            </a>
          )}
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-5 w-5 text-zinc-500" />
          </motion.div>
        </div>
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
            <div className="pt-4">
              <div className="mb-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc space-y-2 pl-4">
                {item.detail.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects({ expandAll }: { expandAll: boolean }) {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
      <div className="mb-8 space-y-4">
        {PROJECTS.map((project) => (
          <ProjectListItem
            key={project.id}
            item={project}
            expandAll={expandAll}
          />
        ))}
      </div>
    </motion.section>
  )
}
