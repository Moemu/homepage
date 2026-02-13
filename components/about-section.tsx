"use client"

import type { LucideIcon } from "lucide-react"
import { siteConfig } from "@/config/site"
import { interestIcons } from "@/config/icons"

export default function AboutSection() {
  const { about } = siteConfig.sections

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            {about.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {about.title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-primary/40 rounded-full" />
        </div>

        {/* Bio card */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-16 shadow-lg shadow-primary/5">
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto text-center">
            {siteConfig.bio}
          </p>
        </div>

        {/* Interests grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {siteConfig.interests.map((item) => {
            const Icon = interestIcons[item.icon]
            return (
              <InterestCard
                key={item.title}
                icon={Icon}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-12 right-8 w-24 h-24 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
      <div className="absolute bottom-16 left-12 w-32 h-32 rounded-full bg-accent/5 blur-2xl pointer-events-none" />
    </section>
  )
}

function InterestCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon | undefined
  title: string
  description: string
}) {
  return (
    <div className="group glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
          {Icon && <Icon className="w-5 h-5" />}
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
