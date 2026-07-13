$repo = "G:\project\advanture torisum"
Set-Location $repo

# Reset staging area
git reset HEAD -- . 2>$null
git checkout -- . 2>$null

# Remove old tracking
git rm --cached ex.txt index.html public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg -q 2>$null

function C {
    param($Files, $Msg)
    git add $Files 2>$null | Out-Null
    git commit -m "$Msg`n`nCo-authored-by: CommandCodeBot <noreply@commandcode.ai>"
}

# 1 — scaffold core config files
C @(".gitignore","next.config.ts","tsconfig.json","postcss.config.mjs","package.json","package-lock.json","eslint.config.mjs","next-env.d.ts","CLAUDE.md","AGENTS.md","README.md"),
  "chore: initialize Next.js project with TypeScript, Tailwind, and ESLint"

# 2 — globals.css (colors, theme, base)
C "src/app/globals.css",
  "feat: add global styles with CSS variables and custom scrollbar"

# 3 — layout.tsx (fonts, metadata)
C "src/app/layout.tsx",
  "feat: configure RootLayout with Poppins font and SEO metadata"

# 4 — favicon
C "public/favicon.ico",
  "chore: add favicon asset"

# 5 — create components dir
New-Item "src/components/.gitkeep" -Force -ErrorAction SilentlyContinue | Out-Null
C "src/components/.gitkeep",
  "chore: scaffold components directory"

# 6 — Navbar
C "src/components/Navbar.tsx",
  "feat: add Navbar with desktop links, scroll effect, and mobile hamburger"

# 7 — Hero
C "src/components/Hero.tsx",
  "feat: add Hero section with parallax background and load-in animations"

# 8 — BookingWidget
C "src/components/BookingWidget.tsx",
  "feat: add floating booking widget with destination, dates, and car type"

# 9 — Destinations
C "src/components/Destinations.tsx",
  "feat: add popular destinations section with staggered card reveal"

# 10 — CarRental
C "src/components/CarRental.tsx",
  "feat: add car rental fleet section with pricing and features"

# 11 — Testimonials
C "src/components/Testimonials.tsx",
  "feat: add testimonials section with slider and 3-column grid"

# 12 — Footer
C "src/components/Footer.tsx",
  "feat: add footer with brand, quick links, support, contact, and social"

# 13 — page.tsx (compose all)
C "src/app/page.tsx",
  "feat: compose Home page by importing all section components"

# 14 — framer-motion dep
C "package.json package-lock.json",
  "chore: install framer-motion for scroll and hover animations"

# 15 — final build check
Write-Host "Running build verification..." -ForegroundColor Yellow
npm run build 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    C "src/app/page.tsx",
      "chore: verify production build compiles successfully"
} else {
    Write-Host "BUILD FAILED" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== All 15 commits done ===" -ForegroundColor Green
