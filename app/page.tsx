'use client'

import EducationCertificate from './education-certificate'
import Personal from './personal'
import Projects from './projects'
import WorkExperience from './work-experience'
import { useState } from 'react'

export default function Page() {
  const [expandAll, setExpandAll] = useState(false)
  return (
    <>
      <Personal />
      <div className="mb-2 flex justify-end">
        <button
          className="rounded-full bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-700 shadow transition hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600"
          onClick={() => setExpandAll((prev) => !prev)}
        >
          {expandAll ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
      <WorkExperience expandAll={expandAll} />
      <Projects expandAll={expandAll} />
      <EducationCertificate />

      {/* Blog and Connect sections can be refactored similarly if desired */}
    </>
  )
}
