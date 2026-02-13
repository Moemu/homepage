"use client"

import Image from "next/image"
import { ChevronDown, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { siteConfig } from "@/config/site"
import { socialIcons } from "@/config/icons"

type Particle = {
  delay: number
  size: number
  left: string
  top: string
  driftX: number
  driftY: number
}

const FLOATING_PARTICLES: Particle[] = [
  { delay: 0, size: 6, left: "15%", top: "20%", driftX: -24.4, driftY: -57.3 },
  { delay: 1.5, size: 4, left: "25%", top: "60%", driftX: 10.9, driftY: -68.4 },
  { delay: 3, size: 8, left: "70%", top: "30%", driftX: 17.1, driftY: -52.6 },
  { delay: 0.5, size: 5, left: "80%", top: "70%", driftX: 7.4, driftY: -42.6 },
  { delay: 2, size: 7, left: "45%", top: "15%", driftX: 9.9, driftY: -67.0 },
  { delay: 4, size: 4, left: "60%", top: "80%", driftX: 18.0, driftY: -44.7 },
  { delay: 1, size: 6, left: "90%", top: "40%", driftX: 15.5, driftY: -49.8 },
  { delay: 2.5, size: 5, left: "10%", top: "75%", driftX: -18.0, driftY: -75.8 },
]

function FloatingParticle({ delay, size, left, top, driftX, driftY }: Particle) {

  return (
    <div
      suppressHydrationWarning
      className="absolute rounded-full opacity-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left,
        top,
        background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, rgba(244,163,196,0.2) 100%)",
        animation: `particle-drift 8s ease-in-out ${delay}s infinite`,
        ["--drift-x" as string]: `${driftX}px`,
        ["--drift-y" as string]: `${driftY}px`,
      }}
    />
  )
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background anime illustration */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Image
          src={siteConfig.heroImageUrl}
          alt={siteConfig.heroImageAlt}
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-transparent dark:from-background/95 dark:via-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 dark:from-background/95 dark:to-background/45" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {FLOATING_PARTICLES.map((particle) => (
          <FloatingParticle
            key={`${particle.left}-${particle.top}-${particle.delay}`}
            {...particle}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left: Bio text */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              <span className="block">Hi!</span>
              <span className="block mt-1">
                {"I'm "}
                <span className="text-primary">{siteConfig.name}</span>
              </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl font-medium text-muted-foreground">
              {siteConfig.role}
            </p>

            <p className="mt-3 text-sm md:text-base text-muted-foreground/80 max-w-md leading-relaxed">
              {siteConfig.tagline}
            </p>

            {/* CTA capsule button */}
            {siteConfig.ctaLink && (
              <a
                href={siteConfig.ctaLink.href}
                target={siteConfig.ctaLink.external ? "_blank" : undefined}
                rel={siteConfig.ctaLink.external ? "noopener noreferrer" : undefined}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary/90 px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                {siteConfig.ctaLink.label}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            )}

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              {siteConfig.socialLinks.map((link) => (
                <SocialLink key={link.key} href={link.href} label={link.name}>
                  {socialIcons[link.key]?.("w-5 h-5 fill-current")}
                </SocialLink>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="flex-shrink-0 flex justify-center items-center relative">
            <div className="relative">
              {/* Decorative outer ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-2 rounded-full border border-accent/20" />
              {/* Avatar */}
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl shadow-primary/20">
                <Image
                  src={siteConfig.avatarUrl}
                  alt={`${siteConfig.name}'s anime avatar`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground/60 animate-bounce-gentle" />
      </div>
    </section>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative w-11 h-11 flex items-center justify-center rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}
