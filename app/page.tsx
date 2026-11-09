import { ThemeToggle } from "@/components/theme-toggle"
import { socialIcons } from "@/config/icons"
import { siteConfig } from "@/config/site"

export default function Page() {
  const { ctaLink } = siteConfig

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="home">
        <a className="brand" href="#home">
          <strong>{siteConfig.name}</strong>
          <span>/ {siteConfig.role}</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home" aria-current="page">Home</a>
          <a href={siteConfig.aboutUrl}>About</a>
          <a href={siteConfig.statusUrl}>Status</a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="hero" id="main" tabIndex={-1}>
        <div className="hero-copy">
          <h1>
            Hi!<br />
            I’m <span>{siteConfig.name}</span>
          </h1>
          <p className="hero-role">{siteConfig.role}</p>
          <p className="hero-tagline">{siteConfig.tagline}</p>
          <a className="blog-link" href={ctaLink.href}>
            {ctaLink.label}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 12h15m-7-7 7 7-7 7" />
            </svg>
          </a>
          <ul className="social-links" aria-label="Social links">
            {siteConfig.socialLinks.map(({ key, name, href }) => (
              <li key={key}>
                <a href={href} aria-label={name} title={name}>
                  {socialIcons[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="hero-art"
          role="img"
          aria-label="Muika writing in a notebook beside a pink desk lamp and a laptop with a cat sticker."
        />
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </>
  )
}
