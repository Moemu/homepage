"use client"

import { useEffect, useRef, useState } from "react"
import { siteConfig } from "@/config/site"

export default function SkillsSection() {
  const { skills: skillsHeader } = siteConfig.sections

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            {skillsHeader.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {skillsHeader.title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-primary/40 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div className="space-y-5">
            {siteConfig.skills.toSorted((a, b) => b.level - a.level).map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {skillsHeader.techStackLabel}
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.techStack.toSorted().map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-full glass-card text-foreground/80 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}
