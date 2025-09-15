'use client'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import {
  MonitorIcon,
  MoonIcon,
  SunIcon,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SOCIAL_LINKS, EMAIL } from './data'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => {
            let Icon = null
            if (social.label.toLowerCase() === 'github') Icon = Github
            else if (social.label.toLowerCase() === 'linkedin') Icon = Linkedin
            else if (social.label.toLowerCase() === 'instagram')
              Icon = Instagram
            return (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                aria-label={social.label}
              >
                {Icon ? <Icon className="h-5 w-5" /> : social.label}
              </a>
            )
          })}
          <a
            href={`mailto:${EMAIL}`}
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-500">
            © {new Date().getFullYear()} YeongGi Yoon.
          </span>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
