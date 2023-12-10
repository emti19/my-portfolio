import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    ' I’m Emtias, a Software Engineer and Researcher based in Dhaka, Bangladesh.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Emtias, a Software Engineer and Researcher based in Dhaka, Bangladesh.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              As a passionate software engineer, my heart beats to the rhythm of coding, creating intricate solutions that bridge the gap between imagination and reality. With a keen interest in AI, I delve into the realms of deep learning, weaving algorithms that bring intelligence to machines. My commitment to research in this field is reflected in my authored paper, a testament to my curiosity and dedication.
            </p>
            <p>
              Beyond the digital realm, my love for travel and exploration takes me to new horizons, allowing me to unravel the beauty of diverse cultures and landscapes. I am not only a coder but also an adventurer, finding inspiration in the uncharted territories of the world. Virtual reality and augmented reality serve as the canvas for my technological artistry, where I craft immersive experiences that transcend the ordinary.
            </p>
            <p>
              Amidst the lines of code and virtual landscapes, I am a devoted family man. Balancing the complexities of technology with the simplicity of family bonds, I find joy in both the virtual and real dimensions of life. Always eager to embrace new technologies, I am on a perpetual quest to discover innovative solutions and explore the endless possibilities that the tech world has to offer.
            </p>
            <p>
              Feel free to reach out for any tech discussions or consider hiring me for your next personal project. I am always eager to contribute my coding expertise and explore new possibilities.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/EmtiasUr"   icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://instagram.com/rahman_emti" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/unmad24" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/emtiasur-rahman" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://www.facebook.com/rahman.emti/" icon={FacebookIcon} className="mt-4">
              Follow on Facebook
            </SocialLink>
            <SocialLink
              href="mailto:emtias763@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              emtias763@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
