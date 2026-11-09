import assert from "node:assert/strict"
import test from "node:test"

test("homepage serves its introduction, navigation and illustration", async () => {
  const baseUrl = process.env.HOMEPAGE_URL || "http://127.0.0.1:3025"
  const response = await fetch(baseUrl)
  assert.equal(response.status, 200)
  const html = await response.text()

  assert.match(html, /<html[^>]+lang="en"/)
  assert.match(html, /<title>Muika<\/title>/)
  assert.match(html, /<meta name="color-scheme" content="light dark"/)
  assert.match(html, /<meta name="darkreader-lock"/)
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1)
  const nav = html.match(/<nav\b[^>]*>(.*?)<\/nav>/s)?.[1] ?? ""
  const navLinks = [...nav.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g)]
  assert.deepEqual(navLinks.map(([, href, label]) => [label, href]), [
    ["Home", "#home"],
    ["About", "https://blog.snowy.moe/about/"],
    ["Status", "https://status.snowy.moe/"],
  ])
  assert.match(html, /href="https:\/\/blog.snowy.moe\/"[^>]*>Visit My Blog/)
  for (const href of [
    "https://github.com/Moemu",
    "https://x.com/Moemuii",
    "https://space.bilibili.com/97020216/",
    "mailto:i@snowy.moe",
  ]) {
    assert.ok(html.includes(`href="${href}"`), `Missing social link: ${href}`)
  }

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
  assert.equal(new Set(ids).size, ids.length, "HTML IDs must be unique")
  const anchors = [...html.matchAll(/\bhref="#([^"]+)"/g)]
  assert.ok(anchors.length > 0, "The page must include internal navigation")
  for (const [, target] of anchors) {
    assert.ok(ids.includes(target), `Missing navigation destination: ${target}`)
  }

  const favicon = await fetch(new URL("/images/favicon.ico", baseUrl))
  assert.equal(favicon.status, 200)

  for (const path of ["/images/muika-desk.png", "/images/muika-desk-dark.png"]) {
    const illustration = await fetch(new URL(path, baseUrl))
    assert.equal(illustration.status, 200, path)
    assert.equal(illustration.headers.get("content-type"), "image/png", path)
  }
})
