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

function ProjectListItem({
  project,
  expandAll,
}: {
  project: (typeof WORK_EXPERIENCE)[0]['project'][0]
  expandAll: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const open = expandAll || isOpen

  return (
    <div className="rounded-lg border border-slate-200 shadow-sm dark:border-slate-700">
      <motion.div
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-start justify-between p-3"
      >
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-zinc-800 dark:text-zinc-200">
              {project.name}
            </h5>
            {project.link && (
              <a
                href={project.link}
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
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-2 pt-1"
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
            <div className="border-t border-slate-200 p-3 dark:border-slate-700">
              <ul className="list-disc space-y-1 pl-4">
                {project.detail.map((detail, i) => (
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

function WorkExperienceListItem({
  item,
  expandAll,
}: {
  item: (typeof WORK_EXPERIENCE)[0]
  expandAll: boolean
}) {
  return (
    <div className="avoid-break rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80">
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
      <div className="mt-4 space-y-4">
        {item.project.map((proj) => (
          <ProjectListItem key={proj.id} project={proj} expandAll={expandAll} />
        ))}
      </div>
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
