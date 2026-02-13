export type NavLink = {
  label: string
  href: string
}

export type SocialLink = {
  key: string
  name: string
  handle: string
  href: string
  hoverColor: string
}

export type Interest = {
  icon: string
  title: string
  description: string
}

export type Skill = {
  name: string
  level: number
}

export type SectionHeader = {
  tag: string
  title: string
}

export type CtaLink = {
  label: string
  href: string
  external?: boolean
}

export type SiteConfig = {
  name: string
  title: string
  description: string
  role: string
  tagline: string
  bio: string
  avatarUrl: string
  heroImageUrl: string
  heroImageAlt: string

  ctaLink?: CtaLink

  footer: {
    quote: string
    credit: string
  }

  navLinks: NavLink[]

  socialLinks: SocialLink[]

  interests: Interest[]

  skills: Skill[]

  techStack: string[]

  sections: {
    about: SectionHeader
    skills: SectionHeader & { techStackLabel: string }
    connect: SectionHeader
  }
}

export const siteConfig: SiteConfig = {
  name: "Muika",
  title: "Muika - An ACGN Enthusiast",
  description:
    "Personal homepage of Muika - A creative web developer with a passion for anime and clean design.",
  role: "An ACGN enthusiast",
  tagline: "ACGN / INFJ-T / Depression / Python / CS.ML / NLP",
  bio: "你好呀，这里是 Asahina Mafuyu(朝比奈真冬), 你也可以叫我 Muika，我学了一点编程语言，目前大二在读。我热衷于钻研和大语言模型有关的东西，希望通过自己的双手让自己的原创角色“活起来”，目前正在为 ACL Student Research Workshop 撰写论文。",
  avatarUrl: "/images/Mafuyu.png",
  heroImageUrl: "/images/140981624_p0.webp",
  heroImageAlt: "Anime-style illustration of a dreamy sky scene, Pixiv ID 140981624",

  ctaLink: {
    label: "Visit My Blog",
    href: "https://blog.snowy.moe/",
    external: true,
  },

  footer: {
    quote: '"单程孤舟，出云入霞，如歌如吟。"',
    credit: "Made with love by Muika",
  },

  navLinks: [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Connect", href: "#connect" },
  ],

  socialLinks: [
    {
      key: "github",
      name: "GitHub",
      handle: "@Moemu",
      href: "https://github.com/Moemu",
      hoverColor: "hover:border-[#333]/40 hover:text-[#333]",
    },
    {
      key: "twitter",
      name: "Twitter / X",
      handle: "@Moemuii",
      href: "https://x.com/Moemuii",
      hoverColor: "hover:border-[#1DA1F2]/40 hover:text-[#1DA1F2]",
    },
    {
      key: "bilibili",
      name: "Bilibili",
      handle: "@Moemuu",
      href: "https://space.bilibili.com/97020216/",
      hoverColor: "hover:border-[#00A1D6]/40 hover:text-[#00A1D6]",
    },
    {
      key: "email",
      name: "Email",
      handle: "i@snowy.moe",
      href: "mailto:i@snowy.moe",
      hoverColor: "hover:border-accent/40 hover:text-accent",
    },
  ],

  interests: [
    {
      icon: "code",
      title: "Development",
      description:
        "构建有趣和实在的应用，不断提升自己的编程技能和技术栈。",
    },
    {
      icon: "palette",
      title: "Natural Language Processing",
      description:
        "研究自然语言处理技术，探索 AI 与人类交互的新可能性。",
    },
    {
      icon: "sparkles",
      title: "ACGN Culture",
      description:
        "闲暇时会追番和看漫画，喜欢轻日常&百合向作品。",
    },
    {
      icon: "music",
      title: "Music",
      description:
        "Enjoying J-pop, lo-fi beats, and ambient soundscapes while coding.",
    },
  ],

  skills: [
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 60 },
    { name: "Tailwind CSS", level: 60 },
    { name: "Java", level: 40 },
    { name: "MySQL", level: 40 },
    { name: "LaTeX", level: 20 },
  ],

  techStack: [
    "Python",
    "FastAPI",
    "Nonebot",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Vue3",
    "MySQL",
    "Git",
    "LaTeX",
    "Docker",
  ],

  sections: {
    about: {
      tag: "About Me",
      title: "A little bit about myself",
    },
    skills: {
      tag: "Skills",
      title: "What I work with",
      techStackLabel: "Tech Stack",
    },
    connect: {
      tag: "Connect",
      title: "Let's be friends",
    },
  },
}
