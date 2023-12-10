import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'What I Use',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” Lenovo Ideapad, 12GB RAM (2021)">
            I was using an Intel-based 16” Lenovo Ideapad prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            I’ve chosen VS Code as my go-to code editor because it’s the perfect blend of power and flexibility. Its lightweight design and extensive extension ecosystem make it a versatile tool that adapts to my evolving needs. Plus, its broad language and framework support ensures I can tackle any coding project with ease.
          </Tool>
          <Tool title="WebStorm">
            As a complement to VS Code, I rely on WebStorm for its unmatched intelligence and code assistance. This powerful IDE from JetBrains excels in handling complex projects, providing deep insights into JavaScript and related technologies. WebStorm’s seamless integration with various frameworks and tools further expands its versatility, making it an indispensable tool for my web development endeavors.
          </Tool>
          <Tool title="MySQL Workbench">
            I rely on MySQL Workbench’s comprehensive features to manage and maintain MySQL databases effectively. Its intuitive visual interface simplifies database administration tasks, making it an indispensable tool for my work.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Tailwind CSS">
            Tailwind CSS’s utility-first approach and vast range of classes streamline development, enabling rapid prototyping and customization. Its responsive design principles ensure seamless user experiences across devices, while its consistent naming conventions and community support promote maintainable code. Tailwind CSS stands out as a versatile framework for crafting unique and accessible web experiences.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
