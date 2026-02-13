"use client"

import { siteConfig } from "@/config/site"
import { socialIcons } from "@/config/icons"

export default function ConnectSection() {
  const { connect } = siteConfig.sections

  return (
    <section id="connect" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            {connect.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {connect.title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-primary/40 rounded-full" />
        </div>

        {/* Social cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${link.hoverColor}`}
            >
              <div className="flex-shrink-0 text-muted-foreground group-hover:scale-110 transition-transform duration-300">
                {socialIcons[link.key]?.("w-6 h-6 fill-current")}
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-inherit transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground">{link.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
