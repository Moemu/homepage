import { siteConfig } from "@/config/site"

export default function SiteFooter() {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <p className="text-sm text-muted-foreground/60 italic mb-4">
          {siteConfig.footer.quote}
        </p>
        <p className="text-xs text-muted-foreground/40">
          {siteConfig.footer.credit}
        </p>
      </div>
    </footer>
  )
}
