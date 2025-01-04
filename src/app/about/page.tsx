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
  target,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  target: any,
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href} target="_blank"
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
    ' I’m Emtias, a Software Engineer and AI Researcher based in Chattogram, Bangladesh.',
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
            I’m Emtias, a Software Engineer and AI Researcher based in Chattogram, Bangladesh.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p className='italic'>The 'About' is written by ChatGPT, and I definitely proofread it.</p>
          <p>
            As a software engineer, I find joy in coding and creating solutions that turn ideas into reality. My deep interest in AI drives me to explore the fascinating world of deep learning, where I design algorithms to make machines smarter. My research in this field is reflected in a paper I’ve authored, showcasing my curiosity and dedication to innovation.
          </p>
          <p>
            Outside the world of technology, I love traveling and exploring new places, soaking in the beauty of different cultures and landscapes. I’m not just a coder; I’m an adventurer who draws inspiration from every journey. Technologies like virtual reality and augmented reality give me a creative space to craft immersive experiences that go beyond the ordinary.
          </p>
          <p>
            Amidst the coding and tech projects, I value my family deeply. Balancing the fast-paced world of technology with the warmth of family life brings me happiness. Always eager to learn, I keep exploring new technologies and pushing the boundaries of what’s possible in the tech world.
          </p>
          <p>
            If you’d like to discuss technology or need help with a project, feel free to get in touch. I’d be happy to share my expertise and explore exciting opportunities together.
          </p>

          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/EmtiasUr" target="_blank" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://instagram.com/rahman_emti" target="_blank" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/emti19" target="_blank" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/emtiasur-rahman" target="_blank" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://www.facebook.com/rahman.emti/" target="_blank" icon={FacebookIcon} className="mt-4">
              Follow on Facebook
            </SocialLink>
            <SocialLink
              href="mailto:emtias763@gmail.com"
              icon={MailIcon}
              target="_blank"
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
