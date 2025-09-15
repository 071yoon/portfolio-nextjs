import { EDUCATION, CERTIFICATE } from './data'

export default function EducationCertificate() {
  return (
    <section className="mb-8">
      <h3 className="mb-3 text-lg font-medium">Education</h3>
      <ul className="mb-6 space-y-3">
        {EDUCATION.map((edu, idx) => (
          <li
            key={edu.title + edu.start + edu.end + idx}
            className="avoid-break rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                {edu.image && (
                  <img
                    src={`/images/${edu.image}`}
                    alt={edu.title}
                    className="h-10 w-10 rounded border border-zinc-200 object-contain dark:border-zinc-700"
                  />
                )}
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {edu.title}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.position}
                  </div>
                </div>
              </div>
              <div className="text-sm whitespace-nowrap text-zinc-500 dark:text-zinc-400">
                {edu.start} - {edu.end}
              </div>
            </div>
            {edu.description && edu.description.length > 0 && (
              <ul className="mt-2 list-disc pl-6 text-sm text-zinc-600 dark:text-zinc-400">
                {edu.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <h3 className="mb-3 text-lg font-medium">Certificate</h3>
      <ul className="space-y-3">
        {CERTIFICATE.map((cert, idx) => (
          <li
            key={cert.title + cert.date + idx}
            className="avoid-break rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                {cert.image && (
                  <img
                    src={`/images/${cert.image}`}
                    alt={cert.title}
                    className="h-10 w-10 rounded bg-white object-contain"
                  />
                )}
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {cert.title}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {cert.position}
                  </div>
                </div>
              </div>
              <div className="text-sm whitespace-nowrap text-zinc-500 dark:text-zinc-400">
                {cert.date}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
