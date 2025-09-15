'use client'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { ABOUT_ME } from './data'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={`/images/${ABOUT_ME.image}`}
          alt={ABOUT_ME.name}
          width={100}
          height={80}
          className="rounded-2xl object-contain"
        />
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
      </div>
    </header>
  )
}
