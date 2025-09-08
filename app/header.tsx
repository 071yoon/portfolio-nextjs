'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { ABOUT_ME } from './data'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          {ABOUT_ME.name}
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {ABOUT_ME.description}
        </TextEffect>
      </div>
    </header>
  )
}
